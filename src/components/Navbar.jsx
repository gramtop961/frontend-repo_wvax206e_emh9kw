import { Menu, Github, Mail } from 'lucide-react'

export default function Navbar(){
  return (
    <header className="fixed top-0 left-0 right-0 z-20 bg-black/70 backdrop-blur border-b border-green-500/10">
      <div className="container mx-auto px-6 h-14 flex items-center justify-between text-green-300">
        <a href="#" className="font-geist-mono tracking-wider text-green-400">BERLIN.FS</a>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#projects" className="hover:text-green-400">Projects</a>
          <a href="#blog" className="hover:text-green-400">Blog</a>
          <a href="#about" className="hover:text-green-400">About</a>
          <a href="#contact" className="hover:text-green-400 flex items-center gap-2"><Mail size={16}/>Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="https://github.com" target="_blank" className="hover:text-green-400"><Github size={18}/></a>
          <button className="md:hidden"><Menu/></button>
        </div>
      </div>
    </header>
  )
}
