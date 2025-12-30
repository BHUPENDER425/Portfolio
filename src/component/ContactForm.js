"use client"

import { useState } from "react"

export default function ContactForm({ isDarkMode }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus({ type: "error", message: "Please fill in all fields." })
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setStatus({ type: "error", message: "Please enter a valid email address." })
      return
    }

    try {
      setStatus({ type: "neutral", message: "Sending..." })
      // Replace this with real API call when ready
      await new Promise((r) => setTimeout(r, 800))
      setStatus({ type: "success", message: "Thanks — your message has been sent!" })
      setName("")
      setEmail("")
      setMessage("")
    } catch (err) {
      setStatus({ type: "error", message: "Something went wrong — please try again." })
    }
  }

  return (
    <section className="">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-2">Contact</h2>
        <p className={`text-lg mb-8 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
          Let's work together to create something amazing.
        </p>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4" noValidate>
          <div className="grid md:grid-cols-2 gap-4">
            <label className="flex flex-col">
              <span className="text-sm mb-2">Name</span>
              <input
                aria-label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`px-4 py-2 rounded border ${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"}`}
              />
            </label>

            <label className="flex flex-col">
              <span className="text-sm mb-2">Email</span>
              <input
                aria-label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`px-4 py-2 rounded border ${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"}`}
              />
            </label>
          </div>

          <label className="flex flex-col">
            <span className="text-sm mb-2">Message</span>
            <textarea
              aria-label="Message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`px-4 py-2 rounded border resize-y ${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"}`}
            />
          </label>

          <div className="flex items-center gap-4">
            <button
              type="submit"
              className={`px-6 py-3 rounded font-medium transition ${isDarkMode ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-blue-600 text-white hover:bg-blue-700"}`}
            >
              Send message
            </button>

            {status && (
              <p className={`text-sm ${status.type === "success" ? "text-green-400" : status.type === "error" ? "text-red-400" : "text-gray-400"}`}>
                {status.message}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
