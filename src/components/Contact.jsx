import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_10%_80%,rgba(56,189,248,0.08),transparent_40%),radial-gradient(600px_circle_at_90%_80%,rgba(59,130,246,0.08),transparent_40%)]" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white"
        >
          Let’s build something great
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-slate-300"
        >
          I’m open to freelance work, collaborations, and full‑time opportunities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 inline-flex items-center gap-4 p-2 rounded-2xl bg-white/5 border border-white/10"
        >
          <a
            href="mailto:muaz@example.com"
            className="px-5 py-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white font-medium shadow-[0_8px_30px_rgba(56,189,248,0.35)]"
          >
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 rounded-xl bg-white/10 text-white border border-white/20 hover:bg-white/15 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 rounded-xl bg-white/10 text-white border border-white/20 hover:bg-white/15 transition-colors"
          >
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
