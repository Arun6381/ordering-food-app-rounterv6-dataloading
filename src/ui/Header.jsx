import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

export default function Header() {
  return (
    <header className="bg-yellow-500  text-center p-5 flex md:flex-row flex-col justify-between gap-2 uppercase border-b border-stone-700">
      <Link to="/" className=" font-extrabold text-2xl">
        Order Your Food.in
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}
