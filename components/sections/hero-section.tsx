import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, Coffee, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Leonardo Balbastro</h1>
          <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Desarrollador backend con Java, Spring Boot y Oracle Database. Creando soluciones robustas y
            escalables para empresas modernas.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Badge className="bg-orange-600 hover:bg-orange-700 text-white text-sm py-2 px-4">
              <Coffee className="w-4 h-4 mr-2" />
              Java 21
            </Badge>
            <Badge className="bg-green-600 hover:bg-green-700 text-white text-sm py-2 px-4">
              <Zap className="w-4 h-4 mr-2" />
              Spring Boot 3
            </Badge>
            <Badge className="bg-red-600 hover:bg-red-700 text-white text-sm py-2 px-4">
              <Database className="w-4 h-4 mr-2" />
              Oracle 19c
            </Badge>
          </div>
        </div>

        {/* Tech Stack Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <Card className="bg-slate-800 border-slate-700 hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 animate-slide-up">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-orange-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="w-8 h-8 text-orange-500" />
              </div>
              <CardTitle className="text-orange-400 text-xl">Java Development</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 text-center leading-relaxed">
                Desarrollo robusto con Java 21, programación orientada a objetos y patrones de diseño modernos.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700 hover:border-green-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10 animate-slide-up [animation-delay:200ms]">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-green-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-green-500" />
              </div>
              <CardTitle className="text-green-400 text-xl">Spring Ecosystem</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 text-center leading-relaxed">
                Spring Boot, Spring Security, Spring Data JPA para aplicaciones empresariales escalables.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700 hover:border-red-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10 sm:col-span-2 lg:col-span-1 animate-slide-up [animation-delay:400ms]">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-red-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-red-500" />
              </div>
              <CardTitle className="text-red-400 text-xl">Oracle Database</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 text-center leading-relaxed">
                Diseño y optimización de bases de datos Oracle, PL/SQL y administración solida.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
