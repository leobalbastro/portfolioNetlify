import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface LoadingSkeletonProps {
  type: "projects" | "skills" | "experience" | "contact"
}

export function LoadingSkeleton({ type }: LoadingSkeletonProps) {
  const renderProjectsSkeleton = () => (
    <section className="pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="h-12 bg-slate-700 rounded-lg w-96 mx-auto mb-4 animate-pulse"></div>
          <div className="h-6 bg-slate-700 rounded-lg w-80 mx-auto animate-pulse"></div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="bg-slate-800 border-slate-700">
              <div className="aspect-video bg-slate-700 rounded-t-lg animate-pulse"></div>
              <CardHeader className="pb-4">
                <div className="h-6 bg-slate-700 rounded w-3/4 mb-2 animate-pulse"></div>
                <div className="h-4 bg-slate-700 rounded w-full mb-1 animate-pulse"></div>
                <div className="h-4 bg-slate-700 rounded w-2/3 animate-pulse"></div>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 mb-6">
                  {[1, 2, 3].map((j) => (
                    <div key={j} className="h-6 bg-slate-700 rounded w-16 animate-pulse"></div>
                  ))}
                </div>
                <div className="flex gap-3">
                  <div className="h-8 bg-slate-700 rounded flex-1 animate-pulse"></div>
                  <div className="h-8 bg-slate-700 rounded flex-1 animate-pulse"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )

  const renderSkillsSkeleton = () => (
    <section className="pt-24 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="h-12 bg-slate-700 rounded-lg w-96 mx-auto mb-4 animate-pulse"></div>
          <div className="h-6 bg-slate-700 rounded-lg w-80 mx-auto animate-pulse"></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {[1, 2].map((col) => (
            <div key={col} className="space-y-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="h-6 bg-slate-700 rounded w-24 animate-pulse"></div>
                    <div className="h-6 bg-slate-700 rounded w-12 animate-pulse"></div>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-3 animate-pulse"></div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )

  const renderExperienceSkeleton = () => (
    <section className="pt-24 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="h-12 bg-slate-700 rounded-lg w-96 mx-auto mb-4 animate-pulse"></div>
          <div className="h-6 bg-slate-700 rounded-lg w-80 mx-auto animate-pulse"></div>
        </div>
        <div className="space-y-8">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="bg-slate-800 border-slate-700 border-l-4 border-l-orange-500">
              <CardHeader>
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <div className="h-6 bg-slate-700 rounded w-48 mb-2 animate-pulse"></div>
                    <div className="h-5 bg-slate-700 rounded w-32 animate-pulse"></div>
                  </div>
                  <div className="h-6 bg-slate-700 rounded w-24 animate-pulse"></div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-4 bg-slate-700 rounded w-full mb-2 animate-pulse"></div>
                <div className="h-4 bg-slate-700 rounded w-3/4 mb-6 animate-pulse"></div>
                <div className="flex gap-2">
                  {[1, 2, 3, 4].map((j) => (
                    <div key={j} className="h-6 bg-slate-700 rounded w-16 animate-pulse"></div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )

  const renderContactSkeleton = () => (
    <section className="pt-24 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="h-12 bg-slate-700 rounded-lg w-96 mx-auto mb-4 animate-pulse"></div>
          <div className="h-6 bg-slate-700 rounded-lg w-80 mx-auto animate-pulse"></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          {[1, 2].map((i) => (
            <Card key={i} className="bg-slate-800 border-slate-700">
              <CardHeader>
                <div className="h-6 bg-slate-700 rounded w-48 mb-2 animate-pulse"></div>
                <div className="h-4 bg-slate-700 rounded w-64 animate-pulse"></div>
              </CardHeader>
              <CardContent className="space-y-6">
                {[1, 2, 3].map((j) => (
                  <div key={j} className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-slate-700 rounded-lg animate-pulse"></div>
                    <div className="h-4 bg-slate-700 rounded w-48 animate-pulse"></div>
                  </div>
                ))}
                <div className="h-10 bg-slate-700 rounded w-full animate-pulse"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )

  switch (type) {
    case "projects":
      return renderProjectsSkeleton()
    case "skills":
      return renderSkillsSkeleton()
    case "experience":
      return renderExperienceSkeleton()
    case "contact":
      return renderContactSkeleton()
    default:
      return null
  }
}
