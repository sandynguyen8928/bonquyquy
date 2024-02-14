import { CartProvider, ShopifyProvider } from "@shopify/hydrogen-react";
import { RouterProvider } from "react-router-dom";
import { router } from "RootRouter";

const Root = () => (
  <ShopifyProvider
    storeDomain={`https://${process.env.REACT_APP_STOREFRONT_DOMAIN!}`}
    storefrontToken={process.env.REACT_APP_PUBLIC_STOREFRONT_API_TOKEN!}
    storefrontApiVersion={process.env.REACT_APP_API_VERSION!}
    countryIsoCode="CA"
    languageIsoCode="EN"
  >
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </ShopifyProvider>
);

export default Root;
