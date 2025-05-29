"use client"

import { useState, useEffect, Suspense, lazy } from "react"
import { Button } from "@/components/ui/button"
import { Coffee, Menu, X } from "lucide-react"
import { InterviewModal } from "@/components/interview-modal"
import { HeroSection } from "@/components/sections/hero-section"
import { LoadingSkeleton } from "@/components/loading-skeleton"

// Lazy load sections for better performance
const ProjectsSection = lazy(() => import("@/components/sections/projects-section"))
const SkillsSection = lazy(() => import("@/components/sections/skills-section"))
const ExperienceSection = lazy(() => import("@/components/sections/experience-section"))
const ContactSection = lazy(() => import("@/components/sections/contact-section"))

export default function JavaPortfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isInterviewModalOpen, setIsInterviewModalOpen] = useState(false)

  const navItems = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  const openInterviewModal = () => {
    setIsInterviewModalOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeInterviewModal = () => {
    setIsInterviewModalOpen(false)
    document.body.style.overflow = "auto"
  }

  return (
    <div className="min-h-screen bg-slate-900 select-none">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-800/95 backdrop-blur-sm z-50 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-orange-600 rounded-lg">
                <Coffee className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Leo Balbastro</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-4 py-2 rounded-lg capitalize transition-all duration-200 text-slate-300 hover:text-white hover:bg-slate-700"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-300 hover:text-white p-2"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-700">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="px-4 py-3 rounded-lg capitalize text-left transition-all duration-200 text-slate-300 hover:text-white hover:bg-slate-700"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {/* Hero Section - Always loaded */}
        <section id="home">
          <HeroSection />
        </section>

        {/* Projects Section - Lazy loaded */}
        <section id="projects">
          <Suspense fallback={<LoadingSkeleton type="projects" />}>
            <ProjectsSection />
          </Suspense>
        </section>

        {/* Skills Section - Lazy loaded */}
        <section id="skills">
          <Suspense fallback={<LoadingSkeleton type="skills" />}>
            <SkillsSection />
          </Suspense>
        </section>

        {/* Experience Section - Lazy loaded */}
        <section id="experience">
          <Suspense fallback={<LoadingSkeleton type="experience" />}>
            <ExperienceSection />
          </Suspense>
        </section>

        {/* Contact Section - Lazy loaded */}
        <section id="contact">
          <Suspense fallback={<LoadingSkeleton type="contact" />}>
            <ContactSection onOpenInterviewModal={openInterviewModal} />
          </Suspense>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 border-t border-slate-700 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center space-x-3 mb-6">
            <div className="p-2 bg-orange-600 rounded-lg">
              <Coffee className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Leonardo Balbastro Portfolio</span>
          </div>
          <p className="text-slate-400 text-sm">
            © 2024 Leonardo Balbastro Portfolio. Construido con Next.js, Tailwind CSS y mucho ☕
          </p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <ScrollToTopButton />

      {/* Interview Modal */}
      <InterviewModal isOpen={isInterviewModalOpen} onClose={closeInterviewModal} />
    </div>
  )
}

// Scroll to Top Button Component
function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // Set up scroll listener with useEffect
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 bg-orange-600 hover:bg-orange-700 text-white p-3 rounded-full shadow-lg transition-all duration-300"
          size="icon"
        >
          <Coffee className="h-5 w-5" />
        </Button>
      )}
    </>
  )
}
