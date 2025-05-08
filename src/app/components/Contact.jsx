// src/app/components/Contact.jsx
import styles from "./Contact.module.css";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Get In Touch</h2>
        <p className={styles.text}>
          I’m always excited to connect! Whether you have a project idea, a question, or just want to say hello—feel free to reach out.
        </p>
        <div className={styles.links}>
          <a href="mailto:your.email@example.com" className={styles.link}>
            <Mail size={20} /> Email Me
          </a>
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <Github size={20} /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <Linkedin size={20} /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
