import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Leonardo Balbastro Portfolio",
  description: "Portfolio de desarrollador Java especializado en Spring Boot y Oracle Database",
  openGraph: {
    title: "Leonardo Balbastro Portfolio",
    description: "Portfolio de desarrollador Java especializado en Spring Boot y Oracle Database",
    url: "https://leobalbastro.netlify.app",
    siteName: "Leonardo Balbastro Portfolio",
    images: [
      {
        url: "https://leobalbastro.netlify.app/Portfolio.png",
        secureUrl: "https://leobalbastro.netlify.app/Portfolio.png",
        type: "image/png",
        width: 1200,
        height: 630,
        alt: "Leonardo Balbastro Portfolio",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leonardo Balbastro Portfolio",
    description: "Portfolio de desarrollador Java especializado en Spring Boot y Oracle Database",
    images: ["https://leobalbastro.netlify.app/Portfolio.png"],
  },
  keywords: [
    "Leonardo Balbastro",
    "Desarrollador Java",
    "Spring Boot",
    "Oracle Database",
    "Portfolio",
    "Desarrollo Web",
    "Programación",
    "Backend Developer",
    "Java Developer",
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
