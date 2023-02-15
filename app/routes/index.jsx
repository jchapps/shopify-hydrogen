import {useLoaderData, Link} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';
import Backdrop from '../../assets/jewels.jpeg';

export const meta = () => {
  return {
    title: 'Poly-Jewel',
    description: 'A custom storefront powered by Hydrogen',
  };
};

export async function loader({context}) {
  return await context.storefront.query(COLLECTIONS_QUERY);
}

export default function Index() {
  const {collections} = useLoaderData();
  return (
    <>
      <section className="w-full gap-4 object-cover">
        <img src={Backdrop} alt="Fashion" className="opacity-50"></img>
        <div className="info-block">
          <div className="flex flex-col shrink text-center max-w-full text-lg mx-40 bg-rose-200 text-white drop-shadow-md rounded-lg p-10 -mt-80">
            <p>
              Poly-Jewels provides exquisite accessories for special occassions.
            </p>
            <p>
              Browse our unique hand made designs or contact us for custom
              pieces.
            </p>
          </div>
        </div>

        <h1 className="text-xl text-center py-10 underline underline-offset-8 mt-48">
          Our Collections
        </h1>
        <div className="grid-flow-row grid gap-2 gap-y-6 md:gap-4 lg:gap-6 grid-cols-1 false  sm:grid-cols-3 false false">
          {collections.nodes.map((collection) => {
            return (
              <Link
                to={`/collections/${collection.handle}`}
                key={collection.id}
              >
                <h2 className="font-medium text-copy text-center m-4">
                  {collection.title}
                </h2>
                <div className="grid gap-4">
                  {collection?.image && (
                    <Image
                      className="rounded hover:-translate-y-0.5 hover:shadow-lg duration-500 transform"
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
    </>
  );
}

const COLLECTIONS_QUERY = `#graphql
  query FeaturedCollections {
    collections(first: 3, query: "collection_type:smart") {
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
