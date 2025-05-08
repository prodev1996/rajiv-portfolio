// src/app/components/About.jsx
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>About Me</h2>
        <p className={styles.text}>
          Dynamic and detail-oriented IT professional pursuing a Master’s in
          Information Technology (Advanced) at Torrens University Australia.
          Passionate about application support, database management, and
          full-stack development—always eager to learn new technologies and
          solve complex problems.
        </p>
      </div>
    </section>
  );
}
