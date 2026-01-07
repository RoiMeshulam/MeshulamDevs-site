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
        <section id="projects" className="border-t bg-white">
            <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
                {/* Header */}
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                        {t.projects.title}
                    </h2>
                    <p className="mt-3 text-sm text-muted-foreground">{t.projects.subtitle}</p>
                </div>

                {/* Carousel */}
                <div className="mt-10">
                    <Card className="overflow-hidden rounded-2xl shadow-sm">
                        <CardContent className="p-0">
                            <div className="grid lg:grid-cols-2">
                                {/* Image */}
                                <div
                                    className="
                                     relative w-full overflow-hidden rounded-t-2xl bg-white
                                     h-[320px] sm:h-[380px]
                                    lg:h-[520px] lg:rounded-l-2xl lg:rounded-tr-none lg:rounded-t-none
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
                                                    <h3 className="text-lg font-semibold">{project.name}</h3>

                                                    {project.tag && (
                                                        <span className="mt-2 inline-flex rounded-full bg-[#3348FF]/10 px-3 py-1 text-xs font-medium text-[#3348FF]">
                                                            {project.tag}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            <p className="mt-4 text-sm text-muted-foreground">{project.oneLiner}</p>

                                            {/* Tech */}
                                            <div className="mt-4 flex flex-wrap gap-2">
                                                {project.tech.map((tech) => (
                                                    <Badge key={tech} variant="secondary" className="rounded-full">
                                                        {tech}
                                                    </Badge>
                                                ))}
                                            </div>

                                            {/* Bullets */}
                                            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                                                {project.bullets.map((b) => (
                                                    <li key={b} className="flex gap-2">
                                                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-300" />
                                                        <span>{b}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* CTA */}
                                        <div className="mt-8 flex flex-wrap gap-3">
                                            {project.links?.github && (
                                                <Button className="rounded-xl" asChild>
                                                    <a href={project.links.github} target="_blank" rel="noreferrer">
                                                        GitHub
                                                    </a>
                                                </Button>
                                            )}

                                            {project.links?.live && (
                                                <Button variant="outline" className="rounded-xl" asChild>
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
                            className="rounded-xl"
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
                                    className={`h-2.5 w-2.5 rounded-full transition ${i === index ? "bg-[#3348FF]" : "bg-gray-300"
                                        }`}
                                />
                            ))}
                        </div>

                        <Button
                            variant="outline"
                            size="icon"
                            className="rounded-xl"
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
