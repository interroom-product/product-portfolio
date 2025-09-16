"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Typewriter } from "@/components/ui/typewriter"
import { TweetCard } from "@/components/ui/tweet-card"
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
  ArrowUpRight,
  Send,
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

          <div className="grid md:grid-cols-2 gap-8">
            {/* Shopkick Case Study */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group bg-background relative cursor-pointer">
              <CardContent className="p-8">
                <ArrowUpRight className="absolute top-6 right-6 h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <h4 className="text-2xl font-semibold mb-2 text-foreground">Digital Receipts Product Line</h4>
                <h5 className="text-lg text-primary mb-4 font-medium">Shopkick</h5>
                <p className="leading-relaxed transition-colors duration-500 text-muted-foreground">
                  Led development of a scalable rewards system that increased purchase conversion by 30% YoY and generated $10M ARR.
                </p>
              </CardContent>
            </Card>

            {/* InterRoom Case Study */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group bg-background relative cursor-pointer">
              <CardContent className="p-8">
                <ArrowUpRight className="absolute top-6 right-6 h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <h4 className="text-2xl font-semibold mb-2 text-foreground">HR SaaS Platform</h4>
                <h5 className="text-lg text-primary mb-4 font-medium">InterRoom</h5>
                <p className="leading-relaxed transition-colors duration-500 text-muted-foreground">
                  Built comprehensive HR platform that reduced time-to-hire by 40% and achieved 95% user satisfaction rate.
                </p>
              </CardContent>
            </Card>

            {/* NimbleRx Case Study */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group bg-background relative cursor-pointer">
              <CardContent className="p-8">
                <ArrowUpRight className="absolute top-6 right-6 h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <h4 className="text-2xl font-semibold mb-2 text-foreground">Healthcare Technology Solutions</h4>
                <h5 className="text-lg text-primary mb-4 font-medium">NimbleRx</h5>
                <p className="leading-relaxed transition-colors duration-500 text-muted-foreground">
                  Delivered patient-focused solutions that improved satisfaction scores by 40% and reduced operational costs by 20%.
                </p>
              </CardContent>
            </Card>

            {/* Coming Soon Card */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group bg-background relative cursor-pointer border-2 border-dashed border-muted-foreground/30">
              <CardContent className="p-8 text-center">
                <ArrowUpRight className="absolute top-6 right-6 h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <div className="w-16 h-16 mb-4 mx-auto rounded-lg bg-muted flex items-center justify-center">
                  <Lightbulb className="h-8 w-8 text-muted-foreground" />
                </div>
                <h4 className="text-2xl font-semibold mb-2 text-foreground">More Case Studies</h4>
                <h5 className="text-lg text-muted-foreground mb-4 font-medium">Coming Soon</h5>
                <p className="leading-relaxed transition-colors duration-500 text-muted-foreground">
                  Additional detailed case studies showcasing product strategy and execution excellence.
                </p>
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

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Projects */}
            <div className="space-y-8 order-1 lg:order-1">
              {/* MathStack AI */}
              <a
                href="https://mathstackai.app"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:no-underline"
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:border hover:border-primary/30 group bg-card cursor-pointer">
                  <CardContent className="p-4 sm:p-6 md:p-8">
                    <img
                      src="/mathstack-logo.png"
                      alt="MathStack AI Logo"
                      className="w-12 h-12 sm:w-16 sm:h-16 mb-4 rounded-lg object-contain"
                    />
                    <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 transition-colors duration-500 text-foreground group-hover:text-primary">
                      MathStack AI
                    </h3>
                    <p className="mb-4 sm:mb-6 leading-relaxed transition-colors duration-500 text-muted-foreground text-sm sm:text-base">
                      An AI-powered EdTech platform for mathematics learning that personalizes the educational experience
                      using advanced machine learning algorithms.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-primary/10 text-primary hover:scale-105 transition-transform text-xs sm:text-sm">AI/ML</Badge>
                      <Badge className="bg-primary/10 text-primary hover:scale-105 transition-transform text-xs sm:text-sm">EdTech</Badge>
                      <Badge className="bg-primary/10 text-primary hover:scale-105 transition-transform text-xs sm:text-sm">Next.js</Badge>
                      <Badge className="bg-primary/10 text-primary hover:scale-105 transition-transform text-xs sm:text-sm">
                        User Accounts
                      </Badge>
                      <Badge className="bg-primary/10 text-primary hover:scale-105 transition-transform text-xs sm:text-sm">
                        Database Creation
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </a>

              {/* PickTrckr */}
              <a
                href="https://v0-nfl-betting-app-beta.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:no-underline"
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:border hover:border-accent/30 group bg-card cursor-pointer">
                  <CardContent className="p-4 sm:p-6 md:p-8">
                    <img
                      src="/picktrckr-logo.png"
                      alt="PickTrckr Logo"
                      className="w-12 h-12 sm:w-16 sm:h-16 mb-4 rounded-lg object-contain"
                    />
                    <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 transition-colors duration-500 text-foreground group-hover:text-accent">
                      PickTrckr
                    </h3>
                    <p className="mb-4 sm:mb-6 leading-relaxed transition-colors duration-500 text-muted-foreground text-sm sm:text-base">
                      A web application for friends to compete in NFL weekly pick'em pools, featuring real-time scoring and
                      social competition.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-accent/20 text-accent-foreground hover:scale-105 transition-transform text-xs sm:text-sm">
                        Web App
                      </Badge>
                      <Badge className="bg-accent/20 text-accent-foreground hover:scale-105 transition-transform text-xs sm:text-sm">
                        End-to-End Development
                      </Badge>
                      <Badge className="bg-accent/20 text-accent-foreground hover:scale-105 transition-transform text-xs sm:text-sm">
                        Monetization (Stripe)
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </a>

              {/* Coming Soon */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group bg-card border-2 border-dashed border-muted-foreground/30">
                <CardContent className="p-4 sm:p-6 md:p-8 text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mb-4 mx-auto rounded-lg bg-muted flex items-center justify-center">
                    <Lightbulb className="h-6 w-6 sm:h-8 sm:w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 transition-colors duration-500 text-foreground">
                    More Coming Soon
                  </h3>
                  <p className="mb-4 sm:mb-6 leading-relaxed transition-colors duration-500 text-muted-foreground text-sm sm:text-base">
                    Exciting new projects are in development. Stay tuned for innovative solutions that will push the
                    boundaries of technology and user experience.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge className="bg-muted text-muted-foreground hover:scale-105 transition-transform text-xs sm:text-sm">
                      Innovation
                    </Badge>
                    <Badge className="bg-muted text-muted-foreground hover:scale-105 transition-transform text-xs sm:text-sm">
                      In Progress
                    </Badge>
                    <Badge className="bg-muted text-muted-foreground hover:scale-105 transition-transform text-xs sm:text-sm">
                      Stay Tuned
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - My Toolkit */}
            <div className="order-2 lg:order-2 mt-8 lg:mt-0">
              <Card className="border-0 shadow-lg h-full bg-card">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center transition-colors duration-500 text-foreground">My Toolkit</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
                    {/* Figma */}
                    <div className="flex flex-col items-center group">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 mb-2 sm:mb-3 rounded-lg bg-white shadow-md flex items-center justify-center group-hover:shadow-lg transition-shadow">
                        <img src="/figma-logo.png" alt="Figma" className="w-8 h-8 sm:w-12 sm:h-12 object-contain" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-foreground">Figma</span>
                    </div>

                    {/* Notion */}
                    <div className="flex flex-col items-center group">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 mb-2 sm:mb-3 rounded-lg bg-white shadow-md flex items-center justify-center group-hover:shadow-lg transition-shadow">
                        <img src="/notion-logo.png" alt="Notion" className="w-8 h-8 sm:w-12 sm:h-12 object-contain" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-foreground">Notion</span>
                    </div>

                    {/* Supabase */}
                    <div className="flex flex-col items-center group">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 mb-2 sm:mb-3 rounded-lg bg-white shadow-md flex items-center justify-center group-hover:shadow-lg transition-shadow">
                        <img src="/supabase-logo.png" alt="Supabase" className="w-8 h-8 sm:w-12 sm:h-12 object-contain" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-foreground">Supabase</span>
                    </div>

                    {/* Gemini */}
                    <div className="flex flex-col items-center group">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 mb-2 sm:mb-3 rounded-lg bg-white shadow-md flex items-center justify-center group-hover:shadow-lg transition-shadow">
                        <img src="/gemini-ai-logo.jpg" alt="Gemini" className="w-8 h-8 sm:w-12 sm:h-12 object-contain" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-foreground">Gemini</span>
                    </div>

                    {/* OpenAI */}
                    <div className="flex flex-col items-center group">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 mb-2 sm:mb-3 rounded-lg bg-white shadow-md flex items-center justify-center group-hover:shadow-lg transition-shadow">
                        <img src="/openai-logo-inspired-abstract.png" alt="OpenAI" className="w-8 h-8 sm:w-12 sm:h-12 object-contain" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-foreground">OpenAI</span>
                    </div>

                    {/* Jira */}
                    <div className="flex flex-col items-center group">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 mb-2 sm:mb-3 rounded-lg bg-white shadow-md flex items-center justify-center group-hover:shadow-lg transition-shadow">
                        <img src="/jira-logo.png" alt="Jira" className="w-8 h-8 sm:w-12 sm:h-12 object-contain" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-foreground">Jira</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
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


      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 relative overflow-hidden opacity-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4 transition-colors duration-500 text-foreground">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">Ready to build something great together? Connect with me through any of these channels.</p>
          </div>
          
          {/* Contact cards grid */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Email Card */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:border hover:border-primary/30 bg-white dark:bg-card">
              <CardContent className="p-8 flex flex-col items-center text-center h-full justify-between">
                <div className="w-16 h-16 mb-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1 flex flex-col items-center justify-center my-4">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Email Me</h3>
                  <p className="text-muted-foreground mb-6">Have a project in mind or want to connect? Send me a message.</p>
                </div>
                <Button
                  className="bg-primary hover:bg-primary/90 text-white w-full px-4 py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                  onClick={() => window.open("mailto:ajay@example.com", "_blank")}
                >
                  Send Email
                </Button>
              </CardContent>
            </Card>

            {/* LinkedIn Card */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:border hover:border-blue-400/30 bg-white dark:bg-card">
              <CardContent className="p-8 flex flex-col items-center text-center h-full justify-between">
                <div className="w-16 h-16 mb-5 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <Linkedin className="h-8 w-8 text-blue-500" />
                </div>
                <div className="flex-1 flex flex-col items-center justify-center my-4">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Connect on LinkedIn</h3>
                  <p className="text-muted-foreground mb-6">Let's build our professional network.</p>
                </div>
                <Button
                  variant="outline"
                  className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white w-full px-4 py-2 rounded-lg transition-all duration-300"
                  onClick={() => window.open("https://linkedin.com/in/ajay-nichani", "_blank")}
                >
                  View Profile
                </Button>
              </CardContent>
            </Card>

            {/* X / Twitter Card */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:border hover:border-accent/30 bg-white dark:bg-card">
              <CardContent className="p-8 flex flex-col items-center text-center h-full justify-between">
                <div className="w-16 h-16 mb-5 rounded-full bg-accent/10 flex items-center justify-center">
                  <img src="/x-logo.svg" alt="X Logo" className="h-8 w-8 object-contain" />
                </div>
                <div className="flex-1 flex flex-col items-center justify-center my-4">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Follow on X</h3>
                  <p className="text-muted-foreground mb-6">@aHj_builds</p>
                </div>
                <Button
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-white w-full px-4 py-2 rounded-lg transition-all duration-300"
                  onClick={() => window.open("https://x.com/aHj_builds", "_blank")}
                >
                  <img src="/x-logo.svg" alt="X Logo" className="mr-2 h-5 w-5 object-contain" />
                  Follow Me
                </Button>
              </CardContent>
            </Card>
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
