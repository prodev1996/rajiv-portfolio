// src/app/components/Skills.jsx
import styles from "./Skills.module.css";

export default function Skills() {
  const skillCategories = [
    { title: "Programming", items: ["C#", "Python", "Java", "JavaScript", "TypeScript"] },
    { title: "Frameworks & Libraries", items: ["React.js", "Node.js", "Express.js", "Next.js", ".NET"] },
    { title: "Databases", items: ["MySQL", "PostgreSQL", "SQL Server", "MongoDB"] },
    { title: "Tools & Platforms", items: ["Git", "Docker", "Postman", "Linux", "Windows Server", "Azure", "AWS"] },
  ];

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Skills</h2>
        <div className={styles.grid}>
          {skillCategories.map(({ title, items }) => (
            <div key={title} className={styles.category}>
              <h3 className={styles.categoryTitle}>{title}</h3>
              <ul className={styles.list}>
                {items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
