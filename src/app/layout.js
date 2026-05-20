import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
const inter = JetBrains_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Muhammad Rayhan Abdillah | Odoo Developer & Web Developer",
  description:
    "Odoo Developer and Web Developer focused on ERP customization, Laravel web development, API integration, automation, and AI-powered business tools.",
  keywords: [
    "Odoo Developer",
    "Laravel Developer",
    "Web Developer",
    "ERP",
    "Python",
    "PostgreSQL",
    "PHP",
    "AI",
    "LLM",
    "Automation",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
