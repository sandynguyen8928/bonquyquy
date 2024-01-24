import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: `https://${process.env.REACT_APP_STOREFRONT_DOMAIN!}/api/${process.env
    .REACT_APP_API_VERSION!}/graphql.json`,
});

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    "X-Shopify-Storefront-Access-Token": process.env.REACT_APP_PUBLIC_STOREFRONT_API_TOKEN!,
  },
}));

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Collection: { keyFields: ["id"] },
    },
  }),
});
