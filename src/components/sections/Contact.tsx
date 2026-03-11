import React from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success("Message sent!")
  }

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-4">Contact Us</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
              Let's Start a Conversation
            </h3>
            <p className="text-lg text-slate-600 mb-12 max-w-lg leading-relaxed">
              Have a question about our services or want to discuss a project? 
              Our team of experts is ready to help you move different.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-4 rounded-2xl text-orange-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Our Office</h4>
                  <p className="text-slate-600">Valley View Office Park, Nairobi, Kenya</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-4 rounded-2xl text-orange-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Call Us</h4>
                  <p className="text-slate-600">+254 700 000 000</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100 shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-900 uppercase">First Name</label>
                  <Input placeholder="John" required className="bg-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-900 uppercase">Last Name</label>
                  <Input placeholder="Doe" required className="bg-white" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-900 uppercase">Email Address</label>
                <Input type="email" placeholder="john@example.com" required className="bg-white" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-900 uppercase">Message</label>
                <Textarea placeholder="How can we help your business?" rows={5} required className="bg-white" />
              </div>
              <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white h-14 rounded-full font-bold text-lg">
                Send Message
                <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact