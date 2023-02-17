import { Link, Image, Money } from "@shopify/hydrogen";

export default function ProductCard({product}) {
  const {price, compareAtPrice} = product.variants?.nodes[0] || {};
  const isDiscounted = compareAtPrice?.amount > price?.amount;

  return (
    <Link to={`/products/${product.handle}`}>
      <div className="grid gap-2">
        <div className="shadow-sm rounded relative h-40 ">
          {isDiscounted && (
            <label className="subpixel-antialiased absolute top-0 right-0 m-4 text-right text-notice text-red-600 text-xs z-10">
              Sale
            </label>
          )}
          <Image
            className="rounded hover:-translate-y-0.5 hover:shadow-lg duration-500 h-40 transform object-cover"
            data={product.variants.nodes[0].image}
            alt={product.title}
          />
        </div>
        <div className="grid gap-1">
          <h3 className="max-w-prose text-copy w-full overflow-hidden whitespace-nowrap text-ellipsis ">
            {product.title}
          </h3>
          <div className="flex gap-4">
            <span className="max-w-prose whitespace-pre-wrap inherit text-copy flex gap-4">
              {/* <Money withoutTrailingZeros data={price} />
              {isDiscounted && (
                <Money
                  className="line-through opacity-50"
                  withoutTrailingZeros
                  data={compareAtPrice}
                /> */}
              {/* )} */}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
