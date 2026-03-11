import React from "react"
import { useParams, Link } from "react-router-dom"
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  { id: 1, title: "Eco-Logistics", category: "Logistics", image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1e4dbade-f95d-45c4-a17f-bc68e4d07a88/case-study-logistics-1-573671bf-1773216623505.webp", objective: "To reduce costs.", solution: "Route optimization.", results: ["30% Carbon Reduction", "15% Lower Fuel"] },
  { id: 2, title: "Digital Growth", category: "Marketing", image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1e4dbade-f95d-45c4-a17f-bc68e4d07a88/case-study-marketing-1-105bec1c-1773216631144.webp", objective: "Exponential user growth.", solution: "Multi-channel digital strategy.", results: ["200% Organic Growth", "50% Lower CAC"] },
  { id: 3, title: "Corporate Vitality Hub", category: "Wellness", image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1e4dbade-f95d-45c4-a17f-bc68e4d07a88/case-study-wellness-1-24508d4f-1773216632133.webp", objective: "Improve morale.", solution: "On-site wellness.", results: ["20% Less Sick Days", "40% Higher Morale"] }
]

const CaseStudyDetail = () => {
  const { id } = useParams()
  const project = projects.find(p => p.id === Number(id))

  if (!project) return <div className="pt-40 text-center">Project not found</div>

  return (
    <main className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <Link to="/case-studies" className="inline-flex items-center text-orange-600 font-bold mb-12">
          <ArrowLeft className="mr-2 w-4 h-4" /> Back to All Projects
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <span className="bg-orange-600/10 text-orange-600 px-4 py-2 rounded-full text-xs font-bold uppercase mb-6 inline-block">
              Case Study: {project.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-8">
              {project.title}
            </h1>
            <h4 className="text-lg font-bold text-slate-900 uppercase mb-4">The Objective</h4>
            <p className="text-slate-600 text-lg mb-8">{project.objective}</p>
            <h4 className="text-lg font-bold text-slate-900 uppercase mb-4">The Solution</h4>
            <p className="text-slate-600 text-lg mb-8">{project.solution}</p>
          </div>
          <div>
             <img src={project.image} className="w-full h-full object-cover rounded-3xl shadow-xl" />
          </div>
        </div>
        <div className="bg-slate-50 p-12 rounded-3xl border border-slate-100">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.results.map((res, i) => (
                <div key={i} className="flex items-center gap-4">
                  <CheckCircle2 className="text-orange-600" />
                  <p className="text-xl font-bold">{res}</p>
                </div>
              ))}
           </div>
        </div>
      </div>
    </main>
  )
}

export default CaseStudyDetail