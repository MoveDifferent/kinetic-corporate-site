import React from "react"
import { motion } from "framer-motion"

const Timeline = () => {
  const events = [
    { year: "2014", title: "Founding", desc: "Move Different Kenya was established as a boutique logistics agency in Nairobi." },
    { year: "2016", title: "Expansion", desc: "Launched our Digital Marketing wing to support our growing list of clients." },
    { year: "2018", title: "Holistic Shift", desc: "Integrated Health & Wellness solutions, creating our unique tri-sector model." },
    { year: "2021", title: "Pioneer Award", desc: "Recognized as the 'Most Innovative Service Provider' in Kenya's business awards." },
    { year: "2024", title: "The Future", desc: "Scaling across East Africa with integrated tech and AI-powered solutions." },
  ]

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20">
          <h2 className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-4">Our History</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
            A Journey of Strategic Innovation
          </h3>
        </div>

        <div className="relative mt-20 px-8">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-100 -translate-y-1/2 hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 relative">
            {events.map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative text-center md:text-left group"
              >
                <div className="mb-8 md:mb-12 flex justify-center md:justify-start">
                   <div className="w-12 h-12 rounded-full bg-white border-4 border-orange-600 z-10 relative flex items-center justify-center group-hover:bg-orange-600 transition-colors duration-300">
                      <div className="w-2 h-2 rounded-full bg-orange-600 group-hover:bg-white" />
                   </div>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-orange-200 transition-colors shadow-sm">
                  <span className="text-3xl font-black text-orange-600/20 mb-2 block group-hover:text-orange-600/40 transition-colors">{event.year}</span>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{event.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{event.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline