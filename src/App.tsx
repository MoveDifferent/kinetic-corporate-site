import React from "react"
import { Toaster } from "sonner"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import ScrollToTop from "@/components/layout/ScrollToTop"
import Home from "@/pages/Home"
import AboutPage from "@/pages/AboutPage"
import ServicesPage from "@/pages/ServicesPage"
import BlogPage from "@/pages/BlogPage"
import BlogDetail from "@/pages/BlogDetail"
import CaseStudyDetail from "@/pages/CaseStudyDetail"
import Contact from "@/components/sections/Contact"
import CaseStudies from "@/components/sections/CaseStudies"

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-orange-100 selection:text-orange-600">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/case-studies" element={<div className="pt-20"><CaseStudies /></div>} />
          <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/contact" element={<div className="pt-20"><Contact /></div>} />
        </Routes>
        <Footer />
        <Toaster position="top-center" richColors />
      </div>
    </Router>
  )
}

export default App