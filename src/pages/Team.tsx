import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';

const Team: React.FC = () => {
  const team = [
    { name: 'John Kamau', role: 'CEO', image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1e4dbade-f95d-45c4-a17f-bc68e4d07a88/team-1-b1e79860-1773216301654.webp' },
    { name: 'Sarah Mwangi', role: 'COO', image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1e4dbade-f95d-45c4-a17f-bc68e4d07a88/team-2-73548036-1773216301694.webp' }
  ];

  return (
    <div className="pt-24 pb-20">
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <SectionHeading badge="Leadership" title="The Team" center />
          <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {team.map((m, i) => (
              <div key={i} className="group">
                <img src={m.image} className="rounded-[3rem] mb-6 grayscale group-hover:grayscale-0 transition-all" />
                <h3 className="text-2xl font-black">{m.name}</h3>
                <p className="text-blue-600 font-bold">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;