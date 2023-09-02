import { Inter } from "next/font/google";
import StyledComponentsRegistry from "./lib/registry";
import ErrorBoundary from "@/components/ErrorBoundry";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ecommerce",
  description: "E-commerce App Using Next.Js Framework && React.js Library",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ErrorBoundary>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </ErrorBoundary>
      </body>
    </html>
  );
}
