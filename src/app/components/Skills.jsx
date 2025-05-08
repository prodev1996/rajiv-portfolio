// src/app/components/Skills.jsx
"use client";
import { motion } from "framer-motion";
import styles from "./Skills.module.css";

const groups = [
  { title: "Programming", items: ["C#", "Python", "Java", "JavaScript", "TypeScript"] },
  { title: "Frameworks & Libraries", items: ["React.js", "Node.js", "Express.js", "Next.js", ".NET"] },
  { title: "Databases", items: ["MySQL", "PostgreSQL", "SQL Server", "MongoDB"] },
  { title: "Tools & Platforms", items: ["Git", "Docker", "Postman", "Linux", "Windows Server", "Azure", "AWS"] },
];

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className={styles.section}
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.container}>
        <h2 className={styles.heading}>Skills</h2>
        <div className={styles.grid}>
          {groups.map((g) => (
            <div key={g.title}>
              <h3 className={`${styles.category} ${styles.categoryTitle}`}>
                {g.title}
              </h3>
              <ul className={styles.list}>
                {g.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
