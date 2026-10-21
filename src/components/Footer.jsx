import { ArrowUp } from 'lucide-react'
export default function Footer() {
  return (
    <footer className="border-t border-ink/10">
      <div className="container-shell flex flex-col items-center justify-between gap-4 py-6 text-xs text-slate-500 sm:flex-row">
        <p>
          © {new Date().getFullYear()} Mani Shankar. Built with React & Tailwind
          CSS.
        </p>
        <a
          href="#home"
          className="inline-flex items-center gap-2 font-bold text-forest hover:text-orange"
        >
          Back to top <ArrowUp size={14} />
        </a>
      </div>
    </footer>
  );
}
