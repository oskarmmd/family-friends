export const dynamic = "force-dynamic";

import Header from "@/app/Header";
import Link from "next/link";

export default async function Page({ params }) {
  const p = await params;            // Next 16: params can be a Promise
  const id = p.id;

  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return (
      <main className="max-w-93.75 w-full mx-auto p-4">
        <p className="text-sm text-gray-600">Kunne ikke hente produktet.</p>
        <Link href="/" className="text-[#F2968F] underline">Tilbage</Link>
      </main>
    );
  }
  const product = await res.json();

  const {
    title,
    brand,
    category,
    price,
    description,
    rating,
    stock,
    thumbnail,
    images = [],
  } = product;

  const hero = images[0] || thumbnail;

  return (
    <main className="max-w-93.75 w-full mx-auto p-4">
        <Header />
      <article className="mx-auto max-w-xl p-4 sm:p-6 ">
        {/* Hero image panel with rounded corners + top controls (back / favorite) */}
        <div className="relative rounded-3xl overflow-hidden mb-4">
          {hero && (
            <img
              src={hero}
              alt={title}
              className="w-full h-90 object-cover"
            />
          )}
          {/* Back button (circle, top-left) */}
          <Link
            href="/"
            className="absolute left-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/80 backdrop-blur text-gray-800 shadow"
          >
            ←
          </Link>
          {/* Favorite icon (top-right) – purely decorative */}
          <button
            type="button"
            className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/80 backdrop-blur text-[#F2968F] shadow"
            aria-label="Favorite"
          >
            ★
          </button>

          {/* Small round chip over image (like the pet location chip) */}
          <div className="absolute left-3 bottom-3">
            <div className="flex items-center gap-2 rounded-2xl bg-white/85 backdrop-blur px-3 py-2 shadow">
              {hero && (
                <img
                  src={hero}
                  alt={title}
                  className="h-6 w-6 rounded-full object-cover"
                />
              )}
              <span className="text-sm text-gray-800 capitalize">
                {String(category).replace(/-/g, " ")}
              </span>
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          {String(title)}
        </h1>

        {/* Badges row (mirrors the “Dog / Male / Young / Great Dane” chip style) */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center rounded-full bg-[#DDEBFA] text-[#4C86C6] text-xs font-medium px-3 py-1">
            {brand || "Brand"}
          </span>
          <span className="inline-flex items-center rounded-full bg-[#E7F3D8] text-[#6C8C3B] text-xs font-medium px-3 py-1">
            ⭐ {rating ?? "—"}
          </span>
          <span className="inline-flex items-center rounded-full bg-[#F6EAAE] text-[#8C7A2B] text-xs font-medium px-3 py-1">
            {stock ?? 0} på lager
          </span>
        </div>

        {/* Description */}
        <p className="text-[0.95rem] leading-7 text-gray-700 mb-3">
          {description}
        </p>

        {/* CTA bar (pet-style rounded button) */}
        <div className="sticky bottom-4">
          <Link
            href="#"
            className="flex w-full items-center justify-center rounded-full bg-[#F2968F] text-white text-base font-semibold py-3 shadow hover:opacity-90 transition"
          >
            Køb for {price != null ? `${price} $` : "—"}
          </Link>
        </div>
      </article>
    </main>
  );
}
