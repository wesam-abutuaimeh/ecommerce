import { Inter } from "next/font/google";
import StyledComponentsRegistry from "./lib/registry";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-commerce",
  description: "E-commerce App Using Next.Js Framework && React.js Library",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
