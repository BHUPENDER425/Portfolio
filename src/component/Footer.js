import React from "react"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

export default function Footer({ isDarkMode }) {
  return (
    <footer className={`mt-12 border-t relative z-40 ${isDarkMode ? "border-gray-800 bg-gray-900 text-gray-200" : "border-gray-200 bg-white text-gray-700"}`}>
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col justify-between min-h-[160px]">
        <div className="max-w-xl">
          <h3 className="text-xl font-bold">Bhupender Sharma</h3>
          <p className="mt-2 text-sm leading-relaxed">
            Software Engineer focused on building scalable web applications using React, Next.js and modern web
            technologies. Open to collaborations and new opportunities.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-2">
            <a href="mailto:bhupendersharma8585@gmail.com" className="inline-flex items-center gap-2 text-sm hover:underline">
              <Mail className="w-4 h-4" />
              <span>bhupendersharma8585@gmail.com</span>
            </a>
            <a href="tel:9971552995" className="inline-flex items-center gap-2 text-sm hover:underline">
              <Phone className="w-4 h-4" />
              <span>+91 99715 52995</span>
            </a>
          </div>
        </div>

        {/* Bottom row: copyright on left, social icons on right */}
        <div className={`w-full mt-6 pt-4 flex items-center justify-between  ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} Bhupender Sharma. All rights reserved.</p>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/BHUPENDER425/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => { e.stopPropagation(); window.open('https://github.com/BHUPENDER425/','_blank') }}
              className={`p-2 rounded-full border cursor-pointer ${isDarkMode ? 'border-gray-700 hover:bg-gray-800' : 'border-gray-200 hover:bg-gray-100'}`}
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/bhupender-sharma-141b7527a/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => { e.stopPropagation(); window.open('https://www.linkedin.com/in/bhupender-sharma-141b7527a/','_blank') }}
              className={`p-2 rounded-full border cursor-pointer ${isDarkMode ? 'border-gray-700 hover:bg-gray-800' : 'border-gray-200 hover:bg-gray-100'}`}
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
