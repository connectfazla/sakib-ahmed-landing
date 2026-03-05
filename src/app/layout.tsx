import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sakib Ahmed | SEO Expert & WordPress Developer",
  description: "Premium SEO and WordPress solutions for growth-focused brands.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
