// src/app/components/Experience.jsx
import styles from "./Experience.module.css";

const experiences = [
  {
    title: "IT Support Engineer",
    company: "SA Mushroom",
    period: "Dec 2022 – Present",
    bullets: [
      "Led day-to-day support and maintenance of Windows Server 2019 environments for 50+ users.",
      "Implemented Active Directory and Azure AD management, reducing login issues by 30%.",
      "Configured Office 365 and collaborated on network infrastructure upgrades.",
    ],
  },
  {
    title: "IT Support Intern",
    company: "Eydean Technologies",
    period: "Jan 2021 – Nov 2022",
    bullets: [
      "Assisted senior engineers with network troubleshooting and user support tasks.",
      "Documented IT processes and created user guides for standard operating procedures.",
      "Monitored system performance and recommended optimizations.",
    ],
  },
  {
    title: "Data Specialist",
    company: "CloudFactory",
    period: "Nov 2017 – Nov 2020",
    bullets: [
      "Extracted, analyzed, and managed large datasets, ensuring data accuracy and efficiency.",
      "Automated data processing workflows, reducing manual errors by 50%.",
      "Used data visualization tools to generate actionable insights and reports.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Experience</h2>
        <div className={styles.cards}>
          {experiences.map((exp) => (
            <div key={exp.title} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.role}>{exp.title}</div>
                <div className={styles.company}>{exp.company}</div>
                <div className={styles.period}>{exp.period}</div>
              </div>
              <ul className={styles.bullets}>
                {exp.bullets.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
