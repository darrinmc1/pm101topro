export type WrittenLesson = {
  intro: string
  sections: {
    id: string
    title: string
    body: string[]
  }[]
}

export type LessonBodies = Record<string, WrittenLesson>
