import type { Metadata } from "next";
import { CartProvider } from "@/lib/cart-store";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://maillot-mystere.example"),
  title: { default: "Maillot Mystère — Coffrets mystères de maillots de football", template: "%s | Maillot Mystère" },
  description: "Commandez une box mystère premium et découvrez un maillot de football surprise parmi clubs, nations, championnats et éditions rares.",
  openGraph: { title: "Maillot Mystère", description: "Le coffret surprise premium pour passionnés de football.", type: "website", locale: "fr_FR" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="fr"><body><CartProvider><Header /><main>{children}</main><Footer /><CartDrawer /></CartProvider></body></html>;
}
