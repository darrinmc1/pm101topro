"use client"

import { useState, useEffect, useCallback } from "react"

const STORAGE_KEY = "pm101topro_progress"

export type ProgressData = Record<string, number> // course slug -> completed lesson count

function readProgress(): ProgressData {
  if (typeof window === "undefined") return {}
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

export function useProgress() {
  const [progress, setProgress] = useState<ProgressData>({})
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setProgress(readProgress())
    setLoaded(true)
  }, [])

  const markLessonComplete = useCallback((courseSlug: string, lessonIndex: number) => {
    setProgress((prev) => {
      const current = prev[courseSlug] ?? 0
      const next = Math.max(current, lessonIndex + 1)
      const updated = { ...prev, [courseSlug]: next }
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
      } catch { /* storage full or unavailable */ }
      return updated
    })
  }, [])

  const getCourseProgress = useCallback((courseSlug: string, totalLessons: number) => {
    const completed = progress[courseSlug] ?? 0
    return {
      completed: Math.min(completed, totalLessons),
      total: totalLessons,
      percent: Math.round((Math.min(completed, totalLessons) / totalLessons) * 100),
    }
  }, [progress])

  const getAllProgress = useCallback(() => progress, [progress])

  return { progress, loaded, markLessonComplete, getCourseProgress, getAllProgress }
}
