import type { Locale } from "@/lib/content";

export default function Trust({ t, locale }: { t: any; locale: Locale }) {
    const isHe = locale === "he";

    return (
        <section className="mx-auto max-w-6xl px-6">

            <div className="mx-auto grid max-w-5xl grid-cols-4 gap-x-10 gap-y-6">
                {t.trust.map((item: string) => (
                    <div
                        key={item}
                        className="flex items-center gap-3 text-sm text-muted-foreground"
                    >
                        {/* icon */}
                        <span className="flex h-5 w-5 items-center justify-center rounded-md bg-[#3348FF]/10 text-[#3348FF] text-xs font-semibold">
                            ✓
                        </span>


                        <span className={isHe ? "text-right" : "text-left"}>{item}</span>
                    </div>
                ))}
            </div>

        </section>
    );
}
