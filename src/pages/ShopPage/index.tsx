import { useQuery } from "@apollo/client";
import { flattenConnection } from "@shopify/hydrogen-react";
import classNames from "classnames";
import { GetCollectionQuery, GetCollectionQueryVariables } from "gql/graphql";
import { GET_COLLECTION } from "queries/get-collection";
import { Link } from "react-router-dom";
import Item from "shared-components/core/Item";

import styles from "./ShopPage.module.scss";

const ShopPage = () => {
  const { data: productData } = useQuery<GetCollectionQuery, GetCollectionQueryVariables>(GET_COLLECTION, {
    variables: { collectionHandle: "shop-all" },
  });

  if (!productData?.collection?.products) {
    return <></>;
  }

  const products = flattenConnection(productData?.collection?.products);
  console.log(products);

  return (
    <>
      <div className={classNames(styles["products"])}>
        {products.map((product) => (
          <Link to={`/product/${product.handle}`} key={product.handle}>
            <Item product={product} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default ShopPage;