import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Blog from './components/Blog'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black font-geist-mono">
      <Navbar />
      <main className="pt-14">
        <Hero />
        <section id="about" className="bg-black text-green-300 py-16 border-t border-green-500/10">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-green-400">About</h2>
              <p className="mt-4 text-green-300/80">I'm a full‑stack developer based in Berlin. I design, build, and scale web platforms with a focus on developer experience, performance, and maintainability. Comfortable across React, Node, Python, FastAPI, and cloud infra.</p>
            </div>
            <ul className="grid grid-cols-2 gap-3 text-sm">
              {['React','TypeScript','FastAPI','MongoDB','PostgreSQL','Docker','AWS','CI/CD'].map((t)=> (
                <li key={t} className="px-3 py-2 rounded border border-green-500/20 bg-black/60">{t}</li>
              ))}
            </ul>
          </div>
        </section>
        <Projects />
        <Blog />
        <section id="contact" className="bg-black text-green-300 py-16 border-t border-green-500/10">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-green-400">Contact</h2>
            <p className="mt-3 text-green-300/80">Open to freelance and full‑time roles. Let's build something great.</p>
            <a href="mailto:hello@berlinfs.dev" className="inline-block mt-6 px-5 py-2 rounded bg-green-500/20 hover:bg-green-500/30 text-green-300 border border-green-500/30 transition-colors">hello@berlinfs.dev</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
