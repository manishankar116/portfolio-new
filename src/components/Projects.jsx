import { ArrowUpRight, ExternalLink, Layers3, Link2, Server, ShoppingCart } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { projects } from '../data/portfolio'

const icons = [Link2, Server, ShoppingCart]
export default function Projects() {
  return (
    <section id="projects" className="section-pad bg-[#f0f1e9]">
      <div className="container-shell">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Selected projects"
              title="Proof beyond the job title."
              description="Personal projects that demonstrate hands-on implementation, architecture choices and the ability to take an idea from API design to deployment."
            />
            <a
              href="https://github.com/manishankar116"
              target="_blank"
              rel="noreferrer"
              className="button-secondary mb-10"
            >
              More on GitHub <ArrowUpRight size={15} />
            </a>
          </div>
        </Reveal>
        <div className="grid gap-4 lg:grid-cols-3">
          {projects.map((project, i) => {
            const Icon = icons[i] || Layers3;
            return (
              <Reveal key={project.title} delay={i * 0.08}>
                <article className="group flex h-full flex-col rounded-2xl border border-ink/5 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-soft sm:p-7">
                  <div className="flex items-start justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#f9e9df] text-orange">
                      <Icon size={22} />
                    </span>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-ink/10 p-2 text-slate-500 transition hover:bg-forest hover:text-white"
                      aria-label={`Open ${project.title}`}
                    >
                      <ExternalLink size={15} />
                    </a>
                  </div>
                  <p className="mt-6 text-[10px] font-extrabold uppercase tracking-[.16em] text-moss">
                    {project.type}
                  </p>
                  <h3 className="mt-2 text-xl font-black tracking-tight text-ink">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {project.description}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {project.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex gap-2 text-xs leading-5 text-slate-500"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex flex-wrap gap-2 pt-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#f7eee8] px-2.5 py-1.5 text-[10px] font-bold text-[#a94d2c]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
