"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Typewriter } from "@/components/ui/typewriter"
import {
  Menu,
  X,
  Mail,
  Linkedin,
  Moon,
  Sun,
  Calculator,
  BarChart3,
  Briefcase,
  Users,
  Pill,
  Cross,
  Smartphone,
  DollarSign,
} from "lucide-react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "experience", "contact"]
      const scrollPosition = window.scrollY + 100
      setIsScrolled(window.scrollY > 50)

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in")
        }
      })
    }, observerOptions)

    const sections = document.querySelectorAll("section")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const navItems = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ]

  const typewriterPhrases = ["Product Management", "Product Strategy", "Vibe-Coding", "Roadmap Creation & Execution"]

  return (
    <div
      className={`min-h-screen font-inter transition-all duration-500 ${isDarkMode ? "dark bg-background" : "bg-background"}`}
    >
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? isDarkMode
              ? "bg-background/80 backdrop-blur-md border-b border-border/50"
              : "bg-background/80 backdrop-blur-md border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Added Memoji image to header navigation */}
            <div
              className={`font-medium text-xl transition-colors duration-500 flex items-center gap-3 ${
                isDarkMode ? "text-foreground" : "text-foreground"
              }`}
            >
              <img src="/memoji.png" alt="Ajay Nichani Memoji" className="w-10 h-10 rounded-full" />
              Ajay Nichani
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    activeSection === item.id ? "text-primary" : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                </button>
              ))}

              {/* Dark Mode Toggle */}
              <div className="flex items-center space-x-3">
                <Sun
                  className={`h-4 w-4 transition-colors ${isDarkMode ? "text-muted-foreground" : "text-amber-500"}`}
                />
                <Switch checked={isDarkMode} onCheckedChange={toggleDarkMode} />
                <Moon
                  className={`h-4 w-4 transition-colors ${isDarkMode ? "text-primary" : "text-muted-foreground"}`}
                />
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <Sun
                  className={`h-4 w-4 transition-colors ${isDarkMode ? "text-muted-foreground" : "text-amber-500"}`}
                />
                <Switch checked={isDarkMode} onCheckedChange={toggleDarkMode} />
                <Moon
                  className={`h-4 w-4 transition-colors ${isDarkMode ? "text-primary" : "text-muted-foreground"}`}
                />
              </div>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-4 pt-4 pb-6 space-y-3 border-t bg-background/95 border-border/50">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block px-4 py-3 text-base font-medium transition-colors ${
                      activeSection === item.id ? "text-primary" : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 lg:px-8 transition-colors duration-500 bg-background"
      >
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 transition-colors duration-500 text-foreground">
            Hi, I'm {/* Updated gradient to use new color palette */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Ajay Nichani</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-medium mb-8 transition-colors duration-500 text-muted-foreground">
            Full-Stack Product Manager
          </h2>

          <div className="mb-12 flex justify-center">
            <Typewriter phrases={typewriterPhrases} />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-medium transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get in Touch
            </Button>
            <Button
              onClick={() => scrollToSection("projects")}
              variant="outline"
              className="px-8 py-3 text-lg font-medium transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-border text-foreground hover:bg-muted hover:border-primary"
            >
              View My Work
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 transition-colors duration-500 opacity-0 bg-card">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 transition-colors duration-500 text-foreground">
              Products & Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* MathStack AI */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group bg-background">
              <CardContent className="p-8">
                <a
                  href="https://mathstackai.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:opacity-80 transition-opacity"
                >
                  <h3 className="text-2xl font-semibold mb-4 transition-colors duration-500 text-foreground">
                    MathStack AI
                  </h3>
                </a>
                <p className="mb-6 leading-relaxed transition-colors duration-500 text-muted-foreground">
                  An AI-powered EdTech platform for mathematics learning that personalizes the educational experience
                  using advanced machine learning algorithms.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-primary/10 text-primary hover:scale-105 transition-transform">AI/ML</Badge>
                  <Badge className="bg-primary/10 text-primary hover:scale-105 transition-transform">EdTech</Badge>
                  <Badge className="bg-primary/10 text-primary hover:scale-105 transition-transform">Next.js</Badge>
                  <Badge className="bg-primary/10 text-primary hover:scale-105 transition-transform">
                    User Accounts
                  </Badge>
                  <Badge className="bg-primary/10 text-primary hover:scale-105 transition-transform">
                    Database Creation
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* InterRoom */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group bg-background">
              <CardContent className="p-8">
                <a
                  href="https://interroom.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:opacity-80 transition-opacity"
                >
                  <h3 className="text-2xl font-semibold mb-4 transition-colors duration-500 text-foreground">
                    InterRoom
                  </h3>
                </a>
                <p className="mb-6 leading-relaxed transition-colors duration-500 text-muted-foreground">
                  An HR SaaS platform featuring a comprehensive client portal and job tracker, streamlining recruitment
                  processes for enterprise clients.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-accent/10 text-accent hover:scale-105 transition-transform">SaaS</Badge>
                  <Badge className="bg-accent/10 text-accent hover:scale-105 transition-transform">HR Tech</Badge>
                  <Badge className="bg-accent/10 text-accent hover:scale-105 transition-transform">React</Badge>
                  <Badge className="bg-accent/10 text-accent hover:scale-105 transition-transform">Firebase</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Behavioral Interview App */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group bg-background">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 transition-colors duration-500 text-foreground">
                  Behavioral Interview App
                </h3>
                <p className="mb-6 leading-relaxed transition-colors duration-500 text-muted-foreground">
                  A mobile application designed to improve math skills through behavioral science principles, making
                  learning engaging and effective.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-primary/10 text-primary hover:scale-105 transition-transform">Mobile App</Badge>
                  <Badge className="bg-primary/10 text-primary hover:scale-105 transition-transform">EdTech</Badge>
                  <Badge className="bg-primary/10 text-primary hover:scale-105 transition-transform">
                    Gamification
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* NFL Pick 'Em App */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group bg-background">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 transition-colors duration-500 text-foreground">
                  NFL Pick 'Em App
                </h3>
                <p className="mb-6 leading-relaxed transition-colors duration-500 text-muted-foreground">
                  A web application for friends to compete in NFL weekly pick'em pools, featuring real-time scoring and
                  social competition.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-accent/10 text-accent hover:scale-105 transition-transform">Web App</Badge>
                  <Badge className="bg-accent/10 text-accent hover:scale-105 transition-transform">
                    End-to-End Development
                  </Badge>
                  <Badge className="bg-accent/10 text-accent hover:scale-105 transition-transform">
                    Monetization (Stripe)
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 transition-colors duration-500 opacity-0 bg-background">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 transition-colors duration-500 text-foreground">Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical dashed line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px border-l-2 border-dashed border-border"></div>

              <div className="space-y-12">
                {/* MathStack AI */}
                <div className="relative flex items-start">
                  {/* Left side - Date */}
                  <div className="w-1/2 pr-8 text-right">
                    <p className="text-lg font-medium text-muted-foreground">2024 - Present</p>
                  </div>

                  {/* Center circle */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1">
                    <div className="w-6 h-6 rounded-full border-2 border-dashed border-primary bg-background flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-primary"></div>
                    </div>
                  </div>

                  {/* Right side - Job info */}
                  <div className="w-1/2 pl-8">
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-2 text-foreground">Founder</h4>
                        <h5 className="text-lg text-primary mb-3 font-medium">MathStack AI</h5>
                        <ul className="space-y-2 leading-relaxed text-muted-foreground">
                          <li>• Founded an AI-powered EdTech platform focused on mathematics learning</li>
                          <li>• Developed innovative AI-driven solutions for personalized learning experiences</li>
                          <li>• Built end-to-end product strategy and technical implementation</li>
                        </ul>
                      </div>
                      <div className="flex flex-col gap-3 pt-2">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Calculator className="h-5 w-5 text-primary" />
                        </div>
                        <div className="p-2 rounded-lg bg-primary/10">
                          <BarChart3 className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* InterRoom */}
                <div className="relative flex items-start">
                  {/* Left side - Date */}
                  <div className="w-1/2 pr-8 text-right">
                    <p className="text-lg font-medium text-muted-foreground">2023 - Present</p>
                  </div>

                  {/* Center circle */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1">
                    <div className="w-6 h-6 rounded-full border-2 border-dashed border-accent bg-background flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-accent"></div>
                    </div>
                  </div>

                  {/* Right side - Job info */}
                  <div className="w-1/2 pl-8">
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-2 text-foreground">Product Lead</h4>
                        <h5 className="text-lg text-accent mb-3 font-medium">InterRoom</h5>
                        <ul className="space-y-2 leading-relaxed text-muted-foreground">
                          <li>• Leading product development for HR SaaS platform with client portal and job tracker</li>
                          <li>• Driving user-centric design and feature development</li>
                          <li>• Managing cross-functional teams to deliver enterprise solutions</li>
                        </ul>
                      </div>
                      <div className="flex flex-col gap-3 pt-2">
                        <div className="p-2 rounded-lg bg-accent/10">
                          <Briefcase className="h-5 w-5 text-accent" />
                        </div>
                        <div className="p-2 rounded-lg bg-accent/10">
                          <Users className="h-5 w-5 text-accent" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Nimble RX */}
                <div className="relative flex items-start">
                  {/* Left side - Date */}
                  <div className="w-1/2 pr-8 text-right">
                    <p className="text-lg font-medium text-muted-foreground">2022</p>
                  </div>

                  {/* Center circle */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1">
                    <div className="w-6 h-6 rounded-full border-2 border-dashed border-primary bg-background flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-primary"></div>
                    </div>
                  </div>

                  {/* Right side - Job info */}
                  <div className="w-1/2 pl-8">
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-2 text-foreground">Senior Product Manager</h4>
                        <h5 className="text-lg text-primary mb-3 font-medium">Nimble RX</h5>
                        <ul className="space-y-2 leading-relaxed text-muted-foreground">
                          <li>• Managed product development for healthcare technology solutions</li>
                          <li>• Focused on improving patient experience and operational efficiency</li>
                          <li>• Collaborated with healthcare professionals to define product requirements</li>
                        </ul>
                      </div>
                      <div className="flex flex-col gap-3 pt-2">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Pill className="h-5 w-5 text-primary" />
                        </div>
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Cross className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Shopkick */}
                <div className="relative flex items-start">
                  {/* Left side - Date */}
                  <div className="w-1/2 pr-8 text-right">
                    <p className="text-lg font-medium text-muted-foreground">2017 - 2022</p>
                  </div>

                  {/* Center circle */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1">
                    <div className="w-6 h-6 rounded-full border-2 border-dashed border-accent bg-background flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-accent"></div>
                    </div>
                  </div>

                  {/* Right side - Job info */}
                  <div className="w-1/2 pl-8">
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-2 text-foreground">
                          Senior Product Manager / Product Manager
                        </h4>
                        <h5 className="text-lg text-accent mb-3 font-medium">Shopkick</h5>
                        <ul className="space-y-2 leading-relaxed text-muted-foreground">
                          <li>
                            • Led development of Digital Receipts product line, increasing purchase conversion by 30%
                            YoY
                          </li>
                          <li>• Built Targeted Video Advertising platform generating $10M ARR</li>
                          <li>• Managed end-to-end product lifecycle from conception to launch</li>
                          <li>• Drove user acquisition and engagement strategies for mobile commerce platform</li>
                          <li>
                            • Collaborated with engineering, design, and business teams to deliver impactful features
                          </li>
                        </ul>
                      </div>
                      <div className="flex flex-col gap-3 pt-2">
                        <div className="p-2 rounded-lg bg-accent/10">
                          <Smartphone className="h-5 w-5 text-accent" />
                        </div>
                        <div className="p-2 rounded-lg bg-accent/10">
                          <DollarSign className="h-5 w-5 text-accent" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 relative overflow-hidden opacity-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold text-foreground mb-4">Get in Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate on your next product challenge? Let's connect and explore how we can create exceptional
            user experiences together.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 text-lg font-medium flex items-center gap-3 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => window.open("mailto:ajay@example.com", "_blank")}
            >
              <Mail size={20} />
              Email Me
            </Button>
            <Button
              variant="outline"
              className="border-border text-foreground hover:bg-muted hover:border-primary px-10 py-4 text-lg font-medium flex items-center gap-3 bg-transparent transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => window.open("https://linkedin.com/in/ajaynichani", "_blank")}
            >
              <Linkedin size={20} />
              LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 transition-colors duration-500 bg-card border-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">© 2025 Ajay Nichani. All Rights Reserved.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  )
}
