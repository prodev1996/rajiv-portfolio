// src/app/components/Hero.jsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <motion.section
      id="home"
      className={styles.section}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className={styles.text}
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <h1 className={styles.title}>Hi, I’m Rajiv Bhandari</h1>
        <p className={styles.subtitle}>
          IT Support Engineer & Full-Stack Developer
        </p>
        <a href="#contact" className={styles.cta}>
          Let’s Connect
        </a>
      </motion.div>

      <motion.div
        className={styles.imageWrapper}
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <Image
          src="/avatar.jpg"
          alt="Rajiv Bhandari"
          width={256}
          height={256}
          className="object-cover rounded-full shadow-xl"
        />
      </motion.div>
    </motion.section>
  );
}
