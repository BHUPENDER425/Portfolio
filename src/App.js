"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sun, Moon } from "lucide-react"

export default function Component() {
  const [displayedText, setDisplayedText] = useState("")
  const [isDarkMode, setIsDarkMode] = useState(false)
  const fullText = "Java and React/Next.js developer"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <div
      className={`min-h-screen relative overflow-hidden transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Animated Background Line */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-diagonal-move"></div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-gray-300 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-gray-300 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-gray-300 rounded-full"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-center pt-8">
        <div
          className={`flex items-center gap-8 px-8 py-4 rounded-full border transition-colors duration-300 ${
            isDarkMode
              ? "bg-gray-800/80 border-gray-700 backdrop-blur-sm"
              : "bg-white/80 border-gray-200 backdrop-blur-sm"
          }`}
        >
          <span className="text-sm font-medium">Navigation</span>
          <span className="text-sm font-medium">Social</span>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-2 rounded-full transition-colors duration-300 ${
              isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
            }`}
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Subtitle */}
          <p
            className={`text-lg mb-8 transition-colors duration-300 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
          >
            Hello, I'm Safet. A passionate Software Engineer.
          </p>

          {/* Animated Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-12 leading-tight">
            <span className="inline-block">
              {displayedText.split(" ").map((word, index) => (
                <span key={index} className="inline-block mr-4">
                  {word === "developer" ? <span className="text-blue-500">{word}</span> : word}
                </span>
              ))}
              <span className="animate-pulse text-blue-500">|</span>
            </span>
          </h1>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className={`px-8 py-3 text-base font-medium transition-all duration-300 ${
                isDarkMode ? "bg-white text-gray-900 hover:bg-gray-100" : "bg-gray-900 text-white hover:bg-gray-800"
              }`}
            >
              Download CV
            </Button>
            <Button
              variant="outline"
              size="lg"
              className={`px-8 py-3 text-base font-medium transition-all duration-300 ${
                isDarkMode
                  ? "border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
                  : "border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
            >
              Contact Me
            </Button>
          </div>
        </div>
      </main>

      <style jsx>{`
        @keyframes diagonal-move {
          0% {
            transform: translateX(-100%) translateY(-100%) rotate(45deg);
          }
          100% {
            transform: translateX(100vw) translateY(100vh) rotate(45deg);
          }
        }
        
        .animate-diagonal-move {
          animation: diagonal-move 8s linear infinite;
          transform-origin: center;
        }
      `}</style>
    </div>
  )
}
