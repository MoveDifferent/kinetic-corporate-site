import React from "react"
import { motion } from "framer-motion"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

const Team = () => {
  const members = [
    {
      name: "Samson Maina",
      title: "CEO",
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1e4dbade-f95d-45c4-a17f-bc68e4d07a88/team-1-e8085b0d-1773216634144.webp",
    },
    {
      name: "Faith Njeri",
      title: "Digital Strategy",
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1e4dbade-f95d-45c4-a17f-bc68e4d07a88/team-2-d0557dff-1773216628592.webp",
    },
    {
      name: "David Ochieng",
      title: "Logistics Director",
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1e4dbade-f95d-45c4-a17f-bc68e4d07a88/team-3-273faf75-1773216623360.webp",
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20">
          <h2 className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-4">Our Team</h2>
          <h3 className="text-4xl font-extrabold text-slate-900 mb-6">The Visionaries</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {members.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="text-center"
            >
              <div className="relative overflow-hidden rounded-3xl mb-6 h-[400px]">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-1">{member.name}</h4>
              <p className="text-orange-600 font-medium text-xs">{member.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team