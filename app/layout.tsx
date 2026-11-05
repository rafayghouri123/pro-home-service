import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Pro Home Service | Professional Cleaning in Oranmore",
  description: "Residential, window, pressure washing, end of tenancy and post renovation cleaning from Pro Home Service in Oranmore, Ireland.",
  icons: { icon: "/favicon.svg" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
