"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X, User, Building, Calendar, Loader2 } from "lucide-react"
import { submitInterviewRequest } from "@/app/actions"

const interviewSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().optional(),
  company: z.string().min(1, "La empresa es requerida"),
  position: z.string().min(1, "La posición es requerida"),
  experience: z.string().optional(),
  availability: z.string().optional(),
  message: z.string().optional(),
  preferredTime: z.string().optional(),
  interviewType: z.string().default("virtual"),
})

type InterviewFormData = z.infer<typeof interviewSchema>

interface InterviewModalProps {
  isOpen: boolean
  onClose: () => void
}

export function InterviewModal({ isOpen, onClose }: InterviewModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<InterviewFormData>({
    resolver: zodResolver(interviewSchema),
    defaultValues: {
      interviewType: "virtual",
    },
  })

  const interviewType = watch("interviewType")

  const handleClose = () => {
    onClose()
    reset()
    setIsSubmitting(false)
  }

  const onSubmit = async (data: InterviewFormData) => {
    setIsSubmitting(true)

    try {
      const result = await submitInterviewRequest(data)

      if (result.success) {
        alert("¡Solicitud enviada exitosamente! Te contactaremos pronto.")
        handleClose()
      } else {
        alert("Error al enviar la solicitud. Por favor, intenta nuevamente.")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Error al enviar la solicitud. Por favor, intenta nuevamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-backdrop-in">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={handleClose} />

      {/* Modal */}
      <div className="relative bg-slate-800 rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-modal-in">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-700">
          <h2 className="text-2xl font-bold text-white">Solicitar Entrevista</h2>
          <button onClick={handleClose} className="text-slate-400 hover:text-white transition-colors p-2">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center">
              <User className="w-5 h-5 mr-2 text-orange-400" />
              Información Personal
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name" className="text-slate-300">
                  Nombre Completo *
                </Label>
                <Input
                  id="name"
                  {...register("name")}
                  className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Tu nombre completo"
                />
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <Label htmlFor="email" className="text-slate-300">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="tu@email.com"
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
              </div>
            </div>

            <div>
              <Label htmlFor="phone" className="text-slate-300">
                Teléfono
              </Label>
              <Input
                id="phone"
                type="tel"
                {...register("phone")}
                className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:ring-orange-500 focus:border-orange-500"
                placeholder="+52 55 1234 5678"
              />
            </div>
          </div>

          {/* Company Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center">
              <Building className="w-5 h-5 mr-2 text-orange-400" />
              Información de la Empresa
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="company" className="text-slate-300">
                  Empresa *
                </Label>
                <Input
                  id="company"
                  {...register("company")}
                  className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Nombre de la empresa"
                />
                {errors.company && <p className="text-red-400 text-sm mt-1">{errors.company.message}</p>}
              </div>

              <div>
                <Label htmlFor="position" className="text-slate-300">
                  Posición Ofrecida *
                </Label>
                <Input
                  id="position"
                  {...register("position")}
                  className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Ej: Senior Java Developer"
                />
                {errors.position && <p className="text-red-400 text-sm mt-1">{errors.position.message}</p>}
              </div>
            </div>
          </div>

          {/* Interview Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-orange-400" />
              Detalles de la Entrevista
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="experience" className="text-slate-300">
                  Años de Experiencia Requeridos
                </Label>
                <Select onValueChange={(value) => setValue("experience", value)}>
                  <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                    <SelectValue placeholder="Seleccionar..." />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-700 border-slate-600">
                    <SelectItem value="1-2">1-2 años</SelectItem>
                    <SelectItem value="3-5">3-5 años</SelectItem>
                    <SelectItem value="5-8">5-8 años</SelectItem>
                    <SelectItem value="8+">8+ años</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="interviewType" className="text-slate-300">
                  Tipo de Entrevista
                </Label>
                <Select defaultValue="virtual" onValueChange={(value) => setValue("interviewType", value)}>
                  <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-700 border-slate-600">
                    <SelectItem value="virtual">Virtual (Zoom/Teams)</SelectItem>
                    <SelectItem value="presencial">Presencial</SelectItem>
                    <SelectItem value="telefonica">Telefónica</SelectItem>
                    <SelectItem value="hibrida">Híbrida</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="availability" className="text-slate-300">
                  Disponibilidad Preferida
                </Label>
                <Select onValueChange={(value) => setValue("availability", value)}>
                  <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                    <SelectValue placeholder="Seleccionar..." />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-700 border-slate-600">
                    <SelectItem value="manana">Mañana (9:00 - 12:00)</SelectItem>
                    <SelectItem value="tarde">Tarde (12:00 - 18:00)</SelectItem>
                    <SelectItem value="noche">Noche (18:00 - 21:00)</SelectItem>
                    <SelectItem value="flexible">Flexible</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="preferredTime" className="text-slate-300">
                  Horario Preferido
                </Label>
                <Input
                  id="preferredTime"
                  {...register("preferredTime")}
                  className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Ej: Lunes a Viernes, 10:00 AM"
                />
              </div>
            </div>
          </div>

          {/* Message */}
          <div>
            <Label htmlFor="message" className="text-slate-300">
              Mensaje Adicional
            </Label>
            <Textarea
              id="message"
              {...register("message")}
              rows={4}
              className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:ring-orange-500 focus:border-orange-500 resize-none"
              placeholder="Cuéntanos más sobre el proyecto, tecnologías específicas, modalidad de trabajo, etc."
            />
          </div>

          {/* Actions */}
          <div className="flex gap-4 pt-4">
            <Button
              type="button"
              onClick={handleClose}
              variant="outline"
              className="flex-1 border-slate-600 text-slate-300 hover:border-slate-500 hover:text-white"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-orange-600 hover:bg-orange-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white"
            >
              {isSubmitting && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
              {isSubmitting ? "Enviando..." : "Enviar Solicitud"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
