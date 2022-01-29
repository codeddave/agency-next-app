import Link from "next/link";
import React from "react";
import styles from "../styles/Services.module.css";

const Services = ({ services }) => {
  console.log(services);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>What We Can Do?</h1>
      {services.map((service) => (
        <Link key={service.id} href={`/products/${service.name}`}>
          {service.title}
        </Link>
      ))}
    </div>
  );
};

export default Services;
