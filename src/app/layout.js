// src/app/layout.js
// src/app/layout.js
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Rajiv Bhandari – Portfolio",
  description: "IT Support Engineer & Full-Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
