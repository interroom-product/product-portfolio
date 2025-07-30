"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Typewriter } from "@/components/ui/typewriter"
import { Menu, X, Mail, Linkedin, Moon, Sun, ArrowRight, Check } from "lucide-react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "process", "pricing", "experience", "contact"]
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
    if (isDarkMode) {
      document.documentElement.classList.remove("dark")
    } else {
      document.documentElement.classList.add("dark")
    }
  }

  const navItems = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "process", label: "My Process" },
    { id: "pricing", label: "Pricing" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ]

  const typewriterPhrases = ["Product Management", "Website Design & Creation", "Web Application Development"]

  return (
    <div
      className={`min-h-screen font-inter transition-all duration-500 ${isDarkMode ? "dark bg-slate-900" : "bg-slate-50"}`}
    >
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? isDarkMode
              ? "bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50"
              : "bg-white/80 backdrop-blur-md border-b border-slate-200/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div
              className={`font-medium text-xl transition-colors duration-500 ${
                isDarkMode ? "text-slate-100" : "text-slate-800"
              }`}
            >
              Ajay Nichani
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    activeSection === item.id
                      ? "text-teal-600 dark:text-teal-400"
                      : isDarkMode
                        ? "text-slate-300 hover:text-teal-400"
                        : "text-slate-600 hover:text-teal-600"
                  }`}
                >
                  {item.label}
                </button>
              ))}

              {/* Dark Mode Toggle */}
              <div className="flex items-center space-x-3">
                <Sun className={`h-4 w-4 transition-colors ${isDarkMode ? "text-slate-400" : "text-amber-500"}`} />
                <Switch checked={isDarkMode} onCheckedChange={toggleDarkMode} />
                <Moon className={`h-4 w-4 transition-colors ${isDarkMode ? "text-indigo-400" : "text-slate-400"}`} />
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <Sun className={`h-4 w-4 transition-colors ${isDarkMode ? "text-slate-400" : "text-amber-500"}`} />
                <Switch checked={isDarkMode} onCheckedChange={toggleDarkMode} />
                <Moon className={`h-4 w-4 transition-colors ${isDarkMode ? "text-indigo-400" : "text-slate-400"}`} />
              </div>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`transition-colors ${isDarkMode ? "text-slate-300 hover:text-teal-400" : "text-slate-600 hover:text-teal-600"}`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div
                className={`px-4 pt-4 pb-6 space-y-3 border-t transition-colors ${
                  isDarkMode ? "bg-slate-900/95 border-slate-700/50" : "bg-white/95 border-slate-200/50"
                }`}
              >
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block px-4 py-3 text-base font-medium transition-colors ${
                      activeSection === item.id
                        ? "text-teal-600 dark:text-teal-400"
                        : isDarkMode
                          ? "text-slate-300 hover:text-teal-400"
                          : "text-slate-600 hover:text-teal-600"
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
        className={`min-h-screen flex items-center justify-center px-6 lg:px-8 transition-colors duration-500 ${
          isDarkMode ? "bg-slate-900" : "bg-slate-50"
        }`}
      >
        <div className="text-center max-w-4xl mx-auto">
          <h1
            className={`text-5xl md:text-7xl font-bold mb-6 transition-colors duration-500 ${
              isDarkMode ? "text-slate-100" : "text-slate-900"
            }`}
          >
            Hi, I'm <span className="text-slate-900 dark:text-slate-100">Ajay Nichani</span>
          </h1>

          <div className="mb-12 flex justify-center">
            <Typewriter phrases={typewriterPhrases} />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white px-8 py-3 text-lg font-medium transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get in Touch
            </Button>
            <Button
              onClick={() => scrollToSection("projects")}
              variant="outline"
              className={`px-8 py-3 text-lg font-medium transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl ${
                isDarkMode
                  ? "border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-teal-400"
                  : "border-slate-300 text-slate-700 hover:bg-slate-100 hover:border-teal-600"
              }`}
            >
              View My Work
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`py-24 transition-colors duration-500 opacity-0 ${isDarkMode ? "bg-slate-800" : "bg-white"}`}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl font-bold mb-4 transition-colors duration-500 ${
                isDarkMode ? "text-slate-100" : "text-slate-800"
              }`}
            >
              Products & Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-600 to-purple-600 dark:from-teal-400 dark:to-purple-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* MathStack AI */}
            <Card
              className={`border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group cursor-pointer ${isDarkMode ? "bg-slate-700/50" : "bg-slate-50/50"}`}
              onClick={() => window.open("https://mathstackai.app", "_blank")}
            >
              <CardContent className="p-8">
                <h3
                  className={`text-2xl font-semibold mb-4 transition-colors duration-500 ${isDarkMode ? "text-slate-100" : "text-slate-800"}`}
                >
                  MathStack AI
                </h3>
                <p
                  className={`mb-6 leading-relaxed transition-colors duration-500 ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}
                >
                  An AI-powered EdTech platform for mathematics learning that personalizes the educational experience
                  using advanced machine learning algorithms.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-teal-100 text-teal-700 dark:bg-teal-900/50 dark:text-teal-300 hover:scale-105 transition-transform">
                    AI/ML
                  </Badge>
                  <Badge className="bg-teal-100 text-teal-700 dark:bg-teal-900/50 dark:text-teal-300 hover:scale-105 transition-transform">
                    EdTech
                  </Badge>
                  <Badge className="bg-teal-100 text-teal-700 dark:bg-teal-900/50 dark:text-teal-300 hover:scale-105 transition-transform">
                    Next.js
                  </Badge>
                  <Badge className="bg-teal-100 text-teal-700 dark:bg-teal-900/50 dark:text-teal-300 hover:scale-105 transition-transform">
                    User Accounts
                  </Badge>
                  <Badge className="bg-teal-100 text-teal-700 dark:bg-teal-900/50 dark:text-teal-300 hover:scale-105 transition-transform">
                    Database Creation
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* InterRoom */}
            <Card
              className={`border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group cursor-pointer ${isDarkMode ? "bg-slate-700/50" : "bg-slate-50/50"}`}
              onClick={() => window.open("https://interroom.me", "_blank")}
            >
              <CardContent className="p-8">
                <h3
                  className={`text-2xl font-semibold mb-4 transition-colors duration-500 ${isDarkMode ? "text-slate-100" : "text-slate-800"}`}
                >
                  InterRoom
                </h3>
                <p
                  className={`mb-6 leading-relaxed transition-colors duration-500 ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}
                >
                  An HR SaaS platform featuring a comprehensive client portal and job tracker, streamlining recruitment
                  processes for enterprise clients.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300 hover:scale-105 transition-transform">
                    SaaS
                  </Badge>
                  <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300 hover:scale-105 transition-transform">
                    HR Tech
                  </Badge>
                  <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300 hover:scale-105 transition-transform">
                    React
                  </Badge>
                  <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300 hover:scale-105 transition-transform">
                    Firebase
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Behavioral Math App */}
            <Card
              className={`border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group ${isDarkMode ? "bg-slate-700/50" : "bg-slate-50/50"}`}
            >
              <CardContent className="p-8">
                <h3
                  className={`text-2xl font-semibold mb-4 transition-colors duration-500 ${isDarkMode ? "text-slate-100" : "text-slate-800"}`}
                >
                  Behavioral Math App
                </h3>
                <p
                  className={`mb-6 leading-relaxed transition-colors duration-500 ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}
                >
                  A mobile application designed to improve math skills through behavioral science principles, making
                  learning engaging and effective.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-teal-100 text-teal-700 dark:bg-teal-900/50 dark:text-teal-300 hover:scale-105 transition-transform">
                    Mobile App
                  </Badge>
                  <Badge className="bg-teal-100 text-teal-700 dark:bg-teal-900/50 dark:text-teal-300 hover:scale-105 transition-transform">
                    EdTech
                  </Badge>
                  <Badge className="bg-teal-100 text-teal-700 dark:bg-teal-900/50 dark:text-teal-300 hover:scale-105 transition-transform">
                    Gamification
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* NFL Pick 'Em App */}
            <Card
              className={`border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group ${isDarkMode ? "bg-slate-700/50" : "bg-slate-50/50"}`}
            >
              <CardContent className="p-8">
                <h3
                  className={`text-2xl font-semibold mb-4 transition-colors duration-500 ${isDarkMode ? "text-slate-100" : "text-slate-800"}`}
                >
                  NFL Pick 'Em App
                </h3>
                <p
                  className={`mb-6 leading-relaxed transition-colors duration-500 ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}
                >
                  A web application for friends to compete in NFL weekly pick'em pools, featuring real-time scoring and
                  social competition.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300 hover:scale-105 transition-transform">
                    Web App
                  </Badge>
                  <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300 hover:scale-105 transition-transform">
                    End-to-End Development
                  </Badge>
                  <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300 hover:scale-105 transition-transform">
                    Monetization (Stripe)
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* My Process Section */}
      <section
        id="process"
        className={`py-24 transition-colors duration-500 opacity-0 ${isDarkMode ? "bg-slate-900" : "bg-white"}`}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl font-bold mb-4 transition-colors duration-500 ${
                isDarkMode ? "text-slate-100" : "text-slate-800"
              }`}
            >
              My Process
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-600 to-purple-600 dark:from-teal-400 dark:to-purple-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Consultation Call */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div
                  className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center text-2xl font-bold transition-all duration-300 group-hover:scale-110 shadow-lg ${isDarkMode ? "bg-teal-600 text-white" : "bg-teal-100 text-teal-700 border-2 border-teal-200"}`}
                >
                  1
                </div>
              </div>
              <h3
                className={`text-xl font-semibold mb-4 transition-colors duration-500 ${isDarkMode ? "text-slate-100" : "text-slate-800"}`}
              >
                Consultation Call
              </h3>
              <p
                className={`leading-relaxed transition-colors duration-500 ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}
              >
                We start with a detailed discussion about your vision, goals, and requirements to understand exactly
                what you need.
              </p>
            </div>

            {/* Initial Prototype */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div
                  className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center text-2xl font-bold transition-all duration-300 group-hover:scale-110 shadow-lg ${isDarkMode ? "bg-purple-600 text-white" : "bg-purple-100 text-purple-700 border-2 border-purple-200"}`}
                >
                  2
                </div>
              </div>
              <h3
                className={`text-xl font-semibold mb-4 transition-colors duration-500 ${isDarkMode ? "text-slate-100" : "text-slate-800"}`}
              >
                Initial Prototype
              </h3>
              <p
                className={`leading-relaxed transition-colors duration-500 ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}
              >
                I create a working prototype to validate concepts and gather feedback before moving to full development.
              </p>
            </div>

            {/* Production Ready */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div
                  className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center text-2xl font-bold transition-all duration-300 group-hover:scale-110 shadow-lg ${isDarkMode ? "bg-teal-600 text-white" : "bg-teal-100 text-teal-700 border-2 border-teal-200"}`}
                >
                  3
                </div>
              </div>
              <h3
                className={`text-xl font-semibold mb-4 transition-colors duration-500 ${isDarkMode ? "text-slate-100" : "text-slate-800"}`}
              >
                Production Ready
              </h3>
              <p
                className={`leading-relaxed transition-colors duration-500 ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}
              >
                The final product is built with scalability, security, and performance in mind, ready for real users.
              </p>
            </div>

            {/* Maintain */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div
                  className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center text-2xl font-bold transition-all duration-300 group-hover:scale-110 shadow-lg ${isDarkMode ? "bg-purple-600 text-white" : "bg-purple-100 text-purple-700 border-2 border-purple-200"}`}
                >
                  4
                </div>
              </div>
              <h3
                className={`text-xl font-semibold mb-4 transition-colors duration-500 ${isDarkMode ? "text-slate-100" : "text-slate-800"}`}
              >
                Maintain
              </h3>
              <p
                className={`leading-relaxed transition-colors duration-500 ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}
              >
                Ongoing support, updates, and improvements to ensure your product continues to meet evolving needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className={`py-24 transition-colors duration-500 opacity-0 ${isDarkMode ? "bg-slate-800" : "bg-white"}`}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl font-bold mb-4 transition-colors duration-500 ${
                isDarkMode ? "text-slate-100" : "text-slate-800"
              }`}
            >
              Pricing
            </h2>
            <p
              className={`text-xl mb-8 transition-colors duration-500 ${
                isDarkMode ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Find the perfect package for your needs
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-600 to-purple-600 dark:from-teal-400 dark:to-purple-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Basic Package */}
            <Card
              className={`border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group ${isDarkMode ? "bg-slate-700/50" : "bg-slate-50/50"}`}
            >
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3
                    className={`text-2xl font-semibold mb-2 transition-colors duration-500 ${isDarkMode ? "text-slate-100" : "text-slate-800"}`}
                  >
                    Basic
                  </h3>
                  <p
                    className={`text-sm mb-4 transition-colors duration-500 ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}
                  >
                    Single Static Page
                  </p>
                  <div className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2">$375 – $750</div>
                  <p className={`text-sm ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>~1 week timeline</p>
                </div>
                <p
                  className={`mb-6 leading-relaxed transition-colors duration-500 ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}
                >
                  For personal brands or simple landing pages.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                    <span className={`text-sm ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                      1 responsive, mobile-optimized static landing page
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                    <span className={`text-sm ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                      Google Analytics setup
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                    <span className={`text-sm ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                      Basic SEO setup
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                    <span className={`text-sm ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                      Simple contact form
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                    <span className={`text-sm ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                      1 round of revisions
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                    <span className={`text-sm ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                      Deployed to client's hosting/domain
                    </span>
                  </div>
                </div>
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="w-full bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Plus Package */}
            <Card
              className={`border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group ${isDarkMode ? "bg-slate-700/50" : "bg-slate-50/50"} relative`}
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-purple-600 text-white px-4 py-1">Most Popular</Badge>
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3
                    className={`text-2xl font-semibold mb-2 transition-colors duration-500 ${isDarkMode ? "text-slate-100" : "text-slate-800"}`}
                  >
                    Plus
                  </h3>
                  <p
                    className={`text-sm mb-4 transition-colors duration-500 ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}
                  >
                    Multi-Page Website (No Integrations)
                  </p>
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">$750 – $1,875</div>
                  <p className={`text-sm ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>~1–3 weeks timeline</p>
                </div>
                <p
                  className={`mb-6 leading-relaxed transition-colors duration-500 ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}
                >
                  For small businesses needing a clean, professional web presence.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                    <span className={`text-sm ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                      3–5 responsive, mobile-optimized pages
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                    <span className={`text-sm ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                      Google Analytics setup
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                    <span className={`text-sm ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                      Basic SEO setup
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                    <span className={`text-sm ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>Optional CMS</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                    <span className={`text-sm ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                      2 rounds of revisions
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                    <span className={`text-sm ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                      Deployed to client's hosting/domain
                    </span>
                  </div>
                </div>
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="w-full bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Premium Package */}
            <Card
              className={`border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group ${isDarkMode ? "bg-slate-700/50" : "bg-slate-50/50"}`}
            >
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3
                    className={`text-2xl font-semibold mb-2 transition-colors duration-500 ${isDarkMode ? "text-slate-100" : "text-slate-800"}`}
                  >
                    Premium
                  </h3>
                  <p
                    className={`text-sm mb-4 transition-colors duration-500 ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}
                  >
                    Multi-Page Website with Integrations
                  </p>
                  <div className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2">Starting at $1,875</div>
                  <p className={`text-sm ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>~2–4 weeks timeline</p>
                </div>
                <p
                  className={`mb-6 leading-relaxed transition-colors duration-500 ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}
                >
                  For growing businesses needing custom features.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                    <span className={`text-sm ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                      5–10 responsive, mobile-optimized pages
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                    <span className={`text-sm ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                      Stripe payment or booking system integration
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                    <span className={`text-sm ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                      Google Analytics setup with event tracking
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                    <span className={`text-sm ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>Advanced SEO</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                    <span className={`text-sm ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>CMS setup</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                    <span className={`text-sm ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                      Custom forms/email automations
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                    <span className={`text-sm ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                      Performance optimization
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                    <span className={`text-sm ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                      3 rounds of revisions
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                    <span className={`text-sm ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                      Deployed to client's hosting/domain
                    </span>
                  </div>
                </div>
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="w-full bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Optional Add-Ons */}
          <div className="text-center">
            <h3
              className={`text-2xl font-semibold mb-8 transition-colors duration-500 ${
                isDarkMode ? "text-slate-100" : "text-slate-800"
              }`}
            >
              Optional Add-Ons
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div
                className={`p-6 rounded-lg border transition-colors duration-500 ${
                  isDarkMode ? "bg-slate-700/30 border-slate-600" : "bg-slate-50 border-slate-200"
                }`}
              >
                <h4 className={`font-semibold mb-2 ${isDarkMode ? "text-slate-100" : "text-slate-800"}`}>
                  Maintenance Retainer
                </h4>
                <p className="text-teal-600 dark:text-teal-400 font-bold">$200–$500/month</p>
              </div>
              <div
                className={`p-6 rounded-lg border transition-colors duration-500 ${
                  isDarkMode ? "bg-slate-700/30 border-slate-600" : "bg-slate-50 border-slate-200"
                }`}
              >
                <h4 className={`font-semibold mb-2 ${isDarkMode ? "text-slate-100" : "text-slate-800"}`}>
                  Extra Pages
                </h4>
                <p className="text-purple-600 dark:text-purple-400 font-bold">$150–$250/page</p>
              </div>
              <div
                className={`p-6 rounded-lg border transition-colors duration-500 ${
                  isDarkMode ? "bg-slate-700/30 border-slate-600" : "bg-slate-50 border-slate-200"
                }`}
              >
                <h4 className={`font-semibold mb-2 ${isDarkMode ? "text-slate-100" : "text-slate-800"}`}>Blog Setup</h4>
                <p className="text-teal-600 dark:text-teal-400 font-bold">$300–$500</p>
              </div>
              <div
                className={`p-6 rounded-lg border transition-colors duration-500 ${
                  isDarkMode ? "bg-slate-700/30 border-slate-600" : "bg-slate-50 border-slate-200"
                }`}
              >
                <h4 className={`font-semibold mb-2 ${isDarkMode ? "text-slate-100" : "text-slate-800"}`}>
                  Custom Integrations
                </h4>
                <p className="text-purple-600 dark:text-purple-400 font-bold">Custom Pricing</p>
                <p className={`text-xs mt-1 ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                  Shopify, Stripe, etc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className={`py-24 transition-colors duration-500 opacity-0 ${isDarkMode ? "bg-slate-900" : "bg-white"}`}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl font-bold mb-4 transition-colors duration-500 ${
                isDarkMode ? "text-slate-100" : "text-slate-800"
              }`}
            >
              Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-600 to-purple-600 dark:from-teal-400 dark:to-purple-400 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            {/* Experience Card: MathStack AI */}
            <Card
              className={`group transition-all duration-300 hover:shadow-lg hover:border-teal-500 dark:hover:border-teal-400 ${isDarkMode ? "bg-slate-700/50 border-slate-700" : "bg-slate-50/50 border-slate-200"}`}
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className={`text-xl font-semibold ${isDarkMode ? "text-slate-100" : "text-slate-800"}`}>
                      Founder
                    </h3>
                    <p className="text-teal-600 dark:text-teal-400 font-medium">MathStack AI</p>
                  </div>
                  <p className={`text-sm ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>2024 - Present</p>
                </div>
                <ul
                  className={`mt-4 space-y-2 text-sm list-disc list-inside ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}
                >
                  <li>Founded an AI-powered EdTech platform focused on mathematics learning</li>
                  <li>Developed innovative AI-driven solutions for personalized learning experiences</li>
                  <li>Built end-to-end product strategy and technical implementation</li>
                </ul>
                <Button
                  variant="link"
                  className="p-0 h-auto mt-4 text-teal-600 dark:text-teal-400 group-hover:underline"
                >
                  Read More <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>

            {/* Experience Card: InterRoom */}
            <Card
              className={`group transition-all duration-300 hover:shadow-lg hover:border-purple-500 dark:hover:border-purple-400 ${isDarkMode ? "bg-slate-700/50 border-slate-700" : "bg-slate-50/50 border-slate-200"}`}
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className={`text-xl font-semibold ${isDarkMode ? "text-slate-100" : "text-slate-800"}`}>
                      Product Lead
                    </h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">InterRoom</p>
                  </div>
                  <p className={`text-sm ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>2023 - Present</p>
                </div>
                <ul
                  className={`mt-4 space-y-2 text-sm list-disc list-inside ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}
                >
                  <li>Leading product development for HR SaaS platform with client portal and job tracker</li>
                  <li>Driving user-centric design and feature development</li>
                  <li>Managing cross-functional teams to deliver enterprise solutions</li>
                </ul>
                <Button
                  variant="link"
                  className="p-0 h-auto mt-4 text-purple-600 dark:text-purple-400 group-hover:underline"
                >
                  Read More <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>

            {/* Experience Card: Nimble RX */}
            <Card
              className={`group transition-all duration-300 hover:shadow-lg hover:border-teal-500 dark:hover:border-teal-400 ${isDarkMode ? "bg-slate-700/50 border-slate-700" : "bg-slate-50/50 border-slate-200"}`}
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className={`text-xl font-semibold ${isDarkMode ? "text-slate-100" : "text-slate-800"}`}>
                      Senior Product Manager
                    </h3>
                    <p className="text-teal-600 dark:text-teal-400 font-medium">Nimble RX</p>
                  </div>
                  <p className={`text-sm ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>2022</p>
                </div>
                <ul
                  className={`mt-4 space-y-2 text-sm list-disc list-inside ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}
                >
                  <li>Managed product development for healthcare technology solutions</li>
                  <li>Focused on improving patient experience and operational efficiency</li>
                  <li>Collaborated with healthcare professionals to define product requirements</li>
                </ul>
                <Button
                  variant="link"
                  className="p-0 h-auto mt-4 text-teal-600 dark:text-teal-400 group-hover:underline"
                >
                  Read More <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>

            {/* Experience Card: Shopkick */}
            <Card
              className={`group transition-all duration-300 hover:shadow-lg hover:border-purple-500 dark:hover:border-purple-400 ${isDarkMode ? "bg-slate-700/50 border-slate-700" : "bg-slate-50/50 border-slate-200"}`}
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className={`text-xl font-semibold ${isDarkMode ? "text-slate-100" : "text-slate-800"}`}>
                      Senior Product Manager / Product Manager
                    </h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">Shopkick</p>
                  </div>
                  <p className={`text-sm ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>2017 - 2022</p>
                </div>
                <ul
                  className={`mt-4 space-y-2 text-sm list-disc list-inside ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}
                >
                  <li>Led development of Digital Receipts product line, increasing purchase conversion by 30% YoY</li>
                  <li>Built Targeted Video Advertising platform generating $10M ARR</li>
                  <li>Managed end-to-end product lifecycle from conception to launch</li>
                  <li>Drove user acquisition and engagement strategies for mobile commerce platform</li>
                  <li>Collaborated with engineering, design, and business teams to deliver impactful features</li>
                </ul>
                <Button
                  variant="link"
                  className="p-0 h-auto mt-4 text-purple-600 dark:text-purple-400 group-hover:underline"
                >
                  Read More <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={`py-24 relative overflow-hidden opacity-0 ${
          isDarkMode
            ? "bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800"
            : "bg-gradient-to-br from-slate-700 via-slate-600 to-slate-700"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-purple-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate on your next product challenge? Let's connect and explore how we can create exceptional
            user experiences together.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              className="bg-teal-600 hover:bg-teal-700 text-white px-10 py-4 text-lg font-medium flex items-center gap-3 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => window.open("mailto:ajay@example.com", "_blank")}
            >
              <Mail size={20} />
              Email Me
            </Button>
            <Button
              variant="outline"
              className="border-slate-400 text-slate-300 hover:bg-slate-700 hover:border-teal-400 px-10 py-4 text-lg font-medium flex items-center gap-3 bg-transparent transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => window.open("https://linkedin.com/in/ajaynichani", "_blank")}
            >
              <Linkedin size={20} />
              LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`border-t py-8 transition-colors duration-500 ${
          isDarkMode ? "bg-slate-900 border-slate-800" : "bg-slate-800 border-slate-700"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-slate-400">© 2025 Ajay Nichani. All Rights Reserved.</p>
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
