export default function Footer(){
  return (
    <footer className="bg-black text-green-300 border-t border-green-500/10 py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-green-300/70">© {new Date().getFullYear()} Berlin Full‑Stack. Built with love and coffee.</p>
        <div className="text-xs text-green-300/60">Dark Matrix theme • Black & Neon Green</div>
      </div>
    </footer>
  )}
