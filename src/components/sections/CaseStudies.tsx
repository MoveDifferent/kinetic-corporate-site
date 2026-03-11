import React, { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, X } from "lucide-react"
import { Link } from "react-router-dom"

const projects = [
  {
    id: 1,
    title: "Eco-Logistics Initiative",
    category: "Logistics",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1e4dbade-f95d-45c4-a17f-bc68e4d07a88/case-study-logistics-1-573671bf-1773216623505.webp",
    desc: "Implementing a green supply chain for a major retail distributor in Kenya.",
    results: "30% reduction in carbon footprint and 15% lower fuel costs."
  },
  {
    id: 2,
    title: "Digital Growth Campaign",
    category: "Marketing",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1e4dbade-f95d-45c4-a17f-bc68e4d07a88/case-study-marketing-1-105bec1c-1773216631144.webp",
    desc: "Revolutionizing online presence for an emerging FinTech startup in Nairobi.",
    results: "200% increase in organic traffic and 50% lower customer acquisition costs."
  },
  {
    id: 3,
    title: "Corporate Vitality Hub",
    category: "Wellness",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1e4dbade-f95d-45c4-a17f-bc68e4d07a88/case-study-wellness-1-24508d4f-1773216632133.webp",
    desc: "A holistic wellness integration for a multinational insurance firm.",
    results: "Significant improvement in employee satisfaction and reduced sick days by 20%."
  }
]

const CaseStudies = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-4">Case Studies</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Delivering Tangible Results
            </h3>
          </div>
          <p className="text-lg text-slate-600 max-w-sm mb-2">
            Explore how our integrated approach solves complex business challenges across Kenya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-80 overflow-hidden rounded-3xl mb-8" onClick={() => setSelectedImage(project.image)}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white text-slate-900 px-6 py-3 rounded-full font-bold">View Gallery</span>
                </div>
                <div className="absolute top-6 right-6">
                  <span className="bg-orange-600 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
                    {project.category}
                  </span>
                </div>
              </div>
              <Link to={`/case-studies/${project.id}`}>
                <h4 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-orange-600 transition-colors">
                  {project.title}
                </h4>
              </Link>
              <p className="text-slate-600 mb-6 leading-relaxed">{project.desc}</p>
              <div className="pt-6 border-t border-slate-100">
                <p className="text-sm font-bold text-slate-900 uppercase mb-2">Results:</p>
                <p className="text-orange-600 font-medium italic">{project.results}</p>
              </div>
              <Link to={`/case-studies/${project.id}`} className="mt-6 inline-flex items-center text-slate-900 font-bold group-hover:translate-x-2 transition-transform">
                Read Full Story <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Viewer */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-slate-900/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-8 right-8 text-white hover:text-orange-500">
            <X size={40} />
          </button>
          <motion.img 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            src={selectedImage} 
            className="max-w-full max-h-[80vh] rounded-2xl shadow-2xl"
          />
        </div>
      )}
    </section>
  )
}

export default CaseStudies