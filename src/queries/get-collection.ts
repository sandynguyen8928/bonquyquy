import { graphql } from "gql";

export const GET_COLLECTION = graphql(`
  query GetCollection($collectionHandle: String!, $after: String) {
    collection(handle: $collectionHandle) {
      id
      products(first: 250, after: $after) {
        nodes {
          handle
          title
          availableForSale
          featuredImage {
            url
          }
          priceRange {
            maxVariantPrice {
              amount
              currencyCode
            }
            minVariantPrice {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
`);
