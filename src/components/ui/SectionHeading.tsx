import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  badge?: string
  title: string
  subtitle?: string
  description?: string
  light?: boolean
  center?: boolean
  className?: string
}

const SectionHeading = ({
  badge,
  title,
  subtitle,
  description,
  light = false,
  center = false,
  className,
}: SectionHeadingProps) => {
  const displaySubtitle = subtitle || description

  return (
    <div
      className={cn(
        "flex flex-col space-y-4 mb-12",
        center && "items-center text-center mx-auto max-w-3xl",
        className
      )}
    >
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={cn(
            "px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase inline-block",
            light ? "bg-white/10 text-white" : "bg-orange-100 text-orange-600"
          )}
        >
          {badge}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={cn(
          "text-3xl md:text-5xl font-extrabold leading-tight",
          light ? "text-white" : "text-slate-900"
        )}
      >
        {title}
      </motion.h2>
      {displaySubtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={cn(
            "text-lg leading-relaxed max-w-2xl",
            light ? "text-slate-300" : "text-slate-600"
          )}
        >
          {displaySubtitle}
        </motion.p>
      )}
    </div>
  )
}

export default SectionHeading