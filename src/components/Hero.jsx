import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full bg-black text-green-400 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90 pointer-events-none" />

      <div className="relative z-10 h-full container mx-auto px-6 flex flex-col justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-green-400"
        >
          Full‑Stack Developer in Berlin
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-4 max-w-2xl text-green-300/80"
        >
          I craft performant web apps end‑to‑end — from elegant UIs to robust APIs & databases. Available for freelance and collaborations.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-8 flex gap-4"
        >
          <a href="#projects" className="px-5 py-2 rounded bg-green-500/20 hover:bg-green-500/30 text-green-300 border border-green-500/30 transition-colors">View Projects</a>
          <a href="#contact" className="px-5 py-2 rounded bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors">Contact</a>
        </motion.div>
      </div>
    </section>
  );
}
