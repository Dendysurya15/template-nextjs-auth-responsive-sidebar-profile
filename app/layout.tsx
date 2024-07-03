"use client";

// RootLayout.tsx
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import LayoutProject from "@/components/LayoutProject/page";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import LoginPageComponent from "@/components/login/login";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={inter.className}>
        <html lang="en">
          <body className={inter.className}>
            {pathname === "/login" ? (
              <LoginPageComponent />
            ) : (
              <LayoutProject>{children}</LayoutProject>
            )}
          </body>
        </html>
      </body>
    </html>
  );
};

export default RootLayout;
