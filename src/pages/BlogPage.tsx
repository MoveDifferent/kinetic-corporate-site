import React from "react"
import Blog from "@/components/sections/Blog"

const BlogPage = () => {
  return (
    <main className="pt-20">
      <div className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Knowledge & Insights</h1>
          <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
            Stay updated with the latest trends and best practices in logistics, 
            digital marketing, and corporate wellness across East Africa.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-600/20 skew-x-[-15deg] translate-x-1/2 z-0" />
      </div>
      <Blog />
    </main>
  )
}

export default BlogPage