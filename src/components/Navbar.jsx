import { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import Sign from '../asserts/Sign.png';
import resumeUrl from '../asserts/Mani_Sankar_Vasa_CV.pdf'

const links = [['About', '#about'], ['Experience', '#experience'], ['Skills', '#skills'], ['Projects', '#projects'], ['Contact', '#contact']]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/5 bg-cream/90 backdrop-blur-xl">
      <nav className="container-shell flex h-[76px] items-center justify-between">
        <a href="#home" className="flex items-center gap-3" aria-label="Mani Shankar home">
          {/*<span className="grid h-10 w-10 place-items-center rounded-xl bg-forest text-sm font-black tracking-tight text-white">MS</span>*/}
          <img className=" h-44 w-44 rounded-xl object-cover" src={Sign} alt="Mani Shankar logo" />
{/*         <span className="hidden text-sm font-bold tracking-tight text-ink sm:block">Mani Shankar<span className="text-orange">.</span></span>
*/}        </a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => <a key={label} className="nav-link" href={href}>{label}</a>)}
        </div>
        <a href={resumeUrl} download="Mani_Sankar_Vasa_CV.pdf" className="hidden items-center gap-2 rounded-full bg-forest px-5 py-3 text-xs font-bold text-white transition hover:bg-ink sm:inline-flex">
          Download resume <ArrowUpRight size={14} />
        </a>
        <button className="rounded-xl border border-ink/10 p-2 text-ink md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>
      {open && <div className="container-shell grid gap-1 pb-4 md:hidden">{links.map(([label, href]) => <a key={label} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-sm font-medium hover:bg-white" href={href}>{label}</a>)}<a className="mt-2 rounded-lg bg-forest px-3 py-3 text-sm font-semibold text-white" href={resumeUrl} download="Mani_Sankar_Vasa_CV.pdf">Download resume</a></div>}
    </header>
  )
}
