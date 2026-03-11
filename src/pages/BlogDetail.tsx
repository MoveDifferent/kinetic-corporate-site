import React from "react"
import { useParams, Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

const blogPosts = [
  { id: 1, title: "Navigating 2024 Logistics", category: "Logistics", image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1e4dbade-f95d-45c4-a17f-bc68e4d07a88/logistics-service-6766abae-1773216628752.webp", content: "Details about logistics." },
  { id: 2, title: "AI-Driven Marketing", category: "Marketing", image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1e4dbade-f95d-45c4-a17f-bc68e4d07a88/digital-marketing-service-65dafdf8-1773216634402.webp", content: "Details about marketing." },
  { id: 3, title: "Corporate Wellness ROI", category: "Wellness", image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1e4dbade-f95d-45c4-a17f-bc68e4d07a88/health-wellness-service-4952ae52-1773216623701.webp", content: "Details about wellness." }
]

const BlogDetail = () => {
  const { id } = useParams()
  const post = blogPosts.find(p => p.id === Number(id))
  if (!post) return <div className="pt-40 text-center">Not found</div>

  return (
    <main className="pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link to="/blog" className="flex items-center text-orange-600 mb-8"><ArrowLeft size={16} className="mr-2"/> Back</Link>
        <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
        <img src={post.image} className="w-full h-[400px] object-cover rounded-3xl mb-8" />
        <p className="text-lg leading-relaxed">{post.content}</p>
      </div>
    </main>
  )
}

export default BlogDetail