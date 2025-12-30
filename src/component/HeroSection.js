"use client"

import { useState, useEffect } from "react"
 
import { Sun, Moon, Github, Linkedin } from "lucide-react"
import Project from "./Project"
import ContactForm from "./ContactForm"
import Footer from "./Footer"

export default function Component() {
  const [displayedText, setDisplayedText] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [navOpen, setNavOpen] = useState(false);
  const fullText = "JavaScrip and React/Next.js developer"

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

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(Math.min(progress, 100))
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setNavOpen(false)
  }

  const skillImages = {
  "React.js": "public/img/react.cb15bfce2a9004ce61c5f79f805b067b.png",
  "Next.js": "public/img/nextjs.ff373e2ef4f7fdf152425a8c5c30816c.png",
  "JavaScript": "public/img/js.f8a28e905c78dadb79434b7ceebd52a0.png",
  "HTML5": "public/img/html.6aa56206be02cf6404844871df1d2da6.png",
  "CSS3": "public/img/css.0ce0f0a2b4c4aa34b64c40e5278af3d1.png",
  "Git": "public/img/git.3092b5991e8accb9e7c36817c048a8d5.png",
  "Node.js": "public/img/node.94a06c4b9dd29e984501e6407e77a918.png",
  "MongoDB": "public/img/mongo.41ae1969f341d30268a13d57846efcc6.pTailwindn: ",
  "Tailwind CSS": "public/img/Tailwind_CSS_Logo.svg.png",
  "Bootstrap": "public/img/bootstrap-logo-shadow.png",
  "PHP": "public/img/php_PNG43.png",
  "MySQL": "public/img/mysql-icon.webp",
  "SEO": "public/img/seo-lgo.png",


  // Add paths for Tailwind, Bootstrap, PHP, MySQL, SEO if available
};


  return (
    <div
      className={`min-h-screen relative transition-colors duration-300 overflow-x-hidden overflow-y-hidden ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Animated Vertical Progress Line */}
      <div className="hidden md:block fixed left-8 top-0 bottom-0 w-0.5 z-20">
        <div
          className={`w-full transition-colors duration-300 ${isDarkMode ? "bg-gray-700" : "bg-gray-300"}`}
          style={{ height: "100vh" }}
        />
        <div
          className="absolute top-0 left-0 w-full bg-blue-500 transition-all duration-300 ease-out"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>

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
          className={`relative flex items-center justify-center gap-4 px-6 py-3 min-w-[20rem] md:min-w-[28rem] rounded-full border transition-colors duration-300 ${isDarkMode ? "border-gray-700 backdrop-blur-sm" : "bg-white/80 border-gray-200 backdrop-blur-sm"}`}
        >
          <div className="relative group">
            <button
              
              aria-haspopup="true"
              aria-expanded={navOpen}
              className="text-sm font-medium px-3 py-2 flex items-center gap-2"
            >
              Navigation
              {/* <svg className={`w-3 h-3 transition-transform ${navOpen ? "transform rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.29a.75.75 0 01-.02-1.08z" />
              </svg> */}
            </button>

            {/* Hover-triggered dropdown (centred, smooth) */}
            <ul
              role="menu"
              className={`absolute left-1/2 transform -translate-x-1/2 mt-1  rounded-md shadow-lg py-2 z-30 transition-all duration-200 ease-out opacity-0 translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto ${navOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : ''} ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white/95 text-gray-900'}`}
            >
              <li role="none"><button role="menuitem" className="w-full text-left px-4 py-2 text-sm hover:bg-gray-700 hover:text-white" onClick={() => scrollToSection('home')}>Home</button></li>
              <li role="none"><button role="menuitem" className="w-full text-left px-4 py-2 text-sm hover:bg-gray-700 hover:text-white" onClick={() => scrollToSection('experience')}>Experience</button></li>
              <li role="none"><button role="menuitem" className="w-full text-left px-4 py-2 text-sm hover:bg-gray-700 hover:text-white" onClick={() => scrollToSection('skills')}>Skills</button></li>
              <li role="none"><button role="menuitem" className="w-full text-left px-4 py-2 text-sm hover:bg-gray-700 hover:text-white" onClick={() => scrollToSection('projects')}>Projects</button></li>
              <li role="none"><button role="menuitem" className="w-full text-left px-4 py-2 text-sm hover:bg-gray-700 hover:text-white" onClick={() => scrollToSection('contact')}>Contact</button></li>
            </ul>
          </div>
          <div className="relative group">
            <button
              
              aria-haspopup="true"
              aria-expanded={navOpen}
              className="text-sm font-medium px-3 py-2 flex items-center gap-2"
            >
              Social
              {/* <svg className={`w-3 h-3 transition-transform ${navOpen ? "transform rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.29a.75.75 0 01-.02-1.08z" />
              </svg> */}
            </button>

            {/* Hover-triggered dropdown (centred, smooth) */}
            <ul
              role="menu"
              className={`absolute left-1/2 transform -translate-x-1/2 mt-1  rounded-md shadow-lg py-2 z-30 transition-all duration-200 ease-out opacity-0 translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto ${navOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : ''} ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white/95 text-gray-900'}`}
            >
              <li role="none"><a role="menuitem" href="https://github.com/BHUPENDER425/" target="_blank" rel="noopener noreferrer" className="w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-700 hover:text-white"><Github className="w-4 h-4" /> GitHub</a></li>
              <li role="none"><a role="menuitem" href="https://www.linkedin.com/in/bhupender-sharma-141b7527a/" target="_blank" rel="noopener noreferrer" className="w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-700 hover:text-white"><Linkedin className="w-4 h-4" /> LinkedIn</a></li>
            </ul>
          </div>

          {/* <div className="flex items-center gap-2">
            <a href="https://github.com/BHUPENDER425/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/in/bhupender-sharma-141b7527a/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
              <Linkedin className="w-4 h-4" />
            </a>
          </div> */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-2 rounded-full transition-colors duration-300 ${isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main id="home" className="relative z-6 flex flex-col items-center justify-center px-4 pl-4 md:pl-20 md:min-h-[80vh] min-h-[70vh] text-center">
        <div className="text-center max-w-4xl mx-auto">
          <p
            className={`text-lg mb-8 transition-colors duration-300 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
          >
            Hello, I'm Bhupender Sharma. A passionate Software Engineer.
          </p>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-12 leading-tight">
            <span className="inline-block">
              {displayedText.split(" ").map((word, index) => (
                <span key={index} className="inline-block mr-4">
                  {word === "developer" ? <span className="text-blue-500">{word}</span> : word}
                </span>
              ))}
              <span className="animate-pulse text-blue-500">|</span>
            </span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/img/resume/Bhupender_Sharma.pdf"
              download="Bhupender_Sharma"
              className={`px-8 py-3 text-base font-medium inline-block text-center transition-all duration-300 ${
                isDarkMode ? "bg-white text-gray-900 hover:bg-gray-100" : "bg-gray-900 text-white hover:bg-gray-800"
              }`}
              aria-label="Download Bhupender Sharma CV"
            >
              Download CV
            </a>
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              variant="outline"
              size="lg"
              className={`px-8 py-3 text-base font-medium transition-all duration-300 ${
                isDarkMode
                  ? "border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
                  : "border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
            >
              Contact Me
            </button>
          </div>
        </div>
      </main>

      {/* Experience Section */}
      <section id="experience" className="relative z-10 px-4 pl-4 md:pl-16 py-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Experience</h2>

          <div className="relative">
            {/* Timeline dot */}
            <div className="absolute left-[-4.5rem] top-8 w-3 h-3 bg-teal-500 rounded-full"></div>

            <div className="space-y-12">
            
              

              {/* Brandshow Consultancy Services Experience */}
              <div className="mb-12">
                <h3 className="text-2xl  mb-4">Brandshow Consultancy Services Pvt. Ltd.</h3>
                <p className={`text-lg mb-4 italic ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                  Web Developer | 2022 – Present
                </p>
                <ul className="space-y-3 text-base leading-relaxed">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-2">•</span>
                    <span>Developed and maintained responsive, user-focused websites using React, JavaScript, PHP, HTML5, and CSS3.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-2">•</span>
                    <span>Worked on multiple institutional and educational websites, improving UI/UX, performance, and cross-device compatibility.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-2">•</span>
                    <span>Built and optimized landing pages for lead generation, focusing on conversion, SEO best practices, and page speed.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-2">•</span>
                    <span>Collaborated with designers and stakeholders to translate requirements into clean, scalable frontend solutions.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-2">•</span>
                    <span>Led and supported small development efforts, contributing to code quality, best practices, and timely project delivery.</span>
                  </li>
                </ul>

                <div className="mt-4">
                  <h4 className="font-semibold">Key Projects:</h4>
                  <ul className="list-disc list-inside mt-2 text-base">
                    <li>GNIOT Group – gniotgroup.edu.in</li>
                    <li>GIMS – gims.net.in</li>
                    <li>JIMS Noida – jimsnoida.org</li>
                    <li>Accurate Institute – accurate.in</li>
                    <li>GIMS & GNIOT Landing Pages (Lead Generation)</li>
                  </ul>
                </div>
              </div>

              {/* Bosnia and Herzegovina Futures Foundation Experience */}
              
            </div>
          </div>
        </div>
      </section>

      {/* Additional sections for more scroll content */}
      <section id="skills" className="relative z-10 px-4 pl-4 md:pl-20 py-8 mb-4">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl md:text-6xl font-bold mb-8">Skills</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 items-center">
      {[
        "React.js",
        "Next.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap",
        "PHP",
        "MySQL",
        "SEO",
        "Git",
        "Node.js",
      ].map((skill) => (
        <div
          key={skill}
          className={`p-4  border transition-colors duration-300 flex flex-col items-center text-center ${
            isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
          }`}
        >
          {skillImages[skill] && (
            <img
              src={`/${skillImages[skill].replace("public/", "")}`}
              alt={skill}
              className="w-16 h-auto mb-2"
            />
          )}
          <span className="font-medium">{skill}</span>
        </div>
      ))}
    </div>
  </div>
</section>


      <section id="projects" className="relative z-10 px-4 pl-4 md:pl-20 py-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Projects</h2>
          <p className={`text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            Here are some of my recent projects that showcase my skills and experience in web development.
          </p>
          <Project isDarkMode={isDarkMode}/>
        </div>
      </section>

      <section id="contact" className="relative z-10 px-4 pl-4 md:pl-20 py-8">
        <div className="max-w-7xl mx-auto">
          <ContactForm isDarkMode={isDarkMode} />
        </div>
      </section>

      {/* Footer */}
      <Footer isDarkMode={isDarkMode} />

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
