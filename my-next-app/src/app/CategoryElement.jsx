"use client";
import { useRouter, useSearchParams } from "next/navigation";

const CategoryElement = ({ category, image }) => {
  const router = useRouter();
  const sp = useSearchParams();
  const active = sp.get("category") === category;

  return (
    <li className="shrink-0">
      <button
        onClick={() => router.push(`?category=${encodeURIComponent(category)}`)}
        className={`flex items-center gap-3 border rounded-full pt-2.5 pl-2.5 pb-2.5 pr-6 text-base transition-colors
          ${
            active
              ? "bg-[#F2968F] text-white"
              : "border-[#CACACD] text-[#CACACD] hover:border-[#F2968F] hover:text-[#F2968F]"
          }`}
      >
        {image && (
          <img
            src={image}
            alt={category}
            className="w-6 h-6 rounded-full object-cover"
          />
        )}
       {String(category)
  .replace(/-/g, " ")
  .replace(/^./, (c) => c.toUpperCase())}

      </button>
    </li>
  );
};

export default CategoryElement;


