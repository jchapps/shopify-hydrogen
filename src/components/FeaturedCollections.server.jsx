import { Link, Image, gql, useShopQuery, CacheLong } from "@shopify/hydrogen";

export default function FeaturedCollections() {
  const {
    data: { collections },
  } = useShopQuery({
    query: QUERY,
    cache: CacheLong(),
  });

  return (
    <section className="w-full gap-4 object-cover">
    <h1 className="text-2xl text-center py-10 underline underline-offset-8 lg:mt-48 decoration-rose-200">
      Our Collections
    </h1>
    <div className="grid-flow-row grid gap-2 gap-y-6 mb-20 md:gap-4 lg:gap-6 grid-cols-1 false  sm:grid-cols-3 false false">
      {collections.nodes.map((collection) => {
        return (
          <Link
            to={`/collections/${collection.handle}`}
            key={collection.id}
          >
            <h2 className="text-xl text-copy text-center m-4">
              {collection.title}
            </h2>
            <div className="grid gap-4">
              {collection?.image && (
                <Image
                  className="rounded hover:-translate-y-1 hover:shadow-lg duration-500 transform"
                  alt={`Image of ${collection.title}`}
                  data={collection.image}
                  key={collection.id}
                  sizes="(max-width: 32em) 100vw, 33vw"
                  widths={[400, 500, 600, 700, 800, 900]}
                  loaderOptions={{
                    scale: 2,
                    crop: 'center',
                  }}
                />
              )}
            </div>
          </Link>
        );
      })}
    </div>
  </section>
  );
}

const QUERY = gql`
  query FeaturedCollections {
    collections(first: 3, sortKey: UPDATED_AT) {
      nodes {
        id
        title
        handle
        image {
          altText
          width
          height
          url
        }
      }
    }
  }
`;
