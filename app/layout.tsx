import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ILACAF | Formación práctica en IA para profesionales",
  description:
    "Aprende inteligencia artificial aplicada a auditoría, derecho y finanzas: nueve lecciones, casos ficticios y laboratorio interactivo, sin registro.",
  keywords: [
    "IA",
    "inteligencia artificial",
    "taller",
    "ILACAF",
    "auditoría forense",
    "compliance",
    "finanzas",
    "Fernando Pérez Tapia",
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-50">
        {children}
      </body>
    </html>
  );
}
