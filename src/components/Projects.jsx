import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Realtime Collab Board',
    desc: 'A multiplayer whiteboard with cursors, presence, and emoji reactions built with websockets.',
    tags: ['React', 'FastAPI', 'WebSockets'],
    link: '#'
  },
  {
    title: 'AI Writing Assistant',
    desc: 'Draft, edit, and publish with an AI‑assisted editor and prompt blocks.',
    tags: ['Next.js', 'OpenAI', 'Tailwind'],
    link: '#'
  },
  {
    title: '3D Product Customizer',
    desc: 'Interactive Spline + React viewer to personalize products in the browser.',
    tags: ['React', 'Spline', 'ThreeJS'],
    link: '#'
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(700px_circle_at_0%_60%,rgba(56,189,248,0.08),transparent_40%),radial-gradient(700px_circle_at_100%_40%,rgba(59,130,246,0.08),transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white"
        >
          Selected projects
        </motion.h2>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group p-6 rounded-2xl border border-white/10 bg-white/5 text-slate-200 hover:bg-white/[0.08] transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-white">{p.title}</h3>
                <ExternalLink className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="mt-2 text-slate-300/90">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-full bg-white/10 border border-white/10 text-xs">
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
