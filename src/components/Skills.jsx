import { Braces, Database, Cloud, FlaskConical, PanelsTopLeft } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { skills } from '../data/portfolio'

const icons = [PanelsTopLeft, Braces, Database, Cloud, FlaskConical]
export default function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Technical toolkit"
            title={
              <>
                Tools I use to turn ideas into{" "}
                <span className="text-moss">working software.</span>
              </>
            }
            />
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {skills.map((skill, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={skill.title} delay={i * 0.06}>
                <article className="h-full rounded-2xl border border-ink/5 bg-white/80 p-5 transition duration-300 hover:-translate-y-1 hover:border-moss/30 hover:shadow-soft">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#edf1e7] text-forest">
                    <Icon size={21} />
                  </span>
                  <h3 className="mt-5 text-sm font-extrabold text-ink">
                    {skill.title}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-ink/5 bg-cream px-2.5 py-1.5 text-[11px] font-medium text-slate-600"
                      >
                        {item}
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
