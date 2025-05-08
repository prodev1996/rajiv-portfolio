// src/app/components/Contact.jsx
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Get In Touch</h2>
        <p className={styles.text}>
          I’m always excited to connect! Whether you have a project idea, a
          question, or just want to say hello—feel free to reach out.
        </p>
        <div className={styles.buttonGroup}>
          <a href="mailto:rajiv@example.com" className={styles.button}>
            ✉️ Email Me
          </a>
          <a
            href="https://github.com/rajivusername"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            🐙 GitHub
          </a>
          <a
            href="https://linkedin.com/in/rajivusername"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            🔗 LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
