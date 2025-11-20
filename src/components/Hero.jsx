import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-28 overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/40 to-slate-950" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[60vh]">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white"
            >
              Hi, I’m Muaz Ahmed
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="mt-4 text-lg sm:text-xl text-slate-300 max-w-xl"
            >
              A modern full‑stack developer crafting interactive, performant experiences with a playful, tech‑forward feel.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a href="#projects" className="px-5 py-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white font-medium shadow-[0_8px_30px_rgba(56,189,248,0.35)] hover:shadow-[0_8px_45px_rgba(56,189,248,0.45)] transition-shadow">
                View Projects
              </a>
              <a href="#contact" className="px-5 py-3 rounded-xl bg-white/10 text-white border border-white/20 hover:bg-white/15 transition-colors">
                Contact Me
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-10 flex flex-wrap items-center gap-3 text-slate-300"
            >
              <span className="text-xs uppercase tracking-widest text-slate-400">Tech</span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-sm">React</span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-sm">FastAPI</span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-sm">MongoDB</span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-sm">Spline</span>
            </motion.div>
          </div>

          {/* Spacer column for composition on large screens */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  )
}
