"use client"
import { ExternalLink, Eye, Github } from "lucide-react"
// import { button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import {isDarkMode} from "./HeroSection" 

export default function Component({ isDarkMode }) {
//   const [isDarkMode, setIsDarkMode] = useState(false)

//   const toggleDarkMode = () => {
//     setIsDarkMode(!isDarkMode)
//   }

  const projects = [
    {
      id: 1,
      title: "College Website",
      description:
        "College website with course listings, admissions forms, and an admin portal. Built with PHP, Bootstrap, and MySQL.",
      image: "/img/gniotwebsite.png?height=200&width=300",
      technologies: ["PHP", "Bootstrap", "MySQL", "JavaScript"],
      liveUrl: "https://www.gniotgroup.edu.in/",
      featured: true,
    },
    {
      id: 2,
      title: "GIMS Landing Page",
      description:
        "Responsive marketing landing page with an admissions form and contact integration, built using PHP and Bootstrap.",
      image: "/img/gims-landing-page.png?height=200&width=300",
      technologies: ["PHP", "Bootstrap", "MySQL", "JavaScript"],
      liveUrl: "https://www.gims.net.in/apply-now/",
      featured: false,
    },
    {
      id: 3,
      title: "Federation of Industrial Education",
      description: "Official federation site built with React and Tailwind CSS, featuring events, member directories, and API-driven content.",
      image: "/img/fieindia.png?height=200&width=300",
      technologies: ["React", "API Integration", "Tailwind CSS"],
      liveUrl: "https://fieindia.org/",
      featured: false,
    },
    {
      id: 4,
      title: "Gemini Chat Analytics Dashboard",
      description: "Analytics dashboard using Next.js and the Gemini API to analyze chat metrics and visualize trends.",
      image: "/img/gemini.png?height=200&width=300",
      technologies: ["Next.js", "Tailwind CSS", "Gemini API"],
      liveUrl: "https://sparkly-haupia-5d1902.netlify.app/",
      githubUrl: "https://github.com/BHUPENDER425/gemini-chat-bot?tab=readme-ov-file",
      featured: true,
    },
    {
      id: 5,
      title: "NetflixGPT",
      description: "AI-powered media assistant that recommends movies and generates summaries using React, Firebase, and GPT-based APIs.",
      image: "/img/netfliks.png?height=200&width=300",
      technologies: ["React", "Firebase", "Redux", "API"],
      liveUrl: "https://netflixgpt-c834c.web.app/",
      githubUrl: "https://github.com/BHUPENDER425/netflix-gpt",
      featured: false,
    },
    {
      id: 6,
      title: "GNIOT Landing Page",
      description: "Responsive landing page for admissions built with HTML and Tailwind CSS, featuring smooth animations and a contact form.",
      image: "/img/gniot-landingpage.png?height=200&width=300",
      technologies: ["HTML", "Tailwind CSS", "JavaScript"],
      liveUrl: "https://apply.gniotgroup.edu.in/",
      featured: false,
    },
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? "dark bg-gray-900" : "bg-gray-50"}`}>
      <div className="container mx-auto px-4 py-12">
        {/* Dark Mode Toggle */}
        {/* <div className="flex justify-end mb-8">
          <button
            // onClick={toggleDarkMode}
            variant="outline"
            size="icon"
            className={`${isDarkMode ? "border-gray-600 text-white hover:bg-gray-800" : "border-gray-300"}`}
          >
            {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div> */}

        {/* Projects Section */}
        <div className="max-w-7xl mx-auto">
          {/* <div className="text-center mb-16">
            <h1 className={`text-6xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-black"}`}>Projects</h1>
            <p className={`text-xl max-w-2xl mx-auto ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              Here are some of my recent projects that showcase my skills and experience in web development.
            </p>
          </div> */}

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`group relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  isDarkMode ? "bg-gray-800 border-2 border-blue-500" : "bg-white border-2 border-blue-500 shadow-lg"
                } ${project.featured ? "ring-2 ring-blue-500 ring-opacity-50" : ""}`}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    {/* <Badge className="bg-blue-500 text-white">Featured</Badge> */}
                  </div>
                )}

                {/* Project Image */}
                <div className="relative h-56 md:h-64 overflow-hidden bg-gray-900 flex items-center justify-center">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />

                  {/* Overlay buttons */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <div className="flex flex-row items-center space-x-3">
                      <button
                        size="sm"
                        className="inline-flex items-center justify-center px-3 py-2 rounded bg-white text-black hover:bg-gray-100 text-sm gap-2"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                      >
                        <Eye className="w-4 h-4" />
                        Live
                      </button>
                      {project.githubUrl && (
                        <button
                          size="sm"
                          variant="outline"
                          className="inline-flex items-center justify-center px-3 py-2 rounded bg-white text-black border-white hover:bg-gray-100 text-sm gap-2"
                          onClick={() => window.open(project.githubUrl, "_blank")}
                        >
                          Code
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                    {project.title}
                  </h3>
                  <p className={`text-sm mb-4 line-clamp-3 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {/* {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className={`text-xs ${
                          isDarkMode
                            ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {tech}
                      </Badge>
                    ))} */}
                  </div>

                  {/* Action buttons */}
                  <div className="flex space-x-3">
                    <button size="sm" className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded" onClick={() => window.open(project.liveUrl, "_blank")}>
                      <ExternalLink className="w-4 h-4" />
                      View Live
                    </button>
                    {project.githubUrl && (
                      <button
                        size="sm"
                        variant="outline"
                        onClick={() => window.open(project.githubUrl, "_blank")}
                        className={`${isDarkMode ? "border-gray-600 text-gray-300 hover:bg-gray-700" : ""} inline-flex items-center justify-center gap-2 px-3 py-2 rounded`}
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More button */}
          {/* <div className="text-center mt-12">
            <button
              size="lg"
              variant="outline"
              className={`${
                isDarkMode ? "border-gray-600 text-white hover:bg-gray-800" : "border-gray-300 hover:bg-gray-50"
              }`}
            >
              View All Projects
              <ExternalLink className="w-4 h-4 ml-2" />
            </button>
          </div> */}
        </div>
      </div>
    </div>
  )
}
