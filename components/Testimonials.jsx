import Image from "next/image";
import { users } from "../data";
import styles from "../styles/Testimonials.module.css";

const Testimonials = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Testimonials</h2>
      <div className={styles.wrapper}>
        {users.map((user) => (
          <div key={user.id} className={styles.card}>
            <Image src={`/img/${user.logo}`} width="30" height="30" alt="" />
            <p className={styles.person}>{user.comment}</p>

            <div className={styles.person}>
              <Image
                src={`/img/${user.avatar}`}
                width="45"
                height="45"
                alt=""
                objectFit="cover"
              />
              <div className={styles.info}>
                <span className={styles.username}>{user.name}</span>

                <span className={styles.jobTitle}>{user.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
