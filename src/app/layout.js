"use client";

import { Inter } from "next/font/google";
import StyledComponentsRegistry from "./lib/registry";
import ErrorBoundary from "@/components/ErrorBoundry";
import AuthContext from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import "./globals.css";
import { ROLES } from "@/constants/roles";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ecommerce",
  description: "E-commerce App Using Next.Js Framework && React.js Library",
};

export default function RootLayout({ children }) {
  const token = localStorage.getItem("token");
  const router = useRouter();
  if (!token) {
    router.push("/signin");
    router.push("/register");
  }
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ErrorBoundary>
          <AuthContext>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </AuthContext>
        </ErrorBoundary>
      </body>
    </html>
  );
}
