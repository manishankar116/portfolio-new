import { ArrowDownRight, ArrowUpRight, BriefcaseBusiness, Code2, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import ProfilePortfolio2 from '../asserts/ProfilePortfolio.png';
import { use } from 'react';

const tech = ['Java', 'Spring Boot', 'React', 'AWS', 'Docker', 'PostgreSQL']

export default function Landing() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -right-24 top-12 h-80 w-80 rounded-full bg-moss/10 blur-3xl" />
      <div className="container-shell grid min-h-[650px] items-center gap-12 py-16 lg:grid-cols-[1.08fr_.92fr] lg:py-20">
        <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .7 }} className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-moss/25 bg-white/70 px-3 py-2 text-xs font-semibold text-forest">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" /> Open to software engineering opportunities
          </div>
          <p className="mb-3 text-sm font-semibold text-orange">HELLO, I'M</p>
          <h1 className="max-w-2xl text-5xl font-black leading-[1.04] tracking-[-.055em] text-ink sm:text-6xl xl:text-7xl">Mani <span className="text-moss">Shankar</span><span className="text-orange">.</span></h1>
          <p className="mt-5 text-xl font-semibold tracking-tight text-ink/75 sm:text-2xl">Software Engineer <span className="text-ink/30">/</span> Java & Full Stack</p>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">I'm a Java Backend Engineer with 2+ years of experience building reliable applications using Java, Spring Boot, REST APIs, and SQL. I focus on developing maintainable backend services, implementing features, and solving real-world engineering problems.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="button-primary">Explore my work <ArrowUpRight size={16} /></a>
            <a href="#contact" className="button-secondary">Contact me <ArrowDownRight size={16} /></a>
          </div>
          <div className="mt-9 flex items-center gap-3">
            <a className="social-link" href="https://www.linkedin.com/" aria-label="LinkedIn"><BriefcaseBusiness size={17} /></a>
            <a className="social-link" href="https://github.com/" aria-label="GitHub"><Code2 size={17} /></a>
            <a className="social-link" href="mailto:mani.shankar@example.com" aria-label="Email"><Mail size={17} /></a>
            <span className="ml-2 h-6 w-px bg-ink/15" />
            <span className="text-xs text-slate-500">Chennai, India · Open to relocation</span>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: .96, y: 18 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: .8, delay: .12 }} className="relative mx-auto w-full max-w-[490px]">
          <div className="absolute inset-x-8 bottom-0 top-8 rounded-[48%_48%_24px_24px] bg-[#e8e8dc]" />
          <div className="absolute -left-3 top-20 h-24 w-24 rounded-full border border-orange/30" />
          <div className="absolute -right-3 top-28 h-12 w-12 rounded-2xl bg-orange/15" />
          <img className="relative z-10 mx-auto h-[390px] w-full -translate-y-24 object-cover object-top [mask-image:linear-gradient(to_bottom,black_82%,transparent_100%)] sm:h-[460px]" src={ProfilePortfolio2} alt="Professional portrait placeholder — replace with your own photo" />
          <div className="absolute bottom-5 left-2 right-2 z-20 flex items-center gap-3 rounded-2xl border border-white/70 bg-white/90 p-4 shadow-soft backdrop-blur sm:-left-7 sm:right-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#e7f0ed] text-forest"><BriefcaseBusiness size={20} /></span>
            <div className="min-w-0 flex-1"><p className="text-xs text-slate-500">Currently working as a</p><p className="mt-1 truncate text-sm font-bold text-ink">Java Backend Engineer</p></div>
            <a href="https://www.linkedin.com/in/mani-shankar-vasa-a71198186/" target="_blank" rel="noopener noreferrer">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-cream text-forest"><ArrowUpRight size={17} /></span>
            </a>
          </div>
          <div className="absolute right-0 top-4 z-20 hidden -rotate-6 rounded-xl border border-ink/5 bg-white/85 px-4 py-3 text-xs font-semibold leading-5 text-forest shadow-soft sm:block">Build thoughtfully.<br />Solve what matters.</div>
        </motion.div>
      </div>
      <div className="border-y border-ink/5 bg-white/55"><div className="container-shell flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-5 sm:justify-between"><span className="text-xs font-bold uppercase tracking-[.16em] text-slate-500">Technologies I work with</span>{tech.map((item) => <span key={item} className="text-sm font-bold tracking-tight text-ink/75">{item}</span>)}</div></div>
    </section>
  )
}
