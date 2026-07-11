import { Button } from "@/components/ui/button";
import type { Locale } from "@/lib/content";

export default function Hero({ t, locale }: { t: any; locale: Locale }) {
    const isHe = locale === "he";

    return (
        <section className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28 min-h-[80vh] flex items-center">
            {/* Subtle background accent - no stock gradient blobs */}
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-blue-50 blur-3xl" />
            </div>

            <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                {/* Availability badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-sm font-medium text-neutral-600 shadow-sm">
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                    </span>
                    Open to select freelance projects
                </div>

                <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
                    {t.hero.title}
                </h1>

                <p className="mt-5 text-lg font-medium text-blue-600 sm:text-xl">
                    {t.hero.subtitle}
                </p>

                <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-500 sm:text-lg">
                    {t.hero.desc}
                </p>

                <div className="mt-10 flex flex-wrap justify-center gap-3">
                    <Button size="lg" className="rounded-lg bg-neutral-900 px-6 text-white hover:bg-blue-600" asChild>
                        <a href="#contact">{t.hero.ctaPrimary}</a>
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-lg border-neutral-300 px-6 text-neutral-900 hover:bg-neutral-50" asChild>
                        <a href="#projects">{t.hero.ctaSecondary}</a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
