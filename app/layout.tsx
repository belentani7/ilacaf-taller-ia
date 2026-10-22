import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ILACAF — IA para Profesionales",
    template: "%s",
  },
  description: "Aula abierta: seis módulos de estudio, nueve lecciones complementarias y laboratorio interactivo de cinco casos sobre inteligencia artificial aplicada a auditoría, derecho y finanzas.",
  robots: { index: true, follow: true },
  keywords: ["ILACAF", "inteligencia artificial", "formación profesional", "auditoría", "derecho", "finanzas", "gobierno de IA"],
  openGraph: {
    title: "ILACAF — IA para Profesionales",
    description: "Aprende, verifica y aplica IA con criterio profesional. Programa didáctico abierto.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-[#070d16] font-sans text-slate-100 antialiased">{children}</body>
    </html>
  );
}
