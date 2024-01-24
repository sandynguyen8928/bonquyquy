import { Cart } from "@shopify/hydrogen-react/storefront-api-types";
import moment from "moment";
import { CREATE_CART } from "queries/create-cart";
import { GET_CART } from "queries/get-cart";
import { atom, selector } from "recoil";
import { client } from "utils/apollo";

const cartState = atom({
  key: "cartState",
  default: selector({
    key: "cartState/default",
    get: async () => {
      const storedCartInfo = window.localStorage.getItem("cartInfo");

      if (storedCartInfo) {
        const parsedStoredCartInfo = JSON.parse(storedCartInfo);
        const storedCart = await client.query<Cart>({
          query: GET_CART,
          variables: { id: parsedStoredCartInfo.id },
        });

        const today = moment();
        if (storedCart && moment(storedCart.data.updatedAt).isSameOrAfter(today.subtract(1, "weeks"))) {
          return parsedStoredCartInfo;
        }
      }

      const cart = await client.mutate<Cart>({ mutation: CREATE_CART });

      const cartInfo = JSON.stringify({
        id: cart.data?.id,
      });
      window.localStorage.setItem("cartInfo", cartInfo);
      return cart;
    },
  }),
});

export default cartState;
