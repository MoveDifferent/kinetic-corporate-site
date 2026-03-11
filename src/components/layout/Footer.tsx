import React from "react"
import { Link } from "react-router-dom"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold tracking-tighter text-white">
                MOVE<span className="text-orange-500">DIFFERENT</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Empowering African businesses through world-class logistics, 
              innovative digital marketing, and holistic wellness solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-orange-500 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-orange-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-orange-500 transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Our Services</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services" className="hover:text-orange-500 transition-colors">Logistics & Supply Chain</Link></li>
              <li><Link to="/services" className="hover:text-orange-500 transition-colors">Digital Marketing & SEO</Link></li>
              <li><Link to="/services" className="hover:text-orange-500 transition-colors">Health & Wellness</Link></li>
              <li><Link to="/services" className="hover:text-orange-500 transition-colors">Corporate Strategy</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-orange-500 transition-colors">About Us</Link></li>
              <li><Link to="/case-studies" className="hover:text-orange-500 transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-orange-500 transition-colors">Latest News</Link></li>
              <li><Link to="/contact" className="hover:text-orange-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Get in Touch</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-orange-500 shrink-0" />
                <span>Valley View Office Park, City Park Dr, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-orange-500 shrink-0" />
                <span>+254 700 000 000</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-orange-500 shrink-0" />
                <span>hello@movedifferent.co.ke</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs">
          <p>© 2024 Move Different Kenya. All rights reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer