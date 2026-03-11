import React, { useState } from "react"
import { motion } from "framer-motion"
import { Search, Calendar, User, ArrowRight, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"

const blogPosts = [
  { id: 1, title: "Navigating 2024 Logistics", category: "Logistics", date: "May 12, 2024", excerpt: "Trends in Kenya's logistics sector.", image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1e4dbade-f95d-45c4-a17f-bc68e4d07a88/logistics-service-6766abae-1773216628752.webp" },
  { id: 2, title: "AI-Driven Marketing", category: "Marketing", date: "April 28, 2024", excerpt: "Future of brand growth.", image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1e4dbade-f95d-45c4-a17f-bc68e4d07a88/digital-marketing-service-65dafdf8-1773216634402.webp" },
  { id: 3, title: "Corporate Wellness ROI", category: "Wellness", date: "April 15, 2024", excerpt: "Healthy team, healthy business.", image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1e4dbade-f95d-45c4-a17f-bc68e4d07a88/health-wellness-service-4952ae52-1773216623701.webp" }
]

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "Logistics", "Marketing", "Wellness"]
  const filteredPosts = blogPosts.filter(post => 
    (selectedCategory === "All" || post.category.includes(selectedCategory)) &&
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-orange-600 font-bold uppercase text-sm mb-4">Insights</h2>
          <h3 className="text-4xl font-extrabold text-slate-900">Stay Ahead</h3>
        </div>
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          <div className="flex gap-2">
            {categories.map(cat => (
              <button key={cat} onClick={() => setSelectedCategory(cat)} className={cn("px-4 py-2 rounded-full text-sm", selectedCategory === cat ? "bg-orange-600 text-white" : "bg-white text-slate-600")}>{cat}</button>
            ))}
          </div>
          <Input placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="md:w-64" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-3xl overflow-hidden shadow-sm">
              <Link to={`/blog/${post.id}`}><img src={post.image} className="w-full h-48 object-cover" /></Link>
              <div className="p-6">
                <Link to={`/blog/${post.id}`}><h4 className="text-xl font-bold mb-4">{post.title}</h4></Link>
                <p className="text-slate-600 text-sm mb-6">{post.excerpt}</p>
                <Link to={`/blog/${post.id}`} className="text-orange-600 font-bold flex items-center">Read More <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog