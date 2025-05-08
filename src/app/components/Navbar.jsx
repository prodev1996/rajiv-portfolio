"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link href={href} className={styles.navLink}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
