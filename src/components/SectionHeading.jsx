export default function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p
        className={`mb-3 text-xs font-extrabold uppercase tracking-[.2em] ${light ? "text-orange" : "text-orange"}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`text-3xl font-black leading-tight tracking-[-.04em] sm:text-4xl ${light ? "text-white" : "text-ink"}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 max-w-xl text-sm leading-6 ${light ? "text-white/65" : "text-slate-600"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
