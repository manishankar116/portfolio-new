import {
  ArrowUpRight,
  Mail,
  MapPin,
  BriefcaseBusiness,
  Code2,
} from "lucide-react";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="section-pad">
      <div className="container-shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] bg-forest px-6 py-10 text-white sm:px-10 sm:py-14 lg:px-14">
            <div className="pointer-events-none absolute -right-10 -top-24 h-72 w-72 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -right-2 -top-16 h-56 w-56 rounded-full border border-white/10" />
            <div className="relative grid gap-10 lg:grid-cols-[1fr_.75fr] lg:items-end">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#f5a17f]">
                  Get in touch
                </p>
                <h2 className="mt-4 max-w-xl text-3xl font-black tracking-[-.04em] sm:text-5xl">
                  Let's build something{" "}
                  <span className="text-[#c8d5b6]">useful.</span>
                </h2>
                <p className="mt-5 max-w-lg text-sm leading-7 text-white/70">
                  I'm open to conversations about software engineering roles,
                  backend development and teams solving interesting problems.
                  The best way to reach me is by email or LinkedIn.
                </p>
                <a
                  href="mailto:manishankar0911@gmail.com"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-forest transition hover:bg-[#e9eee3]"
                >
                  Start a conversation <ArrowUpRight size={16} />
                </a>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <a
                  href="mailto:manishankar0911@gmail.com"
                  className="contact-card"
                >
                  <Mail size={19} />
                  <span>
                    <b>Email</b>
                    <small>manisankar0911@gmail.com</small>
                  </span>
                  <ArrowUpRight className="ml-auto" size={15} />
                </a>
                <a
                  href="https://www.linkedin.com/in/mani-shankar-vasa-a71198186"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-card"
                >
                  <BriefcaseBusiness size={19} />
                  <span>
                    <b>LinkedIn</b>
                    <small>Connect professionally</small>
                  </span>
                  <ArrowUpRight className="ml-auto" size={15} />
                </a>
                <a
                  href="https://github.com/manishankar116"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-card"
                >
                  <Code2 size={19} />
                  <span>
                    <b>GitHub</b>
                    <small>Explore my code</small>
                  </span>
                  <ArrowUpRight className="ml-auto" size={15} />
                </a>
                <div className="contact-card">
                  <MapPin size={19} />
                  <span>
                    <b>Location</b>
                    <small>Chennai, India · Relocation open</small>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
