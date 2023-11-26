import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FluentProvider, webDarkTheme } from "@fluentui/react-components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FluentProvider theme={webDarkTheme}>{children}</FluentProvider>
      </body>
    </html>
  );
}
