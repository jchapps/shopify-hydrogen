import { Layout } from "../components/Layout.server";
import { Suspense } from "react";
import FeaturedCollections from "../components/FeaturedCollections.server";
import { Link } from "@shopify/hydrogen";
import Backdrop from '../../public/assets/jewels.jpeg';

export default function Home() {
  return (
    <Layout>
      <div>
        <img src={Backdrop} alt="Fashion" className="opacity-50" />
        <div className="text-center max-w-full text-lg m-auto bg-rose-200 text-white drop-shadow-md rounded-lg p-10 lg:-mt-80 mt-12">
          <p>
            Poly-Jewels provides exquisite accessories for special occassions.
          </p>
          <p>
            Browse our unique hand made designs or contact us for custom pieces.
          </p>
        </div>
      </div>
      <div className="sm:px-16 pt-10">
        <Suspense>
          <FeaturedCollections />
        </Suspense>
      </div>
    </Layout>
  );
}
