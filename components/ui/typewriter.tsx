"use client"

import { useState, useEffect } from "react"

interface TypewriterProps {
  phrases: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delay?: number
}

export function Typewriter({ phrases, typingSpeed = 100, deletingSpeed = 50, delay = 2000 }: TypewriterProps) {
  const [text, setText] = useState("")
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[phraseIndex]
      if (isDeleting) {
        setText(currentPhrase.substring(0, text.length - 1))
      } else {
        setText(currentPhrase.substring(0, text.length + 1))
      }

      if (!isDeleting && text === currentPhrase) {
        setTimeout(() => setIsDeleting(true), delay)
      } else if (isDeleting && text === "") {
        setIsDeleting(false)
        setPhraseIndex((prev) => (prev + 1) % phrases.length)
      }
    }

    const speed = isDeleting ? deletingSpeed : typingSpeed
    const timeout = setTimeout(handleTyping, speed)
    return () => clearTimeout(timeout)
  }, [text, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, delay])

  return (
    <span className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-normal">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  )
}
