import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Parallax effect simulation */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat parallax"
        style={{ 
          backgroundImage: `url('https://storage.googleapis.com/dala-prod-public-storage/generated-images/1e4dbade-f95d-45c4-a17f-bc68e4d07a88/hero-bg-dea1eaac-1773216986823.webp')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-blue-400 uppercase bg-blue-400/10 border border-blue-400/20 rounded-full">
            Moving Kenya Forward
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-8">
            Revolutionizing the Way You <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Move Different</span>.
          </h1>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
            A multi-sector corporate leader in Logistics, Digital Marketing, and Health & Wellness. We bridge gaps with innovation and drive excellence across Kenya.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Link
              to="/services"
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-xl shadow-blue-500/20"
            >
              Explore Services
              <ArrowRight size={20} />
            </Link>
            <button className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm rounded-lg font-bold flex items-center justify-center gap-2 border border-white/10 transition-all">
              <PlayCircle size={20} />
              Watch Showcase
            </button>
          </div>
        </motion.div>
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-12 bg-gradient-to-b from-blue-500/50 to-transparent" />
        <span className="text-slate-500 text-xs uppercase tracking-widest">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;