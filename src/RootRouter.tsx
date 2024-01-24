import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import ShopLayout from "shared-components/layouts/ShopLayout";

const ShopPage = lazy(() => import("pages/ShopPage"));
const ProductPage = lazy(() => import("pages/ProductPage"));

export const router = createBrowserRouter([
  {
    element: <ShopLayout />,
    children: [
      {
        path: "/",
        element: <ShopPage />,
      },
      {
        path: "/product/:handle",
        element: <ProductPage />,
      },
    ],
  },
]);
