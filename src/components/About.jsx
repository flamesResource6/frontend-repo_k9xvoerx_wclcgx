import { motion } from 'framer-motion'

export default function About() {
  const items = [
    {
      title: 'About Me',
      desc:
        "I’m a problem‑solver who loves turning ideas into polished digital products. My sweet spot is blending clean engineering with delightful UI details.",
    },
    {
      title: 'What I Do',
      desc:
        'I build full‑stack web apps, design component systems, and optimize performance. I enjoy working across the stack with modern tooling.',
    },
    {
      title: 'Currently',
      desc:
        'Exploring 3D interactions with Spline and pushing playful motion design in production apps.',
    },
  ]

  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_10%_10%,rgba(56,189,248,0.08),transparent_40%),radial-gradient(600px_circle_at_90%_20%,rgba(59,130,246,0.08),transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white"
        >
          A little bit about me
        </motion.h2>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 text-slate-200"
            >
              <h3 className="text-xl font-semibold text-white">{card.title}</h3>
              <p className="mt-2 text-slate-300/90">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
