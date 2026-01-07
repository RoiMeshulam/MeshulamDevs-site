import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { Locale } from "@/lib/content";

export default function Hero({ t, locale }: { t: any; locale: Locale }) {
    const isHe = locale === "he";

    return (
        <section className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20 min-h-[80vh] flex items-center">
            {/* Decorative background blobs */}
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute -left-24 top-24 h-80 w-80 rounded-full bg-gradient-to-br from-sky-200 to-fuchsia-200 blur-3xl opacity-60" />
                <div className="absolute -right-24 top-40 h-80 w-80 rounded-full bg-gradient-to-br from-amber-200 to-rose-200 blur-3xl opacity-55" />
            </div>

            <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                {/* Logo */}
                <Image
                    src="/logo.png"
                    alt="MeshulamDev logo"
                    width={360}
                    height={120}
                    priority
                    className="h-auto w-[300px] sm:w-[360px]"
                />

                <h1 className="mt-8 text-4xl font-semibold tracking-tight sm:text-5xl">
                    {t.hero.title}
                </h1>

                <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
                    {t.hero.subtitle}
                </p>

                <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
                    {t.hero.desc}
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-3">
                    <Button size="lg" className="rounded-xl" asChild>
                        <a href="#contact">{t.hero.ctaPrimary}</a>
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-xl" asChild>
                        <a href="#projects">{t.hero.ctaSecondary}</a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
