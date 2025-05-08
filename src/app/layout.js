// src/app/layout.js
import "./globals.css";    // ← this must point to src/app/globals.css
import Navbar from "./components/Navbar";

export const metadata = { /* … */ };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Navbar />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
