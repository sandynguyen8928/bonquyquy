import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const ShopPage = lazy(() => import("pages/ShopPage"));
const ProductPage = lazy(() => import("pages/ProductPage"));
const HomePage = lazy(() => import("pages/HomePage"));
const CartPage = lazy(() => import("pages/CartPage"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/merch",
    element: <ShopPage />,
  },
  {
    path: "/product/:handle",
    element: <ProductPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
]);
