export default function RootLoading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="relative h-12 w-12">
          <div className="absolute inset-0 animate-ping rounded-full bg-accent/20" />
          <div className="absolute inset-1 animate-spin rounded-full border-2 border-transparent border-t-accent" />
        </div>
        <p className="text-sm text-muted-foreground">
          Running a status update...
        </p>
      </div>
    </div>
  )
}
