import Link from "next/link";

export default function Card({ id, title, category, price, image }) {
  return (
    <Link href={`/product/${id}`} className="block">
      <article className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
       
        <div className="relative w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>


        <div className="p-4 space-y-1">
          <h2 className="text-[0.9375rem] font-semibold text-gray-800">
            {title}
          </h2>
          <p className="text-[0.75rem] text-gray-500 capitalize">
            {String(category).replace(/-/g, " ")}
          </p>
        </div>
      </article>
    </Link>
  );
}
