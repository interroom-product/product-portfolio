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
  Lightbulb,
  Building,
  Heart,
  ShoppingBag,
  Code,
} from "lucide-react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "core-competencies", "case-studies", "ai-projects", "experience", "contact"]
      const scrollPosition = window.scrollY + 100
      const newIsScrolled = window.scrollY > 50
      setIsScrolled(newIsScrolled)

      console.log("[v0] Scroll position:", window.scrollY, "isScrolled:", newIsScrolled)

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
    { id: "core-competencies", label: "About Me" },
    { id: "case-studies", label: "Case Studies" },
    { id: "ai-projects", label: "AI Projects" },
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
            ? "bg-white/90 backdrop-blur-md border-b border-gray-200 dark:bg-gray-900/90 dark:border-gray-700"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div
              className={`font-medium text-xl transition-colors duration-500 flex items-center gap-3 nav-logo ${isScrolled ? "scrolled" : "not-scrolled"}`}
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
                  className={`text-sm font-medium transition-all duration-300 hover:scale-105 nav-item ${isScrolled ? "scrolled" : "not-scrolled"} ${activeSection === item.id ? "active" : "inactive"}`}
                >
                  {item.label}
                </button>
              ))}

              {/* Dark Mode Toggle */}
              <div className="flex items-center space-x-3">
                <Sun
                  className={`h-4 w-4 transition-colors ${
                    isScrolled ? "text-yellow-500 dark:text-yellow-400" : "text-white/80"
                  }`}
                  style={{ filter: isScrolled ? "none" : "drop-shadow(0 1px 2px rgba(0, 0, 0, 0.5))" }}
                />
                <Switch checked={isDarkMode} onCheckedChange={toggleDarkMode} />
                <Moon
                  className={`h-4 w-4 transition-colors ${
                    isScrolled ? "text-gray-600 dark:text-gray-300" : "text-white/80"
                  }`}
                  style={{ filter: isScrolled ? "none" : "drop-shadow(0 1px 2px rgba(0, 0, 0, 0.5))" }}
                />
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <Sun
                  className={`h-4 w-4 transition-colors ${
                    isScrolled ? "text-yellow-500 dark:text-yellow-400" : "text-white/80"
                  }`}
                  style={{ filter: isScrolled ? "none" : "drop-shadow(0 1px 2px rgba(0, 0, 0, 0.5))" }}
                />
                <Switch checked={isDarkMode} onCheckedChange={toggleDarkMode} />
                <Moon
                  className={`h-4 w-4 transition-colors ${
                    isScrolled ? "text-gray-600 dark:text-gray-300" : "text-white/80"
                  }`}
                  style={{ filter: isScrolled ? "none" : "drop-shadow(0 1px 2px rgba(0, 0, 0, 0.5))" }}
                />
              </div>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`transition-colors nav-mobile-button ${isScrolled ? "scrolled" : "not-scrolled"}`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-4 pt-4 pb-6 space-y-3 border-t bg-white/95 dark:bg-gray-900/95 border-gray-200 dark:border-gray-700">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block px-4 py-3 text-base font-medium transition-colors w-full text-left nav-mobile-item ${activeSection === item.id ? "active" : "inactive"}`}
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
        className="min-h-screen flex items-center justify-center px-6 lg:px-8 transition-colors duration-500"
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
        }}
      >
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 transition-colors duration-500 text-white drop-shadow-lg">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Ajay Nichani
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-medium mb-4 transition-colors duration-500 text-slate-200 drop-shadow-md">
            Full-Stack Product Manager
          </h2>

          <p className="text-lg md:text-xl mb-8 transition-colors duration-500 text-slate-300 max-w-3xl mx-auto drop-shadow-md">
            I build products at the intersection of AI and strategy — from 0→1 experimentation to scaling growth.
          </p>

          <div className="mb-12 flex justify-center">
            <Typewriter phrases={typewriterPhrases} />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get in Touch
            </Button>
            <Button
              onClick={() => scrollToSection("case-studies")}
              variant="outline"
              className="px-8 py-3 text-lg font-medium transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-slate-300 text-white hover:bg-white/10 hover:border-blue-400 backdrop-blur-sm"
            >
              View My Work
            </Button>
          </div>
        </div>
      </section>

      <section id="core-competencies" className="py-24 transition-colors duration-500 opacity-0 bg-background">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 transition-colors duration-500 text-foreground">
              Core Competencies
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Generative AI Card */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group bg-card">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mb-6 mx-auto rounded-lg bg-primary/10 flex items-center justify-center">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Generative AI</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• LLM Apps</li>
                  <li>• AI-Powered Workflows</li>
                  <li>• Experimentation</li>
                </ul>
              </CardContent>
            </Card>

            {/* Product Management Card */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group bg-card">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mb-6 mx-auto rounded-lg bg-accent/10 flex items-center justify-center">
                  <Briefcase className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Product Management</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Roadmaps</li>
                  <li>• Discovery</li>
                  <li>• Execution</li>
                </ul>
              </CardContent>
            </Card>

            {/* Product Strategy Card */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group bg-card">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mb-6 mx-auto rounded-lg bg-primary/10 flex items-center justify-center">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Product Strategy</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Growth</li>
                  <li>• Go-to-Market Strategy</li>
                  <li>• A/B Testing</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group bg-card">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mb-6 mx-auto rounded-lg bg-accent/10 flex items-center justify-center">
                  <Code className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Full-Stack Development</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Frontend (React/Next.js)</li>
                  <li>• Backend (Node.js)</li>
                  <li>• Databases (Supabase)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="case-studies" className="py-24 transition-colors duration-500 opacity-0 bg-card">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 transition-colors duration-500 text-foreground">Case Studies</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {/* Shopkick Case Study */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group bg-background">
              <CardContent className="p-8">
                <h4 className="text-2xl font-semibold mb-2 text-foreground">Digital Receipts Product Line</h4>
                <h5 className="text-lg text-primary mb-4 font-medium">Shopkick</h5>
                <p className="mb-6 leading-relaxed transition-colors duration-500 text-muted-foreground">
                  Led the development of a major new feature to drive user engagement by rewarding users for any
                  purchase.
                </p>

                <div className="grid gap-4 py-4 text-left">
                  <div>
                    <h4 className="font-semibold mb-1">Problem</h4>
                    <p className="text-sm text-muted-foreground">
                      Users wanted more ways to earn rewards, and the business needed a scalable way to validate
                      purchases from any store.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Actions</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      <li>Conducted user interviews to define key pain points and feature requirements.</li>
                      <li>Developed a prioritized roadmap and wrote PRDs for the engineering team.</li>
                      <li>Collaborated with marketing on a successful go-to-market strategy.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Impact</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      <li>
                        Increased purchase conversion by <strong>30% YoY</strong>.
                      </li>
                      <li>
                        Drove a <strong>25% increase</strong> in weekly active users.
                      </li>
                      <li>
                        The Targeted Video Advertising platform built on this feature generated{" "}
                        <strong>$10M ARR</strong>.
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* InterRoom Case Study */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group bg-background">
              <CardContent className="p-8">
                <h4 className="text-2xl font-semibold mb-2 text-foreground">HR SaaS Platform</h4>
                <h5 className="text-lg text-primary mb-4 font-medium">InterRoom</h5>
                <p className="mb-6 leading-relaxed transition-colors duration-500 text-muted-foreground">
                  Led product development for a comprehensive HR SaaS platform featuring a client portal and job
                  tracker.
                </p>

                <div className="grid gap-4 py-4 text-left">
                  <div>
                    <h4 className="font-semibold mb-1">Problem</h4>
                    <p className="text-sm text-muted-foreground">
                      Enterprise HR teams were struggling with fragmented systems, leading to inefficient hiring
                      processes and a poor candidate experience.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Actions</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      <li>Drove the product strategy from concept to launch, focusing on user-centric design.</li>
                      <li>
                        Managed a cross-functional team of engineers and designers to build and iterate on the platform.
                      </li>
                      <li>
                        Defined and analyzed key metrics to inform the product roadmap and feature prioritization.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Impact</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      <li>
                        Reduced time-to-hire by <strong>40%</strong> for initial enterprise clients.
                      </li>
                      <li>
                        Achieved a <strong>95% user satisfaction rate</strong> based on client feedback surveys.
                      </li>
                      <li>
                        Secured <strong>$500k in seed funding</strong> based on the initial product traction.
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* NimbleRx Case Study */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group bg-background">
              <CardContent className="p-8">
                <h4 className="text-2xl font-semibold mb-2 text-foreground">Healthcare Technology Solutions</h4>
                <h5 className="text-lg text-primary mb-4 font-medium">NimbleRx</h5>
                <p className="mb-6 leading-relaxed transition-colors duration-500 text-muted-foreground">
                  Managed product development for healthcare technology solutions focused on improving patient
                  experience and operational efficiency.
                </p>

                <div className="grid gap-4 py-4 text-left">
                  <div>
                    <h4 className="font-semibold mb-1">Problem</h4>
                    <p className="text-sm text-muted-foreground">
                      Healthcare providers needed better technology solutions to improve patient experience and
                      streamline operations.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Actions</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      <li>Collaborated with healthcare professionals to define product requirements.</li>
                      <li>Led cross-functional teams to deliver patient-focused solutions.</li>
                      <li>Implemented data-driven approaches to improve operational efficiency.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Impact</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      <li>
                        Improved patient satisfaction scores by <strong>40%</strong>.
                      </li>
                      <li>
                        Reduced operational costs by <strong>20%</strong> through process optimization.
                      </li>
                      <li>
                        Successfully launched <strong>3 major product features</strong> on schedule.
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="ai-projects" className="py-24 transition-colors duration-500 opacity-0 bg-background">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 transition-colors duration-500 text-foreground">
              Prototyped & Shipped with AI
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* MathStack AI */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group bg-card">
              <CardContent className="p-8">
                <img
                  src="/mathstack-logo.png"
                  alt="MathStack AI Logo"
                  className="w-16 h-16 mb-4 rounded-lg object-contain"
                />
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

            {/* PickTrckr */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group bg-card">
              <CardContent className="p-8">
                <img
                  src="/picktrckr-logo.png"
                  alt="PickTrckr Logo"
                  className="w-16 h-16 mb-4 rounded-lg object-contain"
                />
                <a
                  href="https://v0-nfl-betting-app-beta.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:opacity-80 transition-opacity"
                >
                  <h3 className="text-2xl font-semibold mb-4 transition-colors duration-500 text-foreground">
                    PickTrckr
                  </h3>
                </a>
                <p className="mb-6 leading-relaxed transition-colors duration-500 text-muted-foreground">
                  A web application for friends to compete in NFL weekly pick'em pools, featuring real-time scoring and
                  social competition.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-accent/20 text-accent-foreground hover:scale-105 transition-transform">
                    Web App
                  </Badge>
                  <Badge className="bg-accent/20 text-accent-foreground hover:scale-105 transition-transform">
                    End-to-End Development
                  </Badge>
                  <Badge className="bg-accent/20 text-accent-foreground hover:scale-105 transition-transform">
                    Monetization (Stripe)
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Coming Soon */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group bg-card border-2 border-dashed border-muted-foreground/30">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mb-4 mx-auto rounded-lg bg-muted flex items-center justify-center">
                  <Lightbulb className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 transition-colors duration-500 text-foreground">
                  More Coming Soon
                </h3>
                <p className="mb-6 leading-relaxed transition-colors duration-500 text-muted-foreground">
                  Exciting new projects are in development. Stay tuned for innovative solutions that will push the
                  boundaries of technology and user experience.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge className="bg-muted text-muted-foreground hover:scale-105 transition-transform">
                    Innovation
                  </Badge>
                  <Badge className="bg-muted text-muted-foreground hover:scale-105 transition-transform">
                    In Progress
                  </Badge>
                  <Badge className="bg-muted text-muted-foreground hover:scale-105 transition-transform">
                    Stay Tuned
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="experience" className="py-24 transition-colors duration-500 opacity-0 bg-card">
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
                    <div className="flex justify-end pt-2">
                      <div className="p-2 rounded-full bg-primary/10">
                        <Lightbulb className="h-4 w-4 text-primary" />
                      </div>
                    </div>
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
                    <div className="flex justify-end pt-2">
                      <div className="p-2 rounded-full bg-accent/10">
                        <Building className="h-4 w-4 text-accent" />
                      </div>
                    </div>
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
                        <ul className="space-y-2 leading-relaxed text-muted-foreground mb-4">
                          <li>• Leading product development for HR SaaS platform with client portal and job tracker</li>
                          <li>• Driving user-centric design and feature development</li>
                          <li>• Managing cross-functional teams to deliver enterprise solutions</li>
                        </ul>
                        <Button
                          onClick={() => scrollToSection("case-studies")}
                          variant="outline"
                          size="sm"
                          className="mt-2"
                        >
                          View Case Study
                        </Button>
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
                    <div className="flex justify-end pt-2">
                      <div className="p-2 rounded-full bg-primary/10">
                        <Heart className="h-4 w-4 text-primary" />
                      </div>
                    </div>
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
                        <ul className="space-y-2 leading-relaxed text-muted-foreground mb-4">
                          <li>• Managed product development for healthcare technology solutions</li>
                          <li>• Focused on improving patient experience and operational efficiency</li>
                          <li>• Collaborated with healthcare professionals to define product requirements</li>
                        </ul>
                        <Button
                          onClick={() => scrollToSection("case-studies")}
                          variant="outline"
                          size="sm"
                          className="mt-2"
                        >
                          View Case Study
                        </Button>
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
                    <div className="flex justify-end pt-2">
                      <div className="p-2 rounded-full bg-accent/10">
                        <ShoppingBag className="h-4 w-4 text-accent" />
                      </div>
                    </div>
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
                        <ul className="space-y-2 leading-relaxed text-muted-foreground mb-4">
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
                        <Button
                          onClick={() => scrollToSection("case-studies")}
                          variant="outline"
                          size="sm"
                          className="mt-2"
                        >
                          View Case Study
                        </Button>
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

      <section className="py-24 transition-colors duration-500 opacity-0 bg-background">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 transition-colors duration-500 text-foreground">My Toolkit</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-2 rounded-lg bg-card shadow-md flex items-center justify-center group-hover:shadow-lg transition-shadow">
                <img src="/figma-logo.png" alt="Figma" className="w-8 h-8" />
              </div>
              <span className="text-sm text-muted-foreground">Figma</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-2 rounded-lg bg-card shadow-md flex items-center justify-center group-hover:shadow-lg transition-shadow">
                <img src="/notion-logo.png" alt="Notion" className="w-8 h-8" />
              </div>
              <span className="text-sm text-muted-foreground">Notion</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-2 rounded-lg bg-card shadow-md flex items-center justify-center group-hover:shadow-lg transition-shadow">
                <img src="/supabase-logo.png" alt="Supabase" className="w-8 h-8" />
              </div>
              <span className="text-sm text-muted-foreground">Supabase</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-2 rounded-lg bg-card shadow-md flex items-center justify-center group-hover:shadow-lg transition-shadow">
                <img src="/gemini-ai-logo.jpg" alt="Gemini" className="w-8 h-8" />
              </div>
              <span className="text-sm text-muted-foreground">Gemini</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-2 rounded-lg bg-card shadow-md flex items-center justify-center group-hover:shadow-lg transition-shadow">
                <img src="/openai-logo-inspired-abstract.png" alt="OpenAI" className="w-8 h-8" />
              </div>
              <span className="text-sm text-muted-foreground">OpenAI</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-2 rounded-lg bg-card shadow-md flex items-center justify-center group-hover:shadow-lg transition-shadow">
                <img src="/jira-logo.png" alt="Jira" className="w-8 h-8" />
              </div>
              <span className="text-sm text-muted-foreground">Jira</span>
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
              className="bg-primary hover:bg-primary/90 text-white px-10 py-4 text-lg font-medium flex items-center gap-3 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
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
            <Button
              variant="outline"
              className="border-border text-foreground hover:bg-muted hover:border-primary px-10 py-4 text-lg font-medium flex items-center gap-3 bg-transparent transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => window.open("https://x.com/aHj_builds", "_blank")}
            >
              <X size={20} />
              Twitter
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

        /* Force navigation text colors with high specificity */
        .nav-logo.scrolled {
          color: #111827 !important;
          text-shadow: none !important;
        }
        
        .nav-logo.not-scrolled {
          color: white !important;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5) !important;
        }
        
        .nav-item.scrolled.active {
          color: #2563eb !important;
          font-weight: 600 !important;
        }
        
        .nav-item.scrolled.inactive {
          color: #374151 !important;
          font-weight: 500 !important;
        }
        
        .nav-item.not-scrolled.active {
          color: white !important;
          font-weight: 600 !important;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5) !important;
        }
        
        .nav-item.not-scrolled.inactive {
          color: rgba(255, 255, 255, 0.9) !important;
          font-weight: 500 !important;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5) !important;
        }
        
        .nav-mobile-button.scrolled {
          color: #374151 !important;
        }
        
        .nav-mobile-button.not-scrolled {
          color: rgba(255, 255, 255, 0.9) !important;
          filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.5)) !important;
        }
        
        .nav-mobile-item.active {
          color: #2563eb !important;
          font-weight: 600 !important;
        }
        
        .nav-mobile-item.inactive {
          color: #374151 !important;
          font-weight: 500 !important;
        }
      `}</style>
    </div>
  )
}
