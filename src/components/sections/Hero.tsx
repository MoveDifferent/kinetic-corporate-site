import React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center">
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/1e4dbade-f95d-45c4-a17f-bc68e4d07a88/hero-bg-698874c6-1773216623545.webp" 
          alt="Nairobi Skyline" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60" />
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-white uppercase bg-orange-600 rounded-full">
              Redefining Kenyan Business
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Empowering Your Business to <span className="text-orange-500">Move Different</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed">
              Integrated logistics, digital marketing, and wellness solutions for the modern Kenyan enterprise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white rounded-full">
                Explore Our Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 rounded-full">
                Watch Our Story
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero