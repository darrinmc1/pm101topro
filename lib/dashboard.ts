import { COURSES, getCourse, type Course, type Lesson } from "@/lib/content"

export type CourseProgress = {
  course: Course
  completed: number
  total: number
  percent: number
  resumeLesson: Lesson
}

// No seeded learner. Progress on the public site lives in the browser, not in a sample person.
const SEED_PROGRESS: Record<string, number> = {}

function toProgress(slug: string, completed: number): CourseProgress | null {
  const course = getCourse(slug)
  if (!course) return null
  const total = course.lessons.length
  const capped = Math.min(completed, total)
  const percent = Math.round((capped / total) * 100)
  const resumeIndex = Math.min(capped, total - 1)
  return {
    course,
    completed: capped,
    total,
    percent,
    resumeLesson: course.lessons[resumeIndex],
  }
}

export function getInProgressCourses(): CourseProgress[] {
  return Object.entries(SEED_PROGRESS)
    .map(([slug, done]) => toProgress(slug, done))
    .filter((p): p is CourseProgress => p !== null && p.percent < 100)
    .sort((a, b) => b.percent - a.percent)
}

export function getCompletedCourses(): CourseProgress[] {
  return Object.entries(SEED_PROGRESS)
    .map(([slug, done]) => toProgress(slug, done))
    .filter((p): p is CourseProgress => p !== null && p.percent === 100)
}

export function getRecommendedCourses(limit = 3): Course[] {
  const started = new Set(Object.keys(SEED_PROGRESS))
  return COURSES.filter((c) => !started.has(c.slug)).slice(0, limit)
}

export function getDashboardStats() {
  const all = Object.entries(SEED_PROGRESS)
    .map(([slug, done]) => toProgress(slug, done))
    .filter((p): p is CourseProgress => p !== null)

  const lessonsCompleted = all.reduce((sum, p) => sum + p.completed, 0)
  const coursesInProgress = all.filter((p) => p.percent > 0 && p.percent < 100).length
  const coursesCompleted = all.filter((p) => p.percent === 100).length

  return {
    lessonsCompleted,
    coursesInProgress,
    coursesCompleted,
    documentsCreated: SAVED_DOCUMENTS.length,
    dayStreak: 0,
  }
}

export type SavedDocument = {
  id: string
  docTypeId: string
  docTypeName: string
  title: string
  createdAt: string
}

export const SAVED_DOCUMENTS: SavedDocument[] = []
