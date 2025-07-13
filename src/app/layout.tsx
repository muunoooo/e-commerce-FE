import ApolloWrapper from "@/components/ApolloWrapper";
import "./globals.css";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/layout/Navbar";

export const metadata = {
  title: "Frontend Catalog",
  description: "Catalog with GraphQL + Next.js",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ApolloWrapper>
          <Navbar />
          {children}
          <Toaster position="top-right" />
        </ApolloWrapper>
      </body>
    </html>
  );
}
