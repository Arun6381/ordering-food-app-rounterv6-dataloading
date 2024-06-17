import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./ui/Home";
import Menu, { loader as menuloader } from "./features/menu/Menu";
import Cart from "./features/card/Cart";
import CreateOrder, {
  action as createorderaction,
} from "./features/order/CreateOrder";
import Order, { loader as orderLoader } from "./features/order/Order";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";

const router = createBrowserRouter([
  {
    //layout
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      //outlets
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        errorElement: <Error />,

        //loading data from api
        loader: menuloader,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/Order/new",
        element: <CreateOrder />,
        action: createorderaction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
