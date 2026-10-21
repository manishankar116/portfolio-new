import { ArrowUpRight, BriefcaseBusiness } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { experience } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="section-pad bg-white/45">
      <div className="container-shell">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Career timeline"
              title="Experience that ships."
            />
            <a
              href="/Mani-Shankar-Resume.pdf"
              className="button-secondary mb-10"
            >
              Full resume <ArrowUpRight size={15} />
            </a>
          </div>
        </Reveal>
        <div className="relative ml-3 space-y-5 border-l border-moss/35 pl-7 sm:ml-6 sm:pl-10">
          {experience.map((job, i) => (
            <Reveal key={job.period} delay={i * 0.1}>
              <article className="relative grid gap-5 rounded-2xl border border-ink/5 bg-cream p-5 sm:p-7 lg:grid-cols-[.7fr_1.3fr]">
                <span className="absolute -left-[34px] top-7 h-3 w-3 rounded-full border-[3px] border-cream bg-orange ring-4 ring-orange/10 sm:-left-[47px]" />
                <div>
                  <p className="text-xs font-bold text-moss">{job.period}</p>
                  <h3 className="mt-2 text-lg font-black text-ink">
                    {job.role}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-slate-600">
                    {job.company}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-medium text-slate-500">
                    <BriefcaseBusiness size={14} /> {job.project}
                  </div>
                </div>
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    {job.current && (
                      <span className="rounded-full bg-[#e8efe4] px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wide text-forest">
                        Current role
                      </span>
                    )}
                  </div>
                  <ul className="space-y-2">
                    {job.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm leading-6 text-slate-600"
                      >
                        <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
