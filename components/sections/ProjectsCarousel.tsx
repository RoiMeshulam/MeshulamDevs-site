"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Locale } from "@/lib/content";

type Project = {
    name: string;
    tag?: string;
    oneLiner: string;
    bullets: string[];
    tech: string[];
    image: string;
    links?: {
        github?: string;
        live?: string;
    };
};

export default function ProjectsCarousel({
    t,
    locale,
}: {
    t: any;
    locale: Locale;
}) {
    const isHe = locale === "he";

    const projects: Project[] = useMemo(() => t.projects.items ?? [], [t]);
    const [index, setIndex] = useState(0);

    const total = projects.length;
    if (!total) return null;

    const project = projects[index];

    const goPrev = () => setIndex((i) => (i - 1 + total) % total);
    const goNext = () => setIndex((i) => (i + 1) % total);

    return (
        <section id="projects" className="border-t border-neutral-200 bg-neutral-50">
            <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
                {/* Header */}
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
                        {t.projects.title}
                    </h2>
                    <p className="mt-3 text-sm text-neutral-500">{t.projects.subtitle}</p>
                </div>

                {/* Carousel */}
                <div className="mt-12">
                    <Card className="overflow-hidden rounded-2xl border-neutral-200 shadow-sm">
                        <CardContent className="p-0">
                            <div className="grid lg:grid-cols-2">
                                {/* Image */}
                                <div
                                    className="
                                     relative w-full overflow-hidden bg-white
                                     h-[280px] sm:h-[360px]
                                    lg:h-[480px]
                                    "
                                >

                                    <Image
                                        src={project.image}
                                        alt={project.name}
                                        fill
                                        className="object-contain"
                                        priority={index === 0}
                                    />

                                </div>

                                {/* Content */}
                                <div className={isHe ? "text-right" : "text-left"}>
                                    <div className="flex h-full flex-col justify-between p-7 sm:p-10">
                                        {/* Top */}
                                        <div>
                                            <div className="flex flex-wrap items-center justify-between gap-3">
                                                <div>
                                                    <h3 className="text-xl font-bold tracking-tight text-neutral-900">{project.name}</h3>

                                                    {project.tag && (
                                                        <span className="mt-2 inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                                                            {project.tag}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            <p className="mt-4 text-sm leading-relaxed text-neutral-500">{project.oneLiner}</p>

                                            {/* Tech */}
                                            <div className="mt-4 flex flex-wrap gap-2">
                                                {project.tech.map((tech) => (
                                                    <Badge key={tech} variant="secondary" className="rounded-full font-normal">
                                                        {tech}
                                                    </Badge>
                                                ))}
                                            </div>

                                            {/* Bullets */}
                                            <ul className="mt-6 space-y-2.5 text-sm text-neutral-600">
                                                {project.bullets.map((b) => (
                                                    <li key={b} className="flex gap-2.5">
                                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                                                        <span>{b}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* CTA */}
                                        <div className="mt-8 flex flex-wrap gap-3">
                                            {project.links?.github && (
                                                <Button className="rounded-lg bg-neutral-900 text-white hover:bg-blue-600" asChild>
                                                    <a href={project.links.github} target="_blank" rel="noreferrer">
                                                        GitHub
                                                    </a>
                                                </Button>
                                            )}

                                            {project.links?.live && (
                                                <Button variant="outline" className="rounded-lg border-neutral-300" asChild>
                                                    <a href={project.links.live} target="_blank" rel="noreferrer">
                                                        Live
                                                    </a>
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Controls (Centered under the card) */}
                    <div className="mt-8 flex items-center justify-center gap-6">
                        <Button
                            variant="outline"
                            size="icon"
                            className="rounded-lg border-neutral-300"
                            onClick={goPrev}
                            aria-label="Previous project"
                        >
                            {isHe ? "›" : "‹"}
                        </Button>

                        {/* Dots */}
                        <div className="flex items-center gap-2">
                            {projects.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setIndex(i)}
                                    aria-label={`Go to project ${i + 1}`}
                                    className={`h-2 w-2 rounded-full transition-all ${i === index ? "w-6 bg-blue-600" : "bg-neutral-300"
                                        }`}
                                />
                            ))}
                        </div>

                        <Button
                            variant="outline"
                            size="icon"
                            className="rounded-lg border-neutral-300"
                            onClick={goNext}
                            aria-label="Next project"
                        >
                            {isHe ? "‹" : "›"}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
