"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import {
  Menu,
  X,
  ExternalLink,
  Mail,
  Linkedin,
  ChevronDown,
  Moon,
  Sun,
  Sparkles,
  Zap,
  Target,
  Users,
} from "lucide-react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

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
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <div className={`min-h-screen transition-all duration-500 ${isDarkMode ? "dark bg-gray-900" : "bg-gray-50"}`}>
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full backdrop-blur-md border-b z-50 transition-all duration-300 ${
          isDarkMode ? "bg-gray-900/80 border-gray-700" : "bg-white/80 border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div
              className={`font-bold text-xl transition-colors duration-300 ${
                isDarkMode ? "text-white" : "text-gray-900"
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
                      ? "text-cyan-500"
                      : isDarkMode
                        ? "text-gray-300 hover:text-cyan-400"
                        : "text-gray-700 hover:text-cyan-600"
                  }`}
                >
                  {item.label}
                </button>
              ))}

              {/* Dark Mode Toggle */}
              <div className="flex items-center space-x-2">
                <Sun className={`h-4 w-4 transition-colors ${isDarkMode ? "text-gray-400" : "text-yellow-500"}`} />
                <Switch checked={isDarkMode} onCheckedChange={toggleDarkMode} />
                <Moon className={`h-4 w-4 transition-colors ${isDarkMode ? "text-blue-400" : "text-gray-400"}`} />
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Sun className={`h-4 w-4 transition-colors ${isDarkMode ? "text-gray-400" : "text-yellow-500"}`} />
                <Switch checked={isDarkMode} onCheckedChange={toggleDarkMode} />
                <Moon className={`h-4 w-4 transition-colors ${isDarkMode ? "text-blue-400" : "text-gray-400"}`} />
              </div>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`transition-colors ${isDarkMode ? "text-gray-300 hover:text-cyan-400" : "text-gray-700 hover:text-cyan-600"}`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div
                className={`px-2 pt-2 pb-3 space-y-1 border-t transition-colors ${
                  isDarkMode ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"
                }`}
              >
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block px-3 py-2 text-base font-medium transition-colors ${
                      activeSection === item.id
                        ? "text-cyan-500"
                        : isDarkMode
                          ? "text-gray-300 hover:text-cyan-400"
                          : "text-gray-700 hover:text-cyan-600"
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

      {/* Header Section */}
      <section
        id="home"
        className={`pt-16 min-h-screen flex items-center relative overflow-hidden ${
          isDarkMode
            ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
            : "bg-gradient-to-br from-white via-gray-50 to-cyan-50"
        }`}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={`absolute top-20 left-10 w-72 h-72 rounded-full opacity-20 animate-pulse ${
              isDarkMode ? "bg-cyan-500" : "bg-cyan-200"
            }`}
          ></div>
          <div
            className={`absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-10 animate-bounce ${
              isDarkMode ? "bg-purple-500" : "bg-purple-200"
            }`}
            style={{ animationDuration: "3s" }}
          ></div>
          <div
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-5 animate-spin ${
              isDarkMode
                ? "bg-gradient-to-r from-cyan-500 to-purple-500"
                : "bg-gradient-to-r from-cyan-300 to-purple-300"
            }`}
            style={{ animationDuration: "20s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center">
            <div className="animate-fade-in-up">
              <h1
                className={`text-5xl md:text-7xl font-bold mb-6 transition-colors duration-300 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-600 animate-pulse">
                  Ajay Nichani
                </span>
              </h1>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <p
                className={`text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed transition-colors duration-300 ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Product leader with over 8 years of experience managing end-to-end business performance in consumer and
                enterprise businesses, from user acquisition and engagement to product development. Specializing in
                digital consumer experiences with an emphasis on AI-driven solutions, data analytics, and user-centric
                design across all stages of the product life cycle.
              </p>
            </div>

            <div
              className="animate-fade-in-up flex flex-col sm:flex-row gap-4 justify-center"
              style={{ animationDelay: "0.4s" }}
            >
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Get in Touch
              </Button>
              <Button
                onClick={() => scrollToSection("projects")}
                variant="outline"
                className={`px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl ${
                  isDarkMode
                    ? "border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900"
                    : "border-cyan-600 text-cyan-600 hover:bg-cyan-50"
                }`}
              >
                <Zap className="mr-2 h-5 w-5" />
                Browse Projects
              </Button>
            </div>

            <div className="mt-16 animate-bounce">
              <ChevronDown
                className={`mx-auto cursor-pointer transition-colors hover:text-cyan-500 ${
                  isDarkMode ? "text-gray-400" : "text-gray-400"
                }`}
                size={32}
                onClick={() => scrollToSection("about")}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 transition-colors duration-300 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2
              className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto"></div>
          </div>

          {/* My Story */}
          <div className="mb-16 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h3
              className={`text-2xl font-bold mb-6 transition-colors duration-300 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              My Story
            </h3>
            <p
              className={`text-lg leading-relaxed max-w-4xl transition-colors duration-300 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              As a seasoned product leader based in San Francisco, I've spent over 8 years driving innovation and growth
              across consumer and enterprise businesses. My journey began in the dynamic world of mobile commerce at
              Shopkick, where I honed my skills in user acquisition, engagement, and product development. Today, I'm
              passionate about leveraging AI-driven solutions and data analytics to create exceptional user experiences
              that drive meaningful business outcomes.
            </p>
          </div>

          {/* Skills */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card
              className={`border hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up ${
                isDarkMode
                  ? "border-gray-700 bg-gray-900 hover:border-cyan-500"
                  : "border-gray-200 bg-white hover:border-cyan-300"
              }`}
              style={{ animationDelay: "0.3s" }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Target className="text-cyan-500 mr-3" size={24} />
                  <h4
                    className={`text-xl font-bold transition-colors duration-300 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Product Management
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Figma",
                    "JIRA",
                    "Confluence",
                    "Monday.com",
                    "Tableau",
                    "Looker",
                    "Google Analytics",
                    "UserTesting",
                    "Typeform",
                    "Segment",
                  ].map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className={`transition-all duration-300 hover:scale-105 ${
                        isDarkMode
                          ? "bg-cyan-900 text-cyan-300 hover:bg-cyan-800"
                          : "bg-cyan-50 text-cyan-700 hover:bg-cyan-100"
                      }`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card
              className={`border hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up ${
                isDarkMode
                  ? "border-gray-700 bg-gray-900 hover:border-purple-500"
                  : "border-gray-200 bg-white hover:border-purple-300"
              }`}
              style={{ animationDelay: "0.4s" }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Zap className="text-purple-500 mr-3" size={24} />
                  <h4
                    className={`text-xl font-bold transition-colors duration-300 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Technical
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Google Cloud Platform",
                    "SQL",
                    "Firebase",
                    "JavaScript",
                    "React",
                    "Next.js",
                    "Node.js",
                    "Replit",
                    "Vercel",
                    "Cursor.AI",
                    "Gemini",
                    "ChatGPT",
                    "Claude",
                  ].map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className={`transition-all duration-300 hover:scale-105 ${
                        isDarkMode
                          ? "bg-purple-900 text-purple-300 hover:bg-purple-800"
                          : "bg-purple-50 text-purple-700 hover:bg-purple-100"
                      }`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card
              className={`border hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up ${
                isDarkMode
                  ? "border-gray-700 bg-gray-900 hover:border-green-500"
                  : "border-gray-200 bg-white hover:border-green-300"
              }`}
              style={{ animationDelay: "0.5s" }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Users className="text-green-500 mr-3" size={24} />
                  <h4
                    className={`text-xl font-bold transition-colors duration-300 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Soft Skills
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Leadership", "Communication", "Collaboration", "Problem Solving"].map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className={`transition-all duration-300 hover:scale-105 ${
                        isDarkMode
                          ? "bg-green-900 text-green-300 hover:bg-green-800"
                          : "bg-green-50 text-green-700 hover:bg-green-100"
                      }`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className={`py-20 transition-colors duration-300 ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2
              className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="space-y-12">
            {/* MathStack AI */}
            <div className="flex flex-col md:flex-row gap-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="md:w-1/4">
                <div className="text-cyan-500 font-semibold text-lg">2024 - Present</div>
              </div>
              <div className="md:w-3/4">
                <Card
                  className={`border transition-all duration-500 hover:shadow-xl transform hover:-translate-y-1 ${
                    isDarkMode
                      ? "border-gray-700 bg-gray-800 hover:border-cyan-500"
                      : "border-gray-200 bg-white hover:border-cyan-300"
                  }`}
                >
                  <CardContent className="p-6">
                    <h3
                      className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Founder
                    </h3>
                    <h4 className="text-xl text-cyan-500 mb-4">MathStack AI</h4>
                    <ul
                      className={`space-y-2 transition-colors duration-300 ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      <li>• Founded an AI-powered EdTech platform focused on mathematics learning</li>
                      <li>• Developed innovative AI-driven solutions for personalized learning experiences</li>
                      <li>• Built end-to-end product strategy and technical implementation</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* InterRoom */}
            <div className="flex flex-col md:flex-row gap-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="md:w-1/4">
                <div className="text-cyan-500 font-semibold text-lg">2023 - Present</div>
              </div>
              <div className="md:w-3/4">
                <Card
                  className={`border transition-all duration-500 hover:shadow-xl transform hover:-translate-y-1 ${
                    isDarkMode
                      ? "border-gray-700 bg-gray-800 hover:border-purple-500"
                      : "border-gray-200 bg-white hover:border-purple-300"
                  }`}
                >
                  <CardContent className="p-6">
                    <h3
                      className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Product Lead
                    </h3>
                    <h4 className="text-xl text-purple-500 mb-4">InterRoom</h4>
                    <ul
                      className={`space-y-2 transition-colors duration-300 ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      <li>• Leading product development for HR SaaS platform with client portal and job tracker</li>
                      <li>• Driving user-centric design and feature development</li>
                      <li>• Managing cross-functional teams to deliver enterprise solutions</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Nimble RX */}
            <div className="flex flex-col md:flex-row gap-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <div className="md:w-1/4">
                <div className="text-cyan-500 font-semibold text-lg">2022</div>
              </div>
              <div className="md:w-3/4">
                <Card
                  className={`border transition-all duration-500 hover:shadow-xl transform hover:-translate-y-1 ${
                    isDarkMode
                      ? "border-gray-700 bg-gray-800 hover:border-green-500"
                      : "border-gray-200 bg-white hover:border-green-300"
                  }`}
                >
                  <CardContent className="p-6">
                    <h3
                      className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Senior Product Manager
                    </h3>
                    <h4 className="text-xl text-green-500 mb-4">Nimble RX</h4>
                    <ul
                      className={`space-y-2 transition-colors duration-300 ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      <li>• Managed product development for healthcare technology solutions</li>
                      <li>• Focused on improving patient experience and operational efficiency</li>
                      <li>• Collaborated with healthcare professionals to define product requirements</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Shopkick */}
            <div className="flex flex-col md:flex-row gap-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="md:w-1/4">
                <div className="text-cyan-500 font-semibold text-lg">2017 - 2022</div>
              </div>
              <div className="md:w-3/4">
                <Card
                  className={`border transition-all duration-500 hover:shadow-xl transform hover:-translate-y-1 ${
                    isDarkMode
                      ? "border-gray-700 bg-gray-800 hover:border-orange-500"
                      : "border-gray-200 bg-white hover:border-orange-300"
                  }`}
                >
                  <CardContent className="p-6">
                    <h3
                      className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Senior Product Manager / Product Manager
                    </h3>
                    <h4 className="text-xl text-orange-500 mb-4">Shopkick</h4>
                    <ul
                      className={`space-y-2 transition-colors duration-300 ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      <li>
                        • Led development of Digital Receipts product line, increasing purchase conversion by 30% YoY
                      </li>
                      <li>• Built Targeted Video Advertising platform generating $10M ARR</li>
                      <li>• Managed end-to-end product lifecycle from conception to launch</li>
                      <li>• Drove user acquisition and engagement strategies for mobile commerce platform</li>
                      <li>• Collaborated with engineering, design, and business teams to deliver impactful features</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`py-20 transition-colors duration-300 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2
              className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card
              className={`border hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group animate-fade-in-up ${
                isDarkMode
                  ? "border-gray-700 bg-gray-900 hover:border-cyan-500"
                  : "border-gray-200 bg-white hover:border-cyan-300"
              }`}
              style={{ animationDelay: "0.1s" }}
            >
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3
                    className={`text-2xl font-bold transition-colors duration-300 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    MathStack AI
                  </h3>
                  <ExternalLink
                    className="text-cyan-500 group-hover:scale-110 transition-transform duration-300"
                    size={20}
                  />
                </div>
                <p className={`mb-4 transition-colors duration-300 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                  An AI-powered EdTech platform for mathematics learning that personalizes the educational experience
                  using advanced machine learning algorithms.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:scale-105 transition-transform">
                    AI/ML
                  </Badge>
                  <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:scale-105 transition-transform">
                    EdTech
                  </Badge>
                  <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:scale-105 transition-transform">
                    Product Strategy
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card
              className={`border hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group animate-fade-in-up ${
                isDarkMode
                  ? "border-gray-700 bg-gray-900 hover:border-purple-500"
                  : "border-gray-200 bg-white hover:border-purple-300"
              }`}
              style={{ animationDelay: "0.2s" }}
            >
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3
                    className={`text-2xl font-bold transition-colors duration-300 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    InterRoom
                  </h3>
                  <ExternalLink
                    className="text-purple-500 group-hover:scale-110 transition-transform duration-300"
                    size={20}
                  />
                </div>
                <p className={`mb-4 transition-colors duration-300 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                  An HR SaaS platform featuring a comprehensive client portal and job tracker, streamlining recruitment
                  processes for enterprise clients.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:scale-105 transition-transform">
                    SaaS
                  </Badge>
                  <Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:scale-105 transition-transform">
                    HR Tech
                  </Badge>
                  <Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:scale-105 transition-transform">
                    Enterprise
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card
              className={`border hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group animate-fade-in-up ${
                isDarkMode
                  ? "border-gray-700 bg-gray-900 hover:border-green-500"
                  : "border-gray-200 bg-white hover:border-green-300"
              }`}
              style={{ animationDelay: "0.3s" }}
            >
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3
                    className={`text-2xl font-bold transition-colors duration-300 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Digital Receipts
                  </h3>
                  <ExternalLink
                    className="text-green-500 group-hover:scale-110 transition-transform duration-300"
                    size={20}
                  />
                </div>
                <p className={`mb-4 transition-colors duration-300 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                  Revolutionary digital receipt system at Shopkick that increased purchase conversion by 30%
                  year-over-year through seamless user experience.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-gradient-to-r from-green-500 to-teal-600 text-white hover:scale-105 transition-transform">
                    Mobile Commerce
                  </Badge>
                  <Badge className="bg-gradient-to-r from-green-500 to-teal-600 text-white hover:scale-105 transition-transform">
                    Conversion Optimization
                  </Badge>
                  <Badge className="bg-gradient-to-r from-green-500 to-teal-600 text-white hover:scale-105 transition-transform">
                    UX Design
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card
              className={`border hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group animate-fade-in-up ${
                isDarkMode
                  ? "border-gray-700 bg-gray-900 hover:border-orange-500"
                  : "border-gray-200 bg-white hover:border-orange-300"
              }`}
              style={{ animationDelay: "0.4s" }}
            >
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3
                    className={`text-2xl font-bold transition-colors duration-300 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Targeted Video Advertising
                  </h3>
                  <ExternalLink
                    className="text-orange-500 group-hover:scale-110 transition-transform duration-300"
                    size={20}
                  />
                </div>
                <p className={`mb-4 transition-colors duration-300 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                  Built a sophisticated video advertising platform at Shopkick that generated $10M in annual recurring
                  revenue through precise targeting and engagement.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-gradient-to-r from-orange-500 to-red-600 text-white hover:scale-105 transition-transform">
                    AdTech
                  </Badge>
                  <Badge className="bg-gradient-to-r from-orange-500 to-red-600 text-white hover:scale-105 transition-transform">
                    Video Platform
                  </Badge>
                  <Badge className="bg-gradient-to-r from-orange-500 to-red-600 text-white hover:scale-105 transition-transform">
                    Revenue Growth
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={`py-20 relative overflow-hidden ${
          isDarkMode
            ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
            : "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
        }`}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-64 h-64 bg-cyan-500 rounded-full opacity-10 animate-pulse"></div>
          <div
            className="absolute bottom-10 left-10 w-80 h-80 bg-purple-500 rounded-full opacity-10 animate-bounce"
            style={{ animationDuration: "3s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Ready to collaborate on your next product challenge? Let's connect and explore how we can create
              exceptional user experiences together.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-3 text-lg flex items-center gap-2 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={() => window.open("mailto:ajay@example.com", "_blank")}
              >
                <Mail size={20} />
                Email Me
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg flex items-center gap-2 bg-transparent transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={() => window.open("https://linkedin.com/in/ajaynichani", "_blank")}
              >
                <Linkedin size={20} />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`border-t py-8 transition-colors duration-300 ${
          isDarkMode ? "bg-gray-900 border-gray-800" : "bg-gray-900 border-gray-800"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© 2025 Ajay Nichani. All Rights Reserved.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  )
}
