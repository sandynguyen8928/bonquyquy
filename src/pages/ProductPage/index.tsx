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
// import Footer from "../../shared-components/layouts/Footer/Footer";
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
      <div className={styles["product-background"]} />
      <NavBar />
      <div className={styles["product-container"]}>
        <div className={styles["product-description-container"]}>
          <p>{product.title}</p>
          <div
            dangerouslySetInnerHTML={{ __html: product.descriptionHtml ?? "" }}
            className={styles["product-description"]}
          />
        </div>
        <div className={styles["product-images"]}>
          {productImages.map((image, index) => (
            <Image key={index} data={image} />
          ))}
        </div>
        <div className={styles["product-price-container"]}>
          <ProductPrice data={product} />
          <select id="dropdown" className={styles["select-size"]}>
            {productSizes.map((size) => (
              <option value={size?.title}>{size?.title}</option>
            ))}
          </select>
          <AddToCartButton variantId={selectedVariant?.id} className={styles["add-to-cart-button"]}>
            ADD TO CART
          </AddToCartButton>
        </div>
      </div>
      {/*<Footer />*/}
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
