export const dynamic = "force-dynamic";

import Header from "./Header";
import Footer from "./Footer";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";

export default async function Page({ searchParams }) {
  // ⬇️ unwrap the Promise
  const params = await searchParams;
  const category =
    typeof params?.category === "string" ? params.category : null;

  return (
    <main className="max-w-93.75 w-full mx-auto p-4">
      <Header />
      <CategoryList />
      <ProductList key={category || "all"} category={category} />
      <Footer />
    </main>
  );
}
