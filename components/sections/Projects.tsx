import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Locale } from "@/lib/content";

export default function Projects({ t, locale }: { t: any; locale: Locale }) {
  const isHe = locale === "he";
  const p = t.projects;

  return (
    <section id="projects" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        {/* Title centered */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {p.title}
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">{p.subtitle}</p>
        </div>

        {/* Featured */}
        <Card className="mt-10 rounded-2xl shadow-sm">
          <CardContent className="p-7 sm:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-3xl">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="text-lg font-semibold tracking-tight">
                    {p.featured.name}
                  </div>

                  {/* accent tag (not primary, your blue) */}
                  <span className="rounded-full border bg-[#3348FF]/10 px-3 py-1 text-xs font-medium text-[#3348FF]">
                    {p.featured.tag}
                  </span>
                </div>

                <p className="mt-3 text-sm text-muted-foreground">
                  {p.featured.oneLiner}
                </p>

                <ul
                  className={`mt-5 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2 ${
                    isHe ? "text-right" : "text-left"
                  }`}
                >
                  {p.featured.bullets.map((b: string) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#3348FF]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex shrink-0 items-center gap-3">
                <Button className="rounded-xl" asChild>
                  <a href="#contact">{p.featured.cta}</a>
                </Button>
                <Button variant="outline" className="rounded-xl" asChild>
                  <a href="#contact">{isHe ? "בואו נדבר" : "Let’s talk"}</a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Other projects */}
        <div className="mt-12">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-sm font-semibold text-muted-foreground">
              {p.othersTitle}
            </div>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {p.others.map((o: any) => (
              <Card
                key={o.name}
                className="group rounded-2xl shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <CardContent className="p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-base font-semibold tracking-tight">
                        {o.name}
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {o.oneLiner}
                      </p>
                    </div>

                    <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#3348FF] opacity-80" />
                  </div>

                  <ul
                    className={`mt-5 space-y-2 text-sm text-muted-foreground ${
                      isHe ? "text-right" : "text-left"
                    }`}
                  >
                    {o.bullets.map((b: string) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/50" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
