// components/topbar/TopBar.tsx
import Link from "next/link";
import LanguageSwitch from "./LanguageSwitch";
import { Button } from "@/components/ui/button";

export default function TopBar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Left: Brand */}
        <Link href="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl border bg-white shadow-sm" />
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-tight">MeshulamDev</div>
            <div className="text-xs text-muted-foreground">Systems · Automation · Cloud</div>
          </div>
        </Link>

        {/* Middle: Nav (desktop) */}
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          <a href="#services" className="hover:text-foreground transition-colors">Services</a>
          <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          <Button asChild variant="outline" size="sm" className="hidden rounded-xl md:inline-flex">
            <a href="#contact">Let’s talk</a>
          </Button>
          <LanguageSwitch />
        </div>
      </div>
    </header>
  );
}
