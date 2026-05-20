import "./globals.css";
import Navbar from "@/components/Navbar";

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
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
