"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function LanguageSwitch() {
  const pathname = usePathname();
  const isHebrew = pathname.startsWith("/he");

  return (
    <div className="flex items-center gap-1 rounded-full border bg-white p-1 shadow-sm">
      <Button asChild variant={isHebrew ? "ghost" : "secondary"} size="sm" className="rounded-full">
        <Link href="/">EN</Link>
      </Button>
      <Button asChild variant={isHebrew ? "secondary" : "ghost"} size="sm" className="rounded-full">
        <Link href="/he">HE</Link>
      </Button>
    </div>
  );
}
