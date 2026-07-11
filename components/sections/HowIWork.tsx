import { Card, CardContent } from "@/components/ui/card";

export default function HowIWork({ t }: { t: any }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">{t.how.title}</h2>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {t.how.steps.map((step: string, idx: number) => (
          <Card key={step} className="rounded-2xl border-neutral-200">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-blue-100">0{idx + 1}</div>
              <div className="mt-3 text-sm font-semibold leading-snug text-neutral-900">{step}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <p className="mt-8 text-center text-sm italic text-neutral-500">{t.how.note}</p>
    </section>
  );
}
