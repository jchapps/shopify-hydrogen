import {
  gql,
  useShopQuery,
  useRouteParams,
} from "@shopify/hydrogen";

import { Layout } from "../components/Layout.server";
import ProductCard from "../components/ProductCard.server";

export default function All() {
  const { handle } = useRouteParams();

  const {
    data: { products },
  } = useShopQuery({
    query: QUERY,
  });

  return (
    <Layout>
      <header className="grid w-full gap-8 p-6 md:p-8 lg:p-12 justify-items-center">
        <h1 className="text-4xl whitespace-pre-wrap font-bold inline-block underline underline-offset-8 decoration-rose-200">
          Jewellery
        </h1>
      </header>
      <section className="w-full gap-4 md:gap-8 grid px-6 md:px-8 lg:px-12 mb-12">
        <div className="grid-flow-row grid gap-2 gap-y-6 md:gap-4 lg:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-3">
          {products.nodes.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

const QUERY = gql`
  query AllProducts {
    products(first: 20) {
      nodes {
        id
        title
        publishedAt
        handle
        variants(first: 1) {
          nodes {
            id
            image {
              url
              altText
              width
              height
            }
            priceV2 {
              amount
              currencyCode
            }
            compareAtPriceV2 {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
`;
