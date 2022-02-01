import Image from "next/image";
import Link from "next/link";
import React from "react";
import { data } from "../../data";
import styles from "../../styles/Product.module.css";
const Product = ({ product }) => {
  return (
    <div className={styles.container}>
      <div className={styles.largeCard}>
        {product.images.map((img) => (
          <div key={img.id} className={styles.imageContainer}>
            <Image
              src={img.url}
              width="100%"
              height="100%"
              objectFit="cover"
              layout="responsive"
              alt=""
            />
          </div>
        ))}
      </div>
      <div className={styles.smallCard}>
        <p className={styles.title}>{product.title}</p>
        <p className={styles.desc}>{product.longDesc}</p>
        <button className={styles.button}>
          <Link href="/contact">Contact</Link>
        </button>
      </div>
    </div>
  );
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
