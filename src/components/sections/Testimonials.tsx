import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"

const testimonials = [
  {
    quote: "Move Different Kenya transformed our supply chain. Their logistics solutions are second to none in East Africa.",
    name: "John Kamau",
    title: "Operations Director, Safari Express",
    logo: "Safari Express",
    rating: 5
  },
  {
    quote: "The digital marketing strategy they implemented increased our lead conversion by 45% in just three months.",
    name: "Sarah Wanjiku",
    title: "Marketing Head, Elite Retailers",
    logo: "Elite Retailers",
    rating: 5
  },
  {
    quote: "Our team's productivity has spiked since we started the Corporate Wellness program with Move Different.",
    name: "Michael Otieno",
    title: "HR Manager, TechNova Solutions",
    logo: "TechNova Solutions",
    rating: 5
  }
]

const Testimonials = () => {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-24 bg-slate-900 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-600/10 skew-x-[-20deg] translate-x-1/2 z-0" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            Trusted by Industry Leaders
          </h3>
        </div>

        <div className="max-w-4xl mx-auto relative px-12 md:px-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="flex justify-center mb-8">
                <Quote size={64} className="text-orange-500 opacity-30" />
              </div>
              <p className="text-2xl md:text-3xl text-slate-200 leading-relaxed italic mb-12">
                "{testimonials[current].quote}"
              </p>
              <div className="flex justify-center space-x-1 mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-orange-500 text-orange-500" />
                ))}
              </div>
              <h4 className="text-xl font-bold text-white mb-2">{testimonials[current].name}</h4>
              <p className="text-orange-500 font-medium uppercase tracking-wider text-xs mb-8">{testimonials[current].title}</p>
              <div className="flex justify-center items-center h-12">
                <span className="text-slate-400 font-bold text-xl opacity-50">{testimonials[current].logo}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-orange-600 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-orange-600 transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials