import { useUrl, Link } from "@shopify/hydrogen";
import github from "../../public/assets/github.svg";

export default function Footer() {
  const { pathname } = useUrl();

  return (
    <footer
      className={`relative z-20 flex justify-center gap-6 items-center pt-8 pb-6 bg-neutral-50 px-6 sm:px-12 border-t-2`}
    >
      <div className="sm:pl-10 md:pl-16 bg-neutral-50">
        © 2023 PolyJewels - Joshua Chappelow
      </div>
      <Link
        className="opacity-75 hover:opacity-100 duration-500 transform hover:-translate-y-0.5"
        to="https://github.com/jchapps"
      >
        <img className="w-5 h-5 text-rose-200" src={github} alt="logo" />
      </Link>
    </footer>
  );
}
