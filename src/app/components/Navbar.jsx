// src/app/components/Navbar.jsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const links = [
  { href: "#home",     label: "Home"       },
  { href: "#about",    label: "About"      },
  { href: "#skills",   label: "Skills"     },
  { href: "#experience", label: "Experience" },
  { href: "#contact",  label: "Contact"    },
];

export default function Navbar() {
  const pathname = usePathname();      // e.g. "/"
  const [hash, setHash] = useState(""); // e.g. "#about"
  const [mounted, setMounted] = useState(false);

  // Only run on the client after hydration
  useEffect(() => {
    setMounted(true);
    // set initial hash
    setHash(window.location.hash);
    // listen for future hashchanges
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {links.map(({ href, label }) => {
          // build the “current” comparison string
          const full = pathname + href;
          // only apply .active after we've mounted
          const isActive = mounted && (full === window.location.pathname + hash);
          return (
            <li key={href}>
              <Link
                href={href}
                className={`${styles.navLink} ${isActive ? styles.active : ""}`}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
