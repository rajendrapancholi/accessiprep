import Link from 'next/link';
import {
  Briefcase,
  GraduationCap,
  MessageCircle,
  Mic,
  Sparkles,
  Type,
} from 'lucide-react';

const steps = [
  {
    icon: Mic,
    title: 'Listen',
    text: 'Your phone or laptop mic picks up the conversation and turns it into live captions with speaker names.',
  },
  {
    icon: Sparkles,
    title: 'Simplify',
    text: 'Tap any line and AI rewrites it in short, plain sentences. Hard words and idioms get a one-line meaning.',
  },
  {
    icon: MessageCircle,
    title: 'Reply',
    text: 'AI suggests replies you can tap, type or show on screen, so you are never left out of the answer.',
  },
];

const scenarios = [
  {
    icon: Briefcase,
    title: 'Job interviews',
    text: 'Practise with an AI interviewer, then get captions and reply ideas in the real interview.',
  },
  {
    icon: GraduationCap,
    title: 'Classroom',
    text: 'Lecture captions with key terms highlighted, and a summary you can revise from after class.',
  },
  {
    icon: MessageCircle,
    title: 'Daily life',
    text: 'Bank, clinic, shop counter. Show the other person a big-text screen and talk by typing.',
  },
];

const accessibility = [
  'Text size, line spacing and caption speed you control',
  'High-contrast light and dark themes',
  'Full keyboard use and screen-reader labels',
  'Never relies on sound, colour alone, or vibration alone',
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Follow every conversation, in words that make sense to you.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            AccessIprep captions speech as it happens, explains hard sentences
            in simple language, and helps you reply. Built for deaf and
            hard-of-hearing students and job seekers.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/live"
              className="inline-flex h-12 items-center rounded-md bg-primary px-6 text-base font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Start live captions
            </Link>
            <Link
              href="/interview"
              className="inline-flex h-12 items-center rounded-md border border-border px-6 text-base font-medium transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Try interview practice
            </Link>
          </div>
        </div>

        {/* Live caption preview: the product itself is the hero */}
        <figure
          aria-label="Example of live captions during a job interview"
          className="rounded-xl border border-border bg-card text-card-foreground shadow-sm"
        >
          <figcaption className="flex items-center justify-between border-b border-border px-5 py-3 text-sm">
            <span className="font-medium">Interview practice</span>
            <span className="flex items-center gap-2 text-muted-foreground">
              <span
                className="size-2 rounded-full bg-destructive motion-safe:animate-pulse"
                aria-hidden="true"
              />
              Listening
            </span>
          </figcaption>

          <div className="space-y-5 p-5 text-lg leading-relaxed">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Interviewer
              </p>
              <p>
                Tell me about a project you are proud of, and what you learned
                from it.
              </p>
              <p className="mt-2 rounded-md border-l-4 border-ring bg-secondary px-3 py-2 text-base">
                <span className="font-medium">Simple version: </span>
                Describe one project you are proud of. What did you learn?
              </p>
            </div>

            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Interviewer
              </p>
              <p>How do you usually handle tight deadlines?</p>
            </div>

            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Reply ideas
              </p>
              <ul className="mt-2 flex flex-wrap gap-2 text-base">
                <li className="rounded-full border border-border bg-background px-4 py-2">
                  I break work into small steps.
                </li>
                <li className="rounded-full border border-border bg-background px-4 py-2">
                  I plan early and ask for help if needed.
                </li>
              </ul>
            </div>
          </div>
        </figure>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        aria-labelledby="how-heading"
        className="border-y border-border bg-secondary/40"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2
            id="how-heading"
            className="text-3xl font-semibold tracking-tight"
          >
            How it works
          </h2>
          <ol className="mt-10 grid gap-10 md:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title} className="flex gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary-foreground dark:bg-primary/15 dark:text-primary border border-primary/30">
                  <s.icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold">
                    <span className="sr-only">Step {i + 1}: </span>
                    {s.title}
                  </h3>
                  <p className="mt-1 leading-relaxed text-muted-foreground">
                    {s.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Scenarios */}
      <section
        id="scenarios"
        aria-labelledby="scenarios-heading"
        className="mx-auto max-w-6xl px-4 py-16 sm:px-6"
      >
        <h2
          id="scenarios-heading"
          className="text-3xl font-semibold tracking-tight"
        >
          Made for the places where it gets hard
        </h2>
        <ul className="mt-10 divide-y divide-border border-y border-border">
          {scenarios.map((s) => (
            <li
              key={s.title}
              className="flex flex-col gap-2 py-6 sm:flex-row sm:items-start sm:gap-8"
            >
              <div className="flex items-center gap-3 sm:w-56 sm:shrink-0">
                <s.icon className="size-5 text-ring" aria-hidden="true" />
                <h3 className="text-lg font-semibold">{s.title}</h3>
              </div>
              <p className="max-w-2xl leading-relaxed text-muted-foreground">
                {s.text}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Accessibility */}
      <section
        id="accessibility"
        aria-labelledby="a11y-heading"
        className="border-t border-border bg-secondary/40"
      >
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2">
          <div>
            <h2
              id="a11y-heading"
              className="text-3xl font-semibold tracking-tight"
            >
              You set the pace
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
              Reading speed and language level differ from person to person.
              AccessIprep adjusts to you, not the other way round.
            </p>
          </div>
          <ul className="space-y-4">
            {accessibility.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Type
                  className="mt-1 size-5 shrink-0 text-ring"
                  aria-hidden="true"
                />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
