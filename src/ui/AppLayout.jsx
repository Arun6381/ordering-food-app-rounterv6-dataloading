import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/card/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className=" grid h-screen grid-rows-[auto_1fr_auto] font-mono">
      {isLoading && <Loader />}
      {/* {true && <Loader />} */}
      <Header />
      <div className="overflow-scroll ">
        <main className=" max-w-3xl mx-auto my-5 px-2 md:px-0">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}
