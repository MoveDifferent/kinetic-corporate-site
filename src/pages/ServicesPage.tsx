import React from "react"
import Services from "@/components/sections/Services"
import Comparison from "@/components/sections/Comparison"

const ServicesPage = () => {
  return (
    <main className="pt-20">
      <div className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Integrated Solutions</h1>
          <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
            We provide world-class logistics, marketing, and wellness solutions.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-600/20 skew-x-[-15deg] translate-x-1/2 z-0" />
      </div>
      <Services />
      <Comparison />
    </main>
  )
}

export default ServicesPage