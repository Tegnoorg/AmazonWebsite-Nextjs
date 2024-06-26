import { TopNavbar } from "@/components/navbar";
import { ItemsAndFilters } from "@/components/products";

type SearchParams = {
  query: string;
};

// This page lists all of the products that match the searched name
// User can further filter down the products displays by things like price, rating, other tags
function page({ searchParams }: { searchParams: SearchParams }) {
  const productQueryString = decodeURI(searchParams.query);

  return (
    <>
      <TopNavbar />
      <main className="flex flex-col items-center mb-16">
        <h3 className="mt-8 mx-4 text-2xl">
          Showing Results For: {productQueryString}
        </h3>
        <div className="flex flex-1 w-full mb-10 mt-8">
          <ItemsAndFilters productName={productQueryString} />
        </div>
      </main>
    </>
  );
}

export default page;
