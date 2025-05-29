"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, Github, Linkedin } from "lucide-react"

interface ContactSectionProps {
  onOpenInterviewModal: () => void
}

export default function ContactSection({ onOpenInterviewModal }: ContactSectionProps) {
  return (
    <section className="pt-24 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Contacto</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            ¿Tienes un proyecto interesante? ¡Hablemos sobre cómo puedo ayudarte!
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="bg-slate-800 border-slate-700 hover:border-slate-600 transition-all duration-300 animate-slide-up">
            <CardHeader>
              <CardTitle className="text-white text-xl">Información de Contacto</CardTitle>
              <CardDescription className="text-slate-300">
                Siempre abierto a nuevas oportunidades y colaboraciones
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-orange-600/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-orange-400" />
                </div>
                <span className="text-slate-300">leobalbastro.arg@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-orange-600/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-orange-400" />
                </div>
                <span className="text-slate-300">Ciudad Autónoma de Buenos Aires, Argentina</span>
              </div>
              <div className="flex gap-4 pt-4">
                <Button
                  variant="outline"
                  className="flex-1 border-slate-600 text-slate-300 hover:border-orange-500 hover:text-orange-400"
                  onClick={() => window.open("https://github.com/leobalbastro", "_blank")}
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-slate-600 text-slate-300 hover:border-orange-500 hover:text-orange-400"
                  onClick={() => window.open("https://www.linkedin.com/in/leobalbastro/", "_blank")}
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700 hover:border-slate-600 transition-all duration-300 animate-slide-up [animation-delay:200ms]">
            <CardHeader>
              <CardTitle className="text-white text-xl">Disponibilidad</CardTitle>
              <CardDescription className="text-slate-300">Estado actual para nuevos proyectos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Proyectos Freelance</span>
                  <Badge className="bg-green-600 hover:bg-green-700 text-white">Disponible</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Consultoría Técnica</span>
                  <Badge className="bg-green-600 hover:bg-green-700 text-white">Disponible</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Tiempo Completo</span>
                  <Badge className="bg-slate-700 text-slate-300">Considerando</Badge>
                </div>
              </div>
              <Button
                onClick={onOpenInterviewModal}
                className="w-full mt-8 bg-orange-600 hover:bg-orange-700 text-white"
              >
                <Mail className="w-4 h-4 mr-2" />
                Solicitar Entrevista
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
