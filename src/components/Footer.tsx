import { business } from "@/lib/business";
import { content } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-bg text-ink/85 font-mono text-[11px] uppercase tracking-[0.18em]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 py-12 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-4">
          <div className="display text-3xl uppercase tracking-[0.16em] text-ink">
            {business.name}
            <span className="text-accent">.</span>
          </div>
          <p className="mt-3 normal-case tracking-normal font-sans text-ink-muted text-sm max-w-[36ch]">
            {business.tagline}
          </p>
        </div>
        <div className="col-span-6 md:col-span-2">
          <div className="text-ink-faint mb-3">Index</div>
          <ul className="space-y-2">
            {content.nav.links.map((l) => (
              <li key={l.href}>
                <a className="hover:text-accent" href={l.href}>
                  {l.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-6 md:col-span-2">
          <div className="text-ink-faint mb-3">Social</div>
          <ul className="space-y-2">
            {business.socials.map((s) => (
              <li key={s.href}>
                <a className="hover:text-accent" href={s.href}>
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-12 md:col-span-4">
          <div className="text-ink-faint mb-3">Studio</div>
          <div className="normal-case tracking-normal font-sans text-ink text-base">
            <a className="hover:text-accent" href={`mailto:${business.email}`}>
              {business.email}
            </a>
            <div className="text-ink-muted text-sm mt-1">{business.phone}</div>
            <div className="text-ink-muted text-sm mt-3">{business.address}</div>
          </div>
        </div>
      </div>
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 py-6 border-t border-ink/15 flex flex-wrap items-baseline justify-between gap-3">
        <span className="normal-case tracking-normal font-sans text-ink-muted">
          {content.footer.copyright}
        </span>
        <div className="flex items-center gap-6 text-ink-muted">
          {content.footer.links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-accent">
              {l.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
