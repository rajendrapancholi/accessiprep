import Link from 'next/link';
import IprepLogo from './IprepLogo';

const columns = [
  {
    title: 'Product',
    links: [
      { href: '/live', label: 'Live captions' },
      { href: '/interview', label: 'Interview practice' },
      { href: '/classroom', label: 'Classroom notes' },
    ],
  },
  {
    title: 'Learn more',
    links: [
      { href: '/#how-it-works', label: 'How it works' },
      { href: '/#scenarios', label: 'Scenarios' },
      { href: '/#accessibility', label: 'Accessibility' },
    ],
  },
];

// Cached so the year is computed once at prerender, not on every request.
async function CurrentYear() {
  'use cache';
  return <>{new Date().getFullYear()}</>;
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.5fr_1fr_1fr]">
        <div className="max-w-sm">
          <Link
            href="/"
            aria-label="AccessIprepAI, home"
            className="flex items-center rounded-lg p-1 transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {/* Light theme: dark text */}
            <IprepLogo
              aria-hidden="true"
              darkText
              className="block h-9 w-auto dark:hidden"
            />
            {/* Dark theme: white text */}
            <IprepLogo
              aria-hidden="true"
              darkText={false}
              className="hidden h-9 w-auto dark:block"
            />
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            AI that turns speech into clear, simple text, so deaf and
            hard-of-hearing people can follow class, interviews and everyday
            conversations on their own terms.
          </p>
        </div>

        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h2 className="text-sm font-semibold">{col.title}</h2>
            <ul className="mt-4 space-y-3">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="rounded-sm text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            &copy; <CurrentYear /> AccessIprep. Built for Accessible AI for
            Everyone.
          </p>
          <p>Captions are AI-generated and may contain mistakes.</p>
        </div>
      </div>
    </footer>
  );
}
