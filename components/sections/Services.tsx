import { Card, CardContent } from "@/components/ui/card";

export default function Services({ t }: { t: any }) {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
          {t.services.title}
        </h2>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {t.services.items.map((s: any) => (
          <Card key={s.title} className="rounded-2xl border-neutral-200 transition-colors hover:border-neutral-300">
            <CardContent className="p-7 sm:p-8">
              <div className="text-lg font-semibold text-neutral-900">{s.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">{s.desc}</p>

              <ul className="mt-5 space-y-2.5 text-sm">
                {s.bullets.map((b: string) => (
                  <li key={b} className="flex items-start gap-2.5 text-neutral-600">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
