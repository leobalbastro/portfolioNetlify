"use server"

import { Resend } from "resend"

interface InterviewRequestData {
  name: string
  email: string
  phone?: string
  company: string
  position: string
  experience?: string
  availability?: string
  message?: string
  preferredTime?: string
  interviewType: string
}

// Inicializar Resend con la clave API desde las variables de entorno
const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitInterviewRequest(data: InterviewRequestData) {
  // Validación de datos requeridos
  if (!data.name || !data.email || !data.company || !data.position || !data.interviewType) {
    return {
      success: false,
      message: "Faltan campos requeridos: nombre, email, empresa, posición o tipo de entrevista",
    }
  }

  // Validar formato del email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(data.email)) {
    return {
      success: false,
      message: "El formato del email es inválido",
    }
  }

  try {
    // Simular retardo de API (puede eliminarse en producción)
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Aquí podrías guardar los datos en una base de datos
    console.log("Solicitud de entrevista recibida:", {
      ...data,
      timestamp: new Date().toISOString(),
    })

    // Enviar correo al administrador
    await resend.emails.send({
      from: "onboarding@resend.dev", // Cambia esto por un dominio verificado en Resend
      to: "leonardonbalbastro@gmail.com", // Tu email para recibir las solicitudes
      subject: `Nueva solicitud de entrevista de ${data.name}`,
      html: `
        <h2>Nueva solicitud de entrevista</h2>
        <p><strong>Nombre:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Teléfono:</strong> ${data.phone || "No proporcionado"}</p>
        <p><strong>Empresa:</strong> ${data.company}</p>
        <p><strong>Posición:</strong> ${data.position}</p>
        <p><strong>Tipo de entrevista:</strong> ${data.interviewType}</p>
        <p><strong>Experiencia:</strong> ${data.experience || "No proporcionada"}</p>
        <p><strong>Disponibilidad:</strong> ${data.availability || "No proporcionada"}</p>
        <p><strong>Hora preferida:</strong> ${data.preferredTime || "No proporcionada"}</p>
        <p><strong>Mensaje:</strong> ${data.message || "No proporcionado"}</p>
        <p><strong>Fecha:</strong> ${new Date().toISOString()}</p>
      `,
    })

    // Opcional: Enviar correo de confirmación al solicitante
    await resend.emails.send({
      from: "onboarding@resend.dev", // Cambia esto por un dominio verificado
      to: data.email,
      subject: "Confirmación de solicitud de entrevista",
      html: `
        <h2>Gracias por tu solicitud, ${data.name}!</h2>
        <p>Hemos recibido tu solicitud de entrevista para la posición de ${data.position} en ${data.company}.</p>
        <p>Nos pondremos en contacto contigo pronto para coordinar los detalles.</p>
        <p>Saludos,<br>Tu Nombre</p>
      `,
    })

    return {
      success: true,
      message: "Solicitud enviada exitosamente y correos enviados",
    }
  } catch (error) {
    console.error("Error al procesar solicitud o enviar correos:", error)
    return {
      success: false,
      message: "Error al enviar la solicitud o los correos",
    }
  }
}