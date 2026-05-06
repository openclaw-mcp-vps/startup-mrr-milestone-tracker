import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MRR Milestone Tracker — Celebrate Every Revenue Win",
  description: "Visual MRR milestone progress with automated team celebrations and investor updates for early-stage SaaS founders."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="907092ba-a089-4c28-baef-6b365f960ad5"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
