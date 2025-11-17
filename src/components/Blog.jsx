import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function Blog(){
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try{
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/posts`)
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
    <section id="blog" className="bg-black text-green-300 py-20 border-t border-green-500/10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-green-400">Blog</h2>
        <p className="text-green-300/70 mt-2">Thoughts on full‑stack engineering, DX, and systems.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {loading && Array.from({length:6}).map((_,i)=> (
            <div key={i} className="h-32 rounded border border-green-500/10 bg-gradient-to-br from-green-500/5 to-transparent animate-pulse" />
          ))}
          {!loading && items.length === 0 && (
            <div className="col-span-full text-green-300/80">No posts yet. Add some via the API.</div>
          )}
          {!loading && items.map((p)=> (
            <article key={p.id} className="rounded-lg border border-green-500/20 bg-gradient-to-b from-green-500/5 to-black/40 p-5 group">
              <h3 className="text-xl font-semibold text-green-300 group-hover:text-green-200">{p.title}</h3>
              <p className="text-sm text-green-300/70 mt-2">{p.excerpt}</p>
              <div className="flex items-center gap-2 mt-3 text-green-400 hover:text-green-300">
                <span className="text-sm">Read more</span>
                <ArrowRight size={16}/>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
