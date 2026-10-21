import { Code2, Cloud, HeartHandshake, Layers3 } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const strengths = [
  { icon: Code2, title: 'Backend development', text: 'Building REST APIs and service logic with Java, Spring Boot and clean, maintainable code.' },
  { icon: Layers3, title: 'Full-stack delivery', text: 'Connecting backend services to responsive interfaces with React and JavaScript.' },
  { icon: Cloud, title: 'Cloud & delivery', text: 'Working with Docker, AWS and CI/CD practices to support reliable deployments.' },
  { icon: HeartHandshake, title: 'Product mindset', text: 'Collaborating with teammates to understand issues and ship practical improvements.' },
]

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container-shell grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <SectionHeading
            eyebrow="A little about me"
            title={
              <>
                Building software with{" "}
                <span className="text-moss">purpose.</span>
              </>
            }
          />
          <p className="text-sm leading-7 text-slate-600">
            I'm a Software Engineer at Cognizant, contributing to enterprise application development through feature enhancements, bug fixes, validation, and database operations. I collaborate with teammates in Git-based Agile workflows to deliver reliable, maintainable software.          </p>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            Outside my day-to-day work, I build personal projects to explore system design, microservices, caching, and full-stack development. I'm also interested in improving how applications are tested, deployed, and scaled using cloud technologies and modern DevOps practices.          </p>
          <div className="mt-8 grid grid-cols-3 gap-3">
            {[
              ["2+", "Years experience"],
              ["30+", "APIs in projects"],
              ["3", "Featured projects"],
            ].map(([n, l]) => (
              <div
                key={l}
                className="rounded-2xl border border-ink/5 bg-white/70 p-4"
              >
                <p className="text-2xl font-black tracking-tight text-forest">
                  {n}
                </p>
                <p className="mt-1 text-[11px] leading-4 text-slate-500">{l}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <div className="grid gap-3 sm:grid-cols-2">
          {strengths.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.07}>
              <article className="h-full rounded-2xl border border-ink/5 bg-white/75 p-6 shadow-[0_8px_30px_rgba(20,42,37,.025)] transition duration-300 hover:-translate-y-1 hover:shadow-soft">
                <span className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-[#edf1e7] text-forest">
                  <Icon size={21} />
                </span>
                <h3 className="text-sm font-extrabold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
