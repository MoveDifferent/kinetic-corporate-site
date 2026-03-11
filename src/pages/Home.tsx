import React from "react"
import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Services from "@/components/sections/Services"
import Team from "@/components/sections/Team"
import Testimonials from "@/components/sections/Testimonials"
import Timeline from "@/components/sections/Timeline"
import Comparison from "@/components/sections/Comparison"
import CaseStudies from "@/components/sections/CaseStudies"
import Contact from "@/components/sections/Contact"
import Blog from "@/components/sections/Blog"

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Timeline />
      <Services />
      <Comparison />
      <Team />
      <Testimonials />
      <CaseStudies />
      <Blog />
      <Contact />
    </main>
  )
}

export default Home