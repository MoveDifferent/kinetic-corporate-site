import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { useScrollPosition } from "@/hooks/use-scroll-position"
import { Button } from "@/components/ui/button"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const scrollPosition = useScrollPosition()
  const location = useLocation()
  const isTransparent = location.pathname === "/" && scrollPosition < 50

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isTransparent
          ? "bg-transparent py-6"
          : "bg-white/90 backdrop-blur-md py-4 shadow-sm"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span
              className={cn(
                "text-2xl font-bold tracking-tighter",
                isTransparent ? "text-white" : "text-slate-900"
              )}
            >
              MOVE<span className="text-orange-500">DIFFERENT</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-orange-500",
                  isTransparent ? "text-white/90" : "text-slate-600",
                  location.pathname === link.href && "text-orange-500 font-semibold"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button
              className={cn(
                "rounded-full px-6",
                isTransparent
                  ? "bg-white text-slate-900 hover:bg-slate-100"
                  : "bg-orange-600 text-white hover:bg-orange-700"
              )}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={cn(isTransparent ? "text-white" : "text-slate-900")} />
            ) : (
              <Menu className={cn(isTransparent ? "text-white" : "text-slate-900")} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-4 shadow-lg flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-slate-600 font-medium py-2 px-4 hover:bg-slate-50 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button className="w-full bg-orange-600 text-white" onClick={() => setIsOpen(false)}>
            Get Started
          </Button>
        </div>
      )}
    </nav>
  )
}

export default Navbar