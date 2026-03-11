import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Timeline from '../components/sections/Timeline';
import { cn } from '../lib/utils';

const About: React.FC = () => {
  return (
    <div className="pt-24">
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-black tracking-tight"
            >
              Driving Impact <br /><span className="text-blue-600">Since 2008.</span>
            </motion.h1>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium">
              Move Different Kenya is more than a company; it's a commitment to elevating the standard of business across East Africa.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Our Mission',
                desc: 'To deliver high-impact, integrated business solutions that simplify complexity.',
                color: 'bg-blue-600'
              },
              {
                title: 'Our Vision',
                desc: 'To be the leading innovator in multi-sector corporate services by 2030.',
                color: 'bg-slate-900'
              },
              {
                title: 'Our Values',
                desc: 'Excellence, unwavering integrity, constant innovation, and a people-first culture.',
                color: 'bg-indigo-600'
              }
            ].map((item, i) => (
              <div
                key={i}
                className="p-12 rounded-[3rem] bg-white shadow-2xl border border-slate-100 flex flex-col items-center text-center"
              >
                <div className={cn('w-20 h-20 rounded-[2rem] flex items-center justify-center text-white mb-10', item.color)}>
                  <Target size={32} />
                </div>
                <h3 className="text-3xl font-black mb-6">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-slate-950 text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            badge="The Legacy"
            title="Our Journey"
            light
            center
          />
          <div className="mt-24">
            <Timeline />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;