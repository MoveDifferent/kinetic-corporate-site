import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import { cn } from '../lib/utils';

interface BeforeAfterProps {
  before: string;
  after: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterProps> = ({ before, after }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isResizing, setIsResizing] = useState(false);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isResizing) return;
    const container = e.currentTarget.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const position = ((x - container.left) / container.width) * 100;
    setSliderPos(Math.max(0, Math.min(100, position)));
  };

  return (
    <div 
      className="relative w-full aspect-video rounded-2xl overflow-hidden cursor-ew-resize select-none"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
      onMouseDown={() => setIsResizing(true)}
      onMouseUp={() => setIsResizing(false)}
      onMouseLeave={() => setIsResizing(false)}
      onTouchStart={() => setIsResizing(true)}
      onTouchEnd={() => setIsResizing(false)}
    >
      <img src={after} alt="After" className="absolute inset-0 w-full h-full object-cover" />
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden" 
        style={{ width: `${sliderPos}%` }}
      >
        <img src={before} alt="Before" className="absolute inset-0 w-full h-full object-cover max-w-none" style={{ width: '100vw' }} />
      </div>
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white shadow-xl flex items-center justify-center"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="w-10 h-10 bg-white rounded-full shadow-2xl flex items-center justify-center -ml-0.5">
          <ChevronLeft size={16} className="text-slate-400" />
          <ChevronRight size={16} className="text-slate-400" />
        </div>
      </div>
      <div className="absolute bottom-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-md text-white text-xs font-bold rounded-lg">BEFORE</div>
      <div className="absolute bottom-4 right-4 px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-lg">AFTER</div>
    </div>
  );
};

const CaseStudies: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'East Africa Logistics Hub',
      category: 'Logistics',
      image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1e4dbade-f95d-45c4-a17f-bc68e4d07a88/service-logistics-2541e754-1773216296343.webp',
      beforeImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200',
      afterImage: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1e4dbade-f95d-45c4-a17f-bc68e4d07a88/case-study-1-cb62eabc-1773216303831.webp',
      description: 'Streamlining cross-border trade for major retail partners.',
      details: {
        objective: 'Reduce customs delay by 40% and improve route optimization.',
        solution: 'Implemented AI-driven route planning and digital customs pre-clearance.',
        results: 'Achieved 52% reduction in transit time and 20% cost savings.'
      }
    }
  ];

  const currentProject = projects.find(p => p.id === selectedProject);

  return (
    <div className="pt-24 pb-20">
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            badge="Success Stories"
            title="Real Impact, Real Results"
            description="Explore how we have helped businesses overcome complex challenges."
            center
          />

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                onClick={() => setSelectedProject(project.id)}
                className="group cursor-pointer bg-white rounded-[2rem] overflow-hidden shadow-xl border border-slate-50"
              >
                <div className="relative h-64 overflow-hidden">
                   <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-slate-600 mb-6">{project.description}</p>
                  <button className="flex items-center gap-2 text-blue-600 font-bold">
                    View Case Study <ArrowRight size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && currentProject && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm"
            />
            <motion.div className="relative w-full max-w-5xl bg-white rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-10 w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center"
              >
                <X size={20} />
              </button>
              <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto">
                <h2 className="text-3xl font-extrabold mb-8">{currentProject.title}</h2>
                <div className="space-y-6 text-slate-700">
                  <p><strong>Objective:</strong> {currentProject.details.objective}</p>
                  <p><strong>Solution:</strong> {currentProject.details.solution}</p>
                  <p className="text-blue-600 font-bold"><strong>Result:</strong> {currentProject.details.results}</p>
                </div>
              </div>
              <div className="md:w-1/2 p-8 bg-slate-50">
                 <BeforeAfterSlider before={currentProject.beforeImage} after={currentProject.afterImage} />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CaseStudies;