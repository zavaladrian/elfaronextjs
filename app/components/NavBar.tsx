"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

function cn(...c: Array<string | false | undefined>) {
  return c.filter(Boolean).join(" ");
}

type Pill = { href: string; label: string };

const pills: Pill[] = [
  { href: "/", label: "Home" },
  { href: "/elfaro", label: "El Faro 1" },
  { href: "/elfarotwo", label: "El Faro 2" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isSegmentActive = (base: string) =>
    pathname === base || pathname.startsWith(`${base}/`);

  const activeIndex = useMemo(() => {
    if (pathname === "/") return 0;
    if (isSegmentActive("/elfarotwo")) return 2;
    if (isSegmentActive("/elfaro")) return 1;
    return 0;
  }, [pathname]);

  const sliderStyle = useMemo(() => {
    return { transform: `translateX(${activeIndex * 100}%)` };
  }, [activeIndex]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return isSegmentActive(href);
  };

  useEffect(() => {
  const root = document.documentElement;

  if (pathname === "/") root.dataset.location = "home";
  else if (pathname.startsWith("/elfarotwo")) root.dataset.location = "two";
  else if (pathname.startsWith("/elfaro")) root.dataset.location = "one";
  else root.dataset.location = "home";
}, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-black/5",
        scrolled
          ? "bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70"
          : "bg-white"
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Brand */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-red-500 text-white shadow-sm transition group-hover:scale-[1.03]">
            <span className="text-sm font-extrabold">EF</span>
          </div>
          <div className="leading-tight">
            <div className="text-sm font-extrabold tracking-tight">El Faro</div>
            <div className="text-xs font-semibold text-black/60">
              Summit • Riverside
            </div>
          </div>
        </Link>

        {/* Desktop pill toggle */}
        <div className="hidden items-center md:flex">
          <div className="relative grid grid-cols-3 rounded-full border border-black/10 bg-white/70 p-1 shadow-sm">
            {/* Sliding highlight */}
            <span
              aria-hidden
              className="pointer-events-none absolute left-1 top-1 h-[calc(100%-8px)] w-[calc((100%-8px)/3)] rounded-full bg-black/5 transition-transform duration-300"
              style={sliderStyle}
            />

            {pills.map((p, idx) => {
              const active = isActive(p.href);

              return (
                <Link
                  key={p.href}
                  href={p.href}
                  className={cn(
                    "relative z-10 rounded-full px-4 py-2 text-sm font-semibold transition",
                    active ? "text-black" : "text-black/70 hover:text-black"
                  )}
                >
                  <span className="relative inline-flex flex-col items-center">
                    <span>{p.label}</span>

                    {/* Tiny indicator dot */}
                    <span
                      aria-hidden
                      className={cn(
                        "mt-1 h-1 w-1 rounded-full bg-[var(--accent)]",
                        "transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
                        active ? "scale-100 opacity-100" : "scale-0 opacity-0"
                      )}
                    />
                  </span>

                  {/* keep spacing consistent even when dot is hidden */}
                  {idx === -1 ? null : null}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Mobile button */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-2xl border border-black/10 bg-white px-3 py-2 text-sm font-semibold shadow-sm transition hover:bg-black/5 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={cn("md:hidden", open ? "block" : "hidden")}
      >
        <div className="mx-auto max-w-6xl px-4 pb-5">
          <div className="rounded-3xl border border-black/10 bg-white p-3 shadow-sm">
            <div className="grid gap-2">
              {pills.map((p) => {
                const active = isActive(p.href);
                return (
                  <Link
                    key={p.href}
                    href={p.href}
                    className={cn(
                      "flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition",
                      active
                        ? "bg-black/5 text-black"
                        : "text-black/70 hover:bg-black/5 hover:text-black"
                    )}
                  >
                    <span>{p.label}</span>
                    <span
                      aria-hidden
                      className={cn(
                        "h-2 w-2 rounded-full bg-red-500 transition-transform duration-200",
                        active ? "scale-100" : "scale-0"
                      )}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
