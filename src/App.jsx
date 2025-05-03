import Home from "./ui/Home";
import Menu from "./featurs/menu/Menu";
import CreateOrder, {
  action as createOrderAction,
} from "./featurs/order/CreateOrder";
import Order, { loader as orderLoader } from "./featurs/order/Order";
import Cart from "./featurs/cart/Cart";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import { loader as menuLoader } from "./featurs/menu/Menu";
import { action as updateOrderAction } from "./featurs/order/updateOrder";
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: "/cart", element: <Cart /> },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
