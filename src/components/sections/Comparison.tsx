import React from "react"
import { Check, X } from "lucide-react"

const Comparison = () => {
  const features = [
    { name: "Strategic Consulting", basic: true, premium: true, enterprise: true },
    { name: "Fleet Management", basic: true, premium: true, enterprise: true },
    { name: "Warehouse Storage", basic: "Limited", premium: "Included", enterprise: "Unlimited" },
    { name: "Digital SEO Audit", basic: false, premium: true, enterprise: true },
    { name: "Paid Ad Management", basic: false, premium: true, enterprise: true },
    { name: "Employee Wellness", basic: false, premium: false, enterprise: "Dedicated Hub" },
    { name: "AI Analytics Platform", basic: false, premium: false, enterprise: true },
    { name: "24/7 Priority Support", basic: false, premium: false, enterprise: true },
  ]

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20">
          <h2 className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-4">Transparency</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
            Compare Our Service Tiers
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse bg-white rounded-3xl overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-slate-900 text-white">
                <th className="p-8 text-xl font-bold">Features</th>
                <th className="p-8 text-xl font-bold text-center">Standard</th>
                <th className="p-8 text-xl font-bold text-center">Business Plus</th>
                <th className="p-8 text-xl font-bold text-center text-orange-500">Global Enterprise</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {features.map((feature, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="p-8 font-medium text-slate-700">{feature.name}</td>
                  <td className="p-8 text-center">
                    {typeof feature.basic === "boolean" ? (
                      feature.basic ? <Check className="mx-auto text-green-500" /> : <X className="mx-auto text-slate-300" />
                    ) : (
                      <span className="text-sm font-semibold text-slate-600">{feature.basic}</span>
                    )}
                  </td>
                  <td className="p-8 text-center">
                    {typeof feature.premium === "boolean" ? (
                      feature.premium ? <Check className="mx-auto text-green-500" /> : <X className="mx-auto text-slate-300" />
                    ) : (
                      <span className="text-sm font-semibold text-slate-600">{feature.premium}</span>
                    )}
                  </td>
                  <td className="p-8 text-center bg-orange-50/30">
                    {typeof feature.enterprise === "boolean" ? (
                      feature.enterprise ? <Check className="mx-auto text-orange-600" /> : <X className="mx-auto text-slate-300" />
                    ) : (
                      <span className="text-sm font-bold text-orange-600">{feature.enterprise}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default Comparison