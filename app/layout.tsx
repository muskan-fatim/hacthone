import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/footer";
import { ClerkProvider } from "@clerk/nextjs";
import { NotificationProvider } from "./context/NotificationContext";

export const metadata: Metadata = {
  title: "Hackthone",
  description: "hackthone 3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider>
          <NotificationProvider>
            {children}
          </NotificationProvider>
          <Footer />
        </ClerkProvider>
      </body>
    </html>
  );
}
