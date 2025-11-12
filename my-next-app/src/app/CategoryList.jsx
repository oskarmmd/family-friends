import CategoryElement from "./CategoryElement";

export default async function CategoryList() {
  const res = await fetch("https://dummyjson.com/products", {
    cache: "no-store",
  });
  const data = await res.json();
  const products = Array.isArray(data?.products) ? data.products : [];

  const productCategoryThumb = new Map();
  for (const product of products) {
    const productCategory = product?.category;
    if (productCategory && !productCategoryThumb.has(productCategory)) {
      productCategoryThumb.set(productCategory, product?.thumbnail || null);
    }
  }

  const productCategories = Array.from(
    productCategoryThumb.entries()
  ).map(([productCategory, image]) => ({
    productCategory,
    image,
  }));

  return (
    <nav className=" overflow-y-hidden mb-4">
      <ul className="flex items-center gap-3 flex-nowrap py-2 ">
        {productCategories.map(({ productCategory, image }, i) => (
          <CategoryElement
            key={`${productCategory}-${i}`}
            category={productCategory}
            image={image}
          />
        ))}
      </ul>
    </nav>
  );
}
