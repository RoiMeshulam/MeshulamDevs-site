import { Card, CardContent } from "@/components/ui/card";

export default function Services({ t }: { t: any }) {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {t.services.title}
          </h2>
        </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {t.services.items.map((s: any) => (
          <Card key={s.title} className="rounded-2xl">
            <CardContent className="p-6">
              <div className="text-lg font-semibold">{s.title}</div>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>

              <ul className="mt-4 space-y-2 text-sm">
                {s.bullets.map((b: string) => (
                  <li key={b} className="text-muted-foreground">
                    • {b}
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
