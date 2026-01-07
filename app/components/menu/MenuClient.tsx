"use client";

import { useMemo, useState } from "react";
import type { MenuConfig } from "./menu-types";

function cn(...c: Array<string | false | undefined>) {
  return c.filter(Boolean).join(" ");
}

export default function MenuClient({ config }: { config: MenuConfig }) {
  const [selected, setSelected] = useState(config.categories[0]?.id ?? "");
  const [query, setQuery] = useState("");
  const [searchAll, setSearchAll] = useState(false);

  const selectedCategory = useMemo(
    () => config.categories.find((c) => c.id === selected),
    [config.categories, selected]
  );

  const q = query.trim().toLowerCase();

  const resultsByCategory = useMemo(() => {
    // If global search is off, only search within the selected category
    if (!searchAll) {
      const cat = selectedCategory;
      const items = cat?.items ?? [];
      const filtered = !q
        ? items
        : items.filter((i) =>
            `${i.food} ${i.description ?? ""}`.toLowerCase().includes(q)
          );

      return cat ? [{ category: cat, items: filtered }] : [];
    }

    // Global search: if no query, don't dump whole menu by default — show selected category
    if (!q) {
      const cat = selectedCategory;
      return cat ? [{ category: cat, items: cat.items }] : [];
    }

    // Global search with query: return categories with matches
    return config.categories
      .map((cat) => {
        const items = cat.items.filter((i) =>
          `${i.food} ${i.description ?? ""}`.toLowerCase().includes(q)
        );
        return { category: cat, items };
      })
      .filter((group) => group.items.length > 0);
  }, [config.categories, q, searchAll, selectedCategory]);

  const totalMatches = useMemo(
    () => resultsByCategory.reduce((sum, g) => sum + g.items.length, 0),
    [resultsByCategory]
  );

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
      {/* Heading */}
      <header className="space-y-2">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          {config.heading}
        </h1>
        <p className="text-base font-semibold text-black/70">
          {config.subheading}
        </p>
      </header>

      {/* Search */}
      <div className="mt-6">
        <label className="sr-only" htmlFor="menu-search">
          Search menu
        </label>
        <input
          id="menu-search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search (e.g. burrito, chorizo, pozole)…"
          className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm shadow-sm outline-none focus:ring-2 focus:ring-black/20"
        />

        <div className="mt-3 flex items-center justify-between gap-3">
          <label className="flex cursor-pointer items-center gap-2 text-sm font-semibold text-black/70">
            <input
              type="checkbox"
              checked={searchAll}
              onChange={(e) => setSearchAll(e.target.checked)}
              className="h-4 w-4 rounded border-black/20"
            />
            Search all categories
          </label>

          {q ? (
            <div className="text-sm font-semibold text-black/50">
              {totalMatches} match{totalMatches === 1 ? "" : "es"}
            </div>
          ) : null}
        </div>
      </div>

      {/* Sticky category chips */}
      <div className="sticky top-2 z-10 mt-6 -mx-4 border-y border-black/5 bg-white/90 px-4 py-3 backdrop-blur">
        <div className="flex gap-2 overflow-x-auto pb-1 snap-x snap-mandatory">
          {config.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelected(cat.id);
                setSearchAll(false);
              }}
              className={cn(
                "snap-start whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition",
                selected === cat.id
                  ? "border-red-500 bg-red-500 text-white"
                  : "border-black/10 bg-white hover:bg-black/5"
              )}
            >
              {cat.title}
            </button>
          ))}
        </div>
      </div>

      {/* Items */}
      <div className="mt-6">
        {!searchAll ? (
          <h2 className="text-xl font-extrabold tracking-tight">
            {selectedCategory?.title}
            <span className="ml-2 text-sm font-semibold text-black/50">
              ({resultsByCategory[0]?.items.length ?? 0})
            </span>
          </h2>
        ) : (
          <h2 className="text-xl font-extrabold tracking-tight">
            {q ? "Search results" : selectedCategory?.title}
            <span className="ml-2 text-sm font-semibold text-black/50">
              ({totalMatches})
            </span>
          </h2>
        )}

        {resultsByCategory.length === 0 ? (
          <p className="mt-6 text-sm text-black/60">
            No matches. Try a different search term.
          </p>
        ) : (
          <div className="mt-4 space-y-6">
            {resultsByCategory.map(({ category, items }) => (
              <div key={category.id}>
                {/* Only show category header when global searching with a query */}
                {searchAll && q ? (
                  <div className="mb-2 flex items-end justify-between">
                    <h3 className="text-sm font-extrabold tracking-wide text-black/70">
                      {category.title}
                    </h3>
                    <span className="text-xs font-semibold text-black/50">
                      {items.length} item{items.length === 1 ? "" : "s"}
                    </span>
                  </div>
                ) : null}

                <div className="divide-y divide-black/10 rounded-2xl border border-black/10 bg-white">
                  {items.map((item, idx) => (
                    <details
                      key={`${item.food}-${item.price}-${idx}`}
                      className="group"
                    >
                      <summary className="cursor-pointer px-5 py-4 [&::-webkit-details-marker]:hidden">
                        <div className="grid grid-cols-[1fr_auto] items-start gap-4">
                          <div>
                            <div className="font-bold leading-snug">
                              {item.food}
                            </div>
                            {item.description ? (
                              <p className="mt-1 line-clamp-2 text-sm text-black/70 group-open:line-clamp-none">
                                {item.description}
                              </p>
                            ) : null}
                          </div>

                          <div className="text-right">
                            <div className="rounded-full bg-black/5 px-3 py-1 text-sm font-extrabold">
                              {item.price.includes("$")
                                ? item.price
                                : `$${item.price}`}
                            </div>
                            {/* {item.description ? (
                              <div className="mt-2 text-xs font-semibold text-black/50">
                                <span className="group-open:hidden">More</span>
                                <span className="hidden group-open:inline">
                                  Less
                                </span>
                              </div>
                            ) : null} */}
                          </div>
                        </div>
                      </summary>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
