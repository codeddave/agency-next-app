import React from "react";
import { data } from "../../data";
import styles from "../../styles/Product.module.css";
const Product = () => {
  return <div className={styles.container}></div>;
};

export default Product;

export const getStaticPaths = async () => {
  const products = data;
  const paths = products.map((item) => {
    return {
      params: { name: item.name },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const name = context.params.name;

  const product = data.find((prod) => prod.name === name);

  return {
    props: { product },
  };
};
