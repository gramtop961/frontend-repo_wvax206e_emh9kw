import { useEffect, useState } from 'react'
import { ExternalLink, Github } from 'lucide-react'

export default function Projects(){
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try{
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/projects`)
        const data = await res.json()
        setItems(data.items || [])
      }catch(e){
        setItems([])
      }finally{
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="projects" className="bg-black text-green-300 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-green-400">Projects</h2>
        <p className="text-green-300/70 mt-2">Selected work across web apps, APIs, and developer tooling.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {loading && Array.from({length:6}).map((_,i)=> (
            <div key={i} className="h-40 rounded border border-green-500/10 bg-gradient-to-br from-green-500/5 to-transparent animate-pulse" />
          ))}
          {!loading && items.length === 0 && (
            <div className="col-span-full text-green-300/80">No projects yet. Add some via the API.</div>
          )}
          {!loading && items.map((p) => (
            <article key={p.id} className="rounded-lg border border-green-500/20 bg-gradient-to-b from-green-500/5 to-black/40 p-5 group">
              <h3 className="text-xl font-semibold text-green-300 group-hover:text-green-200">{p.title}</h3>
              <p className="text-sm text-green-300/70 mt-2">{p.summary}</p>
              {p.tags?.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {p.tags.map((t,idx)=> (
                    <span key={idx} className="text-xs px-2 py-0.5 rounded bg-black/60 border border-green-500/20">{t}</span>
                  ))}
                </div>
              )}
              <div className="flex items-center gap-3 mt-4">
                {p.repo_url && <a className="text-green-400 hover:text-green-300 inline-flex items-center gap-1" href={p.repo_url} target="_blank" rel="noreferrer"><Github size={16}/>Code</a>}
                {p.demo_url && <a className="text-green-400 hover:text-green-300 inline-flex items-center gap-1" href={p.demo_url} target="_blank" rel="noreferrer"><ExternalLink size={16}/>Live</a>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
