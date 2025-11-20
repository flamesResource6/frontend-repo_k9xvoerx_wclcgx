import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 relative">
      {/* subtle starfield dots */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.06),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.06),transparent_40%)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-center text-slate-400">
          © {new Date().getFullYear()} Muaz Ahmed. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
