import { useQuery } from "@apollo/client";
import {
  AddToCartButton,
  // BuyNowButton,
  Image,
  ProductPrice,
  ProductProvider,
  flattenConnection,
  useProduct,
} from "@shopify/hydrogen-react";
import { GetProductQuery, GetProductQueryVariables } from "gql/graphql";
import { GET_PRODUCT } from "queries/get-product";
import { useParams } from "react-router-dom";

import styles from "./ProductPage.module.scss";
import NavBar from "../../shared-components/layouts/NavBar";

const ProductView = () => {
  const { product, selectedVariant } = useProduct();
  if (!product) {
    return <></>;
  }

  const productImages = flattenConnection(product.images);
  const productSizes = flattenConnection(product.variants);

  return (
    <div className={styles["product-styled"]}>
      <NavBar />
      <div className={styles["product-description"]}>
        <p>{product.title}</p>
        <p>{product.description}</p>
      </div>
      <div className={styles["product-images"]}>
        {productImages.map((image, index) => (
          <Image key={index} data={image} />
        ))}
      </div>
      <div className={styles["product-price"]}>
        <ProductPrice data={product} />
        <select id="dropdown">
          {productSizes.map((size) => (
            <option value={size?.title}>{size?.title}</option>
          ))}
        </select>
        <AddToCartButton variantId={selectedVariant?.id}>ADD TO CART</AddToCartButton>
      </div>
    </div>
  );
};

const ProductPage = () => {
  const { handle } = useParams();

  const { data: productData } = useQuery<GetProductQuery, GetProductQueryVariables>(GET_PRODUCT, {
    variables: { handle: handle! },
  });

  if (!productData?.product) {
    return <></>;
  }

  return (
    <ProductProvider data={productData.product}>
      <ProductView />
    </ProductProvider>
  );
};

export default ProductPage;
