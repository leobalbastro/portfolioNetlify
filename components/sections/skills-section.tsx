import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Server, Database } from "lucide-react"

const skills = [
  { name: "Java", level: 55, color: "bg-orange-500" },
  { name: "Spring Boot", level: 40, color: "bg-green-500" },
  { name: "Oracle Database", level: 65, color: "bg-red-500" },
  { name: "Spring Security", level: 58, color: "bg-green-600" },
  { name: "REST APIs", level: 72, color: "bg-blue-500" },
  { name: "Microservices", level: 50, color: "bg-purple-500" },
]

export default function SkillsSection() {
  return (
    <section className="pt-24 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Habilidades Técnicas</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Experiencia comprobada en tecnologías Java y ecosistema empresarial
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8 animate-slide-up">
            {skills.slice(0, 3).map((skill, index) => (
              <div key={skill.name} className="space-y-3" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-white">{skill.name}</span>
                  <span className="text-slate-300 font-medium">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-8 animate-slide-up [animation-delay:200ms]">
            {skills.slice(3).map((skill, index) => (
              <div key={skill.name} className="space-y-3" style={{ animationDelay: `${(index + 3) * 100}ms` }}>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-white">{skill.name}</span>
                  <span className="text-slate-300 font-medium">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          <Card className="bg-slate-800 border-slate-700 hover:border-blue-500/50 transition-all duration-300 animate-slide-up [animation-delay:400ms]">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <div className="w-10 h-10 bg-blue-600/10 rounded-lg flex items-center justify-center mr-3">
                  <Server className="w-5 h-5 text-blue-400" />
                </div>
                Backend Technologies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {["Java 17", "Spring Boot", "Spring Security", "Spring Data JPA", "Hibernate", "Maven"].map(
                  (tech) => (
                    <Badge
                      key={tech}
                      className="bg-slate-700 text-slate-300 hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      {tech}
                    </Badge>
                  ),
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700 hover:border-red-500/50 transition-all duration-300 animate-slide-up [animation-delay:600ms]">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <div className="w-10 h-10 bg-red-600/10 rounded-lg flex items-center justify-center mr-3">
                  <Database className="w-5 h-5 text-red-400" />
                </div>
                Database & Tools
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {["Oracle 19c", "PL/SQL", "Git", "MongoDB", "Supabase"].map((tech) => (
                  <Badge
                    key={tech}
                    className="bg-slate-700 text-slate-300 hover:bg-red-600 hover:text-white transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
