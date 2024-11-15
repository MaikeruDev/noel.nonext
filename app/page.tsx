"use client"

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa'
import { ChevronRight, Code, Palette, Database, Server, Cpu, Globe } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from 'next/link'

export default function MichaelPortfolio() {
  const aboutRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const techStacksRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const skills = [
    { name: 'Frontend Development', icon: <Code className="w-6 h-6" />, description: 'Crafting responsive and interactive user interfaces' },
    { name: 'Backend Development', icon: <Server className="w-6 h-6" />, description: 'Building robust server-side applications and APIs' },
    { name: 'Database Management', icon: <Database className="w-6 h-6" />, description: 'Designing and optimizing database structures' },
    { name: 'UI/UX Design', icon: <Palette className="w-6 h-6" />, description: 'Creating intuitive and visually appealing designs' },
  ]

  const projects = [
    { name: 'nonext.io', description: 'Lead developer for our company website, showcasing our top projects and services.', tech: ['Next.js', 'Tailwind CSS', 'Three.js'], url: 'https://nonext.io' },
  ]

  const techStacks = [
    {
      name: 'Languages',
      icon: <Code className="w-6 h-6" />,
      techs: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'C#', 'C++', 'Python', 'SASS', 'Java']
    },
    {
      name: 'Libraries & Frameworks',
      icon: <Globe className="w-6 h-6" />,
      techs: ['React', 'Next.js', 'Angular', 'Node.js', 'Express.js', 'Ionic', 'Unity', 'Three.js', 'Framer Motion', 'shadcn/ui']
    },
    {
      name: 'Databases & ORM',
      icon: <Database className="w-6 h-6" />,
      techs: ['MySQL', 'Firebase', 'Prisma']
    }
  ]

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <header className="fixed top-0 left-0 right-0 z-50 p-4 bg-black/50 backdrop-blur-md">
        <nav className="flex justify-between items-center max-w-6xl mx-auto">
          <Link href="/">
            <h1 className="text-2xl font-bold flex items-center space-x-2">
              <span className='hidden sm:block'>Noel Hermann</span>
              <span className='block sm:hidden'>NH</span>
            </h1>
          </Link>
          <ul className="flex space-x-6">
            <li><button onClick={() => scrollToSection(aboutRef)} className="hover:text-gray-300 transition-colors">About</button></li>
            <li><button onClick={() => scrollToSection(skillsRef)} className="hover:text-gray-300 transition-colors">Skills</button></li>
            <li><button onClick={() => scrollToSection(projectsRef)} className="hover:text-gray-300 transition-colors">Projects</button></li>
            <li><button onClick={() => scrollToSection(techStacksRef)} className="hover:text-gray-300 transition-colors">Stacks</button></li>
            <li><button onClick={() => scrollToSection(contactRef)} className="hover:text-gray-300 transition-colors">Contact</button></li>
          </ul>
        </nav>
      </header>

      <main className="pt-20">
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.img
              src="/nohell.png"
              alt="Noel Hermann"
              className="w-40 h-40 rounded-full mx-auto mb-8 border-2 border-white/20"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <motion.h2
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Noel Hermann
            </motion.h2>
            <motion.p
              className="text-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Full-Stack Developer & Database Engineer at nonext
            </motion.p>
            <motion.div
              className="flex justify-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a href="https://github.com/FIEF-nohell" className="text-3xl hover:text-gray-300 transition-colors" aria-label="GitHub Profile"><FaGithub /></a>
              <a href="https://www.instagram.com/noel_her/" className="text-3xl hover:text-gray-300 transition-colors" aria-label="LinkedIn Profile"><FaInstagram /></a>
              <a href="mailto:nh@nonext.io" className="text-3xl hover:text-gray-300 transition-colors" aria-label="Email Contact"><FaEnvelope /></a>
            </motion.div>
          </div>
        </section>

        <section ref={aboutRef} className="py-20 px-4 bg-white text-black">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-8 text-center">About Me</h3>
            <div className="space-y-6">
              <p>
                Hello! I’m Noel, a 21-year-old web developer passionate about crafting efficient and robust digital solutions. While I specialize in backend development and functionality, I collaborate closely with talented front-end developers like Michael to create seamless and visually appealing projects.              </p>
              <p>
                I thrive on working with data, diving into numbers, and bringing stories to life through visualizations. My curiosity drives me to constantly expand my knowledge, exploring new tools and techniques to make data-driven decisions more accessible and insightful.              </p>
              <p>
                Outside of development, I enjoy honing my skills and immersing myself in a good book. Whether I’m learning something new or perfecting my craft, I’m always driven by a desire to grow and create meaningful work.
              </p>

            </div>
          </div>
        </section>

        <section ref={skillsRef} className="py-20 px-4 bg-black">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-12 text-center">Skills & Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <Card key={index} className="bg-black border-2 border-white/50 text-white hover:bg-white/10 duration-300 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="text-white">{skill.icon}</div>
                      <h4 className="text-xl font-semibold ml-4">{skill.name}</h4>
                    </div>
                    <p className="text-gray-300">{skill.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section ref={projectsRef} className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-12 text-center text-black">Featured Projects</h3>
            <div className="space-y-12">
              {projects.map((project, index) => (
                <Card key={index} className="rounded-lg shadow-sm bg-white text-black overflow-hidden border border-gray-200">
                  <CardContent className="p-6">
                    <h4 className="text-2xl font-semibold mb-4">{project.name}</h4>
                    <p className="text-black/80 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">{tech}</span>
                      ))}
                    </div>
                    <Button
                      variant="link"
                      className="text-primary hover:text-primary-focus p-0 h-auto font-normal"
                      onClick={() => window.open(project.url, '_blank')}
                    >
                      View Project <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section ref={techStacksRef} className="py-20 px-4 bg-black">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-12 text-center">Tech Stacks</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {techStacks.map((stack, index) => (
                <Card key={index} className="bg-black border-2 border-white/50 text-white hover:bg-white/10 duration-300 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="text-white">{stack.icon}</div>
                      <h4 className="text-xl font-semibold ml-4">{stack.name}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {stack.techs.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-white/20 text-gray-100 text-xs rounded-full">{tech}</span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section ref={contactRef} className="py-20 px-4 bg-white text-black">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-8">Get in Touch</h3>
            <p className="text-lg mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out to me through any of the following channels:
            </p>
            <div className="flex justify-center space-x-6 mb-2">
              <a href="https://github.com/FIEF-nohell" className="text-3xl hover:text-gray-700 transition-colors" aria-label="GitHub Profile"><FaGithub /></a>
              <a href="https://www.instagram.com/noel_her/" className="text-3xl hover:text-gray-700 transition-colors" aria-label="LinkedIn Profile"><FaInstagram /></a>
              <a href="mailto:nh@nonext.io" className="text-3xl hover:text-gray-700 transition-colors" aria-label="Email Contact"><FaEnvelope /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-6 px-4 text-center text-sm bg-black">
        <p>&copy; 2024 Noel Hermann. All rights reserved.</p>
      </footer>
    </div>
  )
}