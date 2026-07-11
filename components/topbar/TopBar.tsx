// components/topbar/TopBar.tsx
import Link from "next/link";
import LanguageSwitch from "./LanguageSwitch";
import { Button } from "@/components/ui/button";

export default function TopBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Left: Brand */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-900 text-sm font-bold tracking-tight text-white">
            RM
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-tight text-neutral-900">Roi Meshulam</div>
            <div className="text-xs text-neutral-500">Software Engineer</div>
          </div>
        </Link>

        {/* Middle: Nav (desktop) */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-neutral-500 md:flex">
          <a href="#services" className="transition-colors hover:text-neutral-900">Expertise</a>
          <a href="#projects" className="transition-colors hover:text-neutral-900">Projects</a>
          <a href="#contact" className="transition-colors hover:text-neutral-900">Contact</a>
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Button asChild size="sm" className="rounded-lg bg-neutral-900 text-white hover:bg-blue-600">
            <a href="#contact">Let's talk</a>
          </Button>
          <LanguageSwitch />
        </div>
      </div>
    </header>
  );
}
