import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/Services.module.css";

const Services = ({ services }) => {
  console.log(services);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>What We Can Do?</h1>
      {services.map((service) => (
        <Link passHref key={service.id} href={`/products/${service.name}`}>
          <div className={styles.service}>
            <span className={styles.cat}>{service.title}</span>

            <div className={styles.media}>
              {service.video ? (
                <video
                  src={service.video}
                  autoPlay
                  loop
                  className={styles.video}
                />
              ) : (
                <Image
                  src={`/img/${service.photo}`}
                  width="100%"
                  height="100%"
                  layout="responsive"
                  alt={service.name}
                />
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Services;
