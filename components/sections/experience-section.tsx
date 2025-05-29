import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "lucide-react"

const experience = [
  {
    company: "Equifax Argentina.",
    position: "Data entry + Quality Assurance",
    period: "2022 - 2022",
    description: "Procesamiento de datos y aseguramiento de calidad en sistemas de información financiera",
    technologies: ["Java 8", "Google Cloud Platform", "Big Query", "Buckets"],
  },
  {
    company: "Equifax Argentina.",
    position: "Security Analyst",
    period: "2019 - 2021",
    description: "Análisis de seguridad y gestión de vulnerabilidades en aplicaciones empresariales",
    technologies: ["Java 11", "Spring Framework", "Oracle DB", "Spring Security"],
  },
  {
    company: "Learsoft.",
    position: "Quality Assurance Analyst",
    period: "2018 - 2019",
    description: "Pruebas funcionales y automatización de procesos en aplicaciones Java",
    technologies: ["Jira", "Oracle", "SQL Sentences", "Postman"],
  },
]

export default function ExperienceSection() {
  return (
    <section className="pt-24 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Experiencia Profesional</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Trayectoria en desarrollo de software empresarial y liderazgo técnico
          </p>
        </div>
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <Card
              key={index}
              className="bg-slate-800 border-slate-700 border-l-4 border-l-orange-500 hover:border-slate-600 hover:shadow-xl hover:shadow-slate-900/50 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl text-white mb-2">{exp.position}</CardTitle>
                    <CardDescription className="text-lg font-semibold text-orange-400">{exp.company}</CardDescription>
                  </div>
                  <Badge variant="outline" className="flex items-center border-slate-600 text-slate-300 w-fit">
                    <Calendar className="w-4 h-4 mr-2" />
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 mb-6 leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      className="bg-slate-700 text-slate-300 hover:bg-orange-600 hover:text-white transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
