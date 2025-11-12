import Card from "./Card";

export default async function ProductList({ category }) {
  const res = await fetch("https://dummyjson.com/products", {
    cache: "no-store",
  });
  const data = await res.json();
  const all = Array.isArray(data?.products) ? data.products : [];

  let products = category ? all.filter((p) => p.category === category) : all;
  products = products.slice(0, 8);

  return (
    <section className="h-[80vh] overflow-y-auto">
      <ul className="columns-2 gap-6">
        {products.map((product) => (
          <li key={product.id} className="mb-6 break-inside-avoid-column">
            <Card
              id={product.id}
              title={product.title}
              category={product.category}
              image={product.thumbnail}
              price={product.price}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}


