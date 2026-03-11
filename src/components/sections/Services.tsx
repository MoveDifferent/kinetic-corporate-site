import React from "react"
import { motion } from "framer-motion"
import { Truck, Smartphone, HeartPulse, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const Services = () => {
  const services = [
    {
      title: "Logistics & Supply Chain",
      sector: "Logistics",
      icon: <Truck className="w-10 h-10 text-orange-600" />,
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1e4dbade-f95d-45c4-a17f-bc68e4d07a88/logistics-service-6766abae-1773216628752.webp",
      desc: "Optimizing your movement across East Africa with precision tracking and warehousing.",
      benefits: ["Real-time Tracking", "Climate Storage", "Cross-border"],
    },
    {
      title: "Digital Marketing & Brand",
      sector: "Digital Marketing",
      icon: <Smartphone className="w-10 h-10 text-orange-600" />,
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1e4dbade-f95d-45c4-a17f-bc68e4d07a88/digital-marketing-service-65dafdf8-1773216634402.webp",
      desc: "AI-driven analytics and SEO to position your brand at the forefront.",
      benefits: ["Content Marketing", "Paid Ads", "Growth Strategy"],
    },
    {
      title: "Corporate Health & Wellness",
      sector: "Health & Wellness",
      icon: <HeartPulse className="w-10 h-10 text-orange-600" />,
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1e4dbade-f95d-45c4-a17f-bc68e4d07a88/health-wellness-service-4952ae52-1773216623701.webp",
      desc: "Creating healthier workplace cultures through customized wellness programs.",
      benefits: ["Wellness Audits", "Fitness Programs", "Mental Health"],
    },
  ]

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-4">Our Services</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
            Comprehensive Solutions
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className={cn(
                "flex flex-col lg:flex-row items-center gap-12 p-8 md:p-12 bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden",
                idx % 2 !== 0 && "lg:flex-row-reverse"
              )}
            >
              <div className="w-full lg:w-1/2 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="bg-orange-100 p-4 rounded-2xl">{service.icon}</div>
                  <span className="text-orange-600 font-bold uppercase tracking-widest text-xs">{service.sector}</span>
                </div>
                <h4 className="text-3xl font-bold text-slate-900">{service.title}</h4>
                <p className="text-slate-600 text-lg">{service.desc}</p>
                <div className="grid grid-cols-2 gap-4">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-700">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                      <span className="text-sm font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
                <Button className="bg-slate-900 text-white hover:bg-slate-800 px-8 rounded-full">Learn More</Button>
              </div>
              <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-[350px] object-cover" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services