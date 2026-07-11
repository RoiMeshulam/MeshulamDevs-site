import type { Locale } from "@/lib/content";

export default function Trust({ t, locale }: { t: any; locale: Locale }) {
    const isHe = locale === "he";

    return (
        <section className="mx-auto max-w-6xl px-6 pb-20 sm:pb-28">
            <div className="mx-auto grid max-w-5xl grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-4">
                {t.trust.map((item: string) => (
                    <div
                        key={item}
                        className="flex items-center gap-3 text-sm text-neutral-600"
                    >
                        {/* icon */}
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-blue-50 text-xs font-semibold text-blue-600">
                            &#10003;
                        </span>

                        <span className={isHe ? "text-right" : "text-left"}>{item}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
