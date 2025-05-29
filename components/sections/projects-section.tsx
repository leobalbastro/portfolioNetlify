import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Proyecto M",
    description: "Proyecto de Karaoke con funcionalidades multijugador online",
    technologies: ["Spring Boot", "Oracle DB", "Spring Security", "REST APIs", "Angular 17", "WebSockets", "Docker"],
    image: "/placeholder.svg?height=200&width=300",
    github: "#",
    demo: "#",
    status: "Desarrollo",
  },
  {
    id: 2,
    title: "Personal Portfolio Site",
    description: "Sitio web personal para mostrar proyectos y habilidades técnicas",
    technologies: ["Next.js", "TailwindCSS", "REST APIs", "Lazy Loading"],
    image: "/placeholder.svg?height=200&width=300",
    github: "#",
    demo: "#",
    status: "Desarrollo",
  },
  {
    id: 3,
    title: "Gulubu Website",
    description: "MVP de un sitio web para una empresa dedicada a la venta de productos literarios",
    technologies: ["Bootstrap", "React", "MongoDB", "API REST", "CSS"],
    image: "/gulubu.svg?height=200&width=300",
    github: "#",
    demo: "https://gulubu.netlify.app",
    status: "Completado",
  },
]

export default function ProjectsSection() {
  return (
    <section className="pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Proyectos Destacados</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Soluciones innovadoras desarrolladas con tecnologías Java modernas
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="bg-slate-800 border-slate-700 hover:border-slate-600 transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/50 group animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="aspect-video bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-t-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors duration-300"></div>
              </div>
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-white text-lg group-hover:text-orange-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <Badge
                    variant={project.status === "Producción" ? "default" : "secondary"}
                    className={project.status === "Producción" ? "bg-green-600 hover:bg-green-700" : ""}
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardDescription className="text-slate-300 leading-relaxed">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs border-slate-600 text-slate-300 hover:border-orange-500 hover:text-orange-400 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-slate-600 text-slate-300 hover:border-orange-500 hover:text-orange-400"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Código
                  </Button>
                  <Button size="sm" className="flex-1 bg-orange-600 hover:bg-orange-700">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
