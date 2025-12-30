"use client"

import { useState } from "react"
import { Moon, Sun } from "lucide-react"
 

export default function Component() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const skills = [
    {
      name: "React.js",
      icon: "⚛️",
      special: true,
    },
    {
      name: "Next.js",
      icon: "▲",
      special: false,
    },
    {
      name: "Tailwind",
      icon: "~",
      special: false,
    },
    {
      name: "Java",
      icon: "☕",
      special: false,
    },
    {
      name: "Spring Boot",
      icon: "🍃",
      special: false,
    },
    {
      name: "PostgreSQL",
      icon: "🐘",
      special: false,
    },
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? "dark bg-gray-900" : "bg-gray-50"}`}>
      <div className="container mx-auto px-4 py-12">
        {/* Dark Mode Toggle */}
        <div className="flex justify-end mb-8">
          <button
            onClick={toggleDarkMode}
            variant="outline"
            size="icon"
            className={`${isDarkMode ? "border-gray-600 text-white hover:bg-gray-800" : "border-gray-300"}`}
          >
            {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>

        {/* Skills Section */}
        <div className="relative max-w-4xl mx-auto">
          <h1 className={`text-6xl  font-bold mb-16 ${isDarkMode ? "text-white" : "text-black"}`}>Skills</h1>

          {/* Decorative Plus Signs */}
          <div className="absolute -top-4 -left-4 text-gray-400 text-xl">+</div>
          <div className="absolute -top-4 left-1/3 text-gray-400 text-xl">+</div>
          <div className="absolute -top-4 left-2/3 text-gray-400 text-xl">+</div>
          <div className="absolute -top-4 -right-4 text-gray-400 text-xl">+</div>

          <div className="absolute top-1/3 -left-4 text-gray-400 text-xl">+</div>
          <div className="absolute top-1/3 left-1/3 text-gray-400 text-xl">+</div>
          <div className="absolute top-1/3 left-2/3 text-gray-400 text-xl">+</div>
          <div className="absolute top-1/3 -right-4 text-gray-400 text-xl">+</div>

          <div className="absolute top-2/3 -left-4 text-gray-400 text-xl">+</div>
          <div className="absolute top-2/3 left-1/3 text-gray-400 text-xl">+</div>
          <div className="absolute top-2/3 left-2/3 text-gray-400 text-xl">+</div>
          <div className="absolute top-2/3 -right-4 text-gray-400 text-xl">+</div>

          <div className="absolute -bottom-4 -left-4 text-gray-400 text-xl">+</div>
          <div className="absolute -bottom-4 left-1/3 text-gray-400 text-xl">+</div>
          <div className="absolute -bottom-4 left-2/3 text-gray-400 text-xl">+</div>
          <div className="absolute -bottom-4 -right-4 text-gray-400 text-xl">+</div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`relative h-48 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
                  isDarkMode
                    ? "border-gray-600 bg-gray-800 hover:border-gray-500"
                    : "border-gray-200 bg-white hover:border-gray-300"
                } ${
                  skill.special
                    ? "bg-gradient-to-br from-green-200 via-blue-200 to-purple-200 dark:from-green-800 dark:via-blue-800 dark:to-purple-800"
                    : ""
                }`}
              >
                {/* Special background pattern for React.js */}
                {skill.special && (
                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 opacity-20 text-xs font-mono leading-tight p-4 text-gray-600 dark:text-gray-300">
                      {
                        "const component = () => {\n  return (\n    <div>\n      <h1>Hello World</h1>\n    </div>\n  )\n}\n\nexport default component\n\nfunction App() {\n  const [state, setState] = useState()\n  useEffect(() => {\n    // side effect\n  }, [])\n  return <Component />\n}"
                      }
                    </div>
                  </div>
                )}

                {/* Card Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full p-6">
                  <div
                    className={`text-4xl mb-4 ${skill.special ? "text-gray-800 dark:text-gray-200" : isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                  >
                    {skill.icon}
                  </div>
                  <h3
                    className={`text-2xl font-bold text-center ${
                      skill.special ? "text-gray-900 dark:text-white" : isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {skill.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
