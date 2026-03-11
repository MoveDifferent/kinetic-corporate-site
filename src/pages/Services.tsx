import React from 'react';
import { motion } from 'framer-motion';
import { Truck, BarChart3, HeartPulse, CheckCircle2, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import { cn } from '../lib/utils';

const Services: React.FC = () => {
  const serviceList = [
    {
      id: 'logistics',
      title: 'Global Logistics',
      image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1e4dbade-f95d-45c4-a17f-bc68e4d07a88/service-logistics-2541e754-1773216296343.webp',
      icon: <Truck size={32} />,
      benefits: ['Real-time tracking', 'Customs expertise']
    },
    {
      id: 'digital',
      title: 'Digital Marketing',
      image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1e4dbade-f95d-45c4-a17f-bc68e4d07a88/service-digital-marketing-1417a89e-1773216307439.webp',
      icon: <BarChart3 size={32} />,
      benefits: ['Performance SEO', 'Content Production']
    }
  ];

  return (
    <div className="pt-24">
      {serviceList.map((service, idx) => (
        <section key={service.id} className="container mx-auto px-4 py-24">
          <div className={cn('flex flex-col lg:flex-row items-center gap-20', idx % 2 !== 0 && 'lg:flex-row-reverse')}>
            <div className="lg:w-1/2">
              <img src={service.image} className="rounded-[3rem] shadow-2xl" />
            </div>
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-4xl font-black">{service.title}</h2>
              <div className="space-y-4">
                {service.benefits.map((b, i) => <div key={i} className="flex gap-4 font-bold"><CheckCircle2 className="text-blue-600" /> {b}</div>)}
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Services;