import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleNavigate = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setOpen(false)
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-slate-900/60 border border-white/10 rounded-2xl shadow-xl">
          <div className="flex items-center justify-between px-5 py-3">
            <a href="#home" onClick={(e)=>handleNavigate(e,'#home')} className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 shadow-[0_0_25px_rgba(59,130,246,0.5)]" />
              <span className="text-white font-semibold tracking-tight">Muaz Ahmed</span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e)=>handleNavigate(e,item.href)}
                  className="text-sm text-slate-300 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-white/10 text-slate-200 hover:bg-white/5"
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <AnimatePresence>
            {open && (
              <motion.nav
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden px-4 pb-4"
              >
                <div className="grid gap-2">
                  {navItems.map((item, i) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={(e)=>handleNavigate(e,item.href)}
                      initial={{ y: -8, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.02 * i }}
                      className="px-3 py-2 rounded-lg bg-white/5 text-slate-200 hover:text-white border border-white/10"
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}
