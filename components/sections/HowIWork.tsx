import { Card, CardContent } from "@/components/ui/card";

export default function HowIWork({ t }: { t: any }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
         <div className="mx-auto max-w-2xl text-center">
         <h2 className="text-2xl font-semibold tracking-tight">{t.how.title}
          </h2>
        </div>
   

      <div className="mt-8 grid gap-5 md:grid-cols-4">
        {t.how.steps.map((step: string, idx: number) => (
          <Card key={step} className="rounded-2xl">
            <CardContent className="p-6">
              <div className="text-xs text-muted-foreground">Step {idx + 1}</div>
              <div className="mt-2 text-sm font-semibold">{step}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <p className="mt-6 text-sm text-muted-foreground italic">{t.how.note}</p>
    </section>
  );
}
