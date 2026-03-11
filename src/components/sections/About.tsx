import React from "react"
import { motion } from "framer-motion"
import { CheckCircle2, Target, Eye, Heart, LucideProps } from "lucide-react"

type ValueItem = {
  icon: React.FC<LucideProps>;
  title: string;
  desc: string;
}

const About = () => {
  const values: ValueItem[] = [
    { icon: Target, title: "Mission", desc: "To empower African businesses by providing innovative solutions." },
    { icon: Eye, title: "Vision", desc: "To be the leading strategic partner for enterprises in Kenya." },
    { icon: Heart, title: "Values", desc: "Integrity, innovation, and client-centricity are at our heart." }
  ]

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-4">Our Story</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
                Redefining the Professional Landscape
              </h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Founded in Nairobi with a vision to break the mold of traditional corporate services.
              </p>
              <div className="space-y-4">
                {["Industry-leading expertise", "Tailored solutions", "Holistic approach"].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle2 className="text-orange-600 w-6 h-6 shrink-0" />
                    <span className="font-semibold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img 
                  src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/1e4dbade-f95d-45c4-a17f-bc68e4d07a88/logistics-service-6766abae-1773216628752.webp" 
                  alt="Move Different Workspace" 
                  className="rounded-2xl shadow-xl w-full h-64 object-cover"
                />
              </div>
              <div className="space-y-4">
                 <img 
                  src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/1e4dbade-f95d-45c4-a17f-bc68e4d07a88/digital-marketing-service-65dafdf8-1773216634402.webp" 
                  alt="Move Different Team" 
                  className="rounded-2xl shadow-xl w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          {values.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="p-8 bg-slate-50 rounded-2xl border border-slate-100"
            >
              <div className="bg-orange-100 p-4 rounded-xl w-fit mb-6">
                <val.icon className="text-orange-600" size={32} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{val.title}</h4>
              <p className="text-slate-600 leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About