import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ClientComponent from "@/lib/ClientComponent";
import StyledComponentsRegistry from "@/lib/registry";
import { GlobalStyle } from "@/styles/GlobalStyle";
import type { Metadata } from "next";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Wallace Bezerra | Desenvolvedor FullStack",
  description:
    "Desenvolvedor FullStack especializado em apps, sites e interfaces modernas com React, React Native, Next.js e TypeScript.",
  keywords: [
    "Wallace Bezerra",
    "Wallace",
    "Desenvolvedor FullStack",
    "Full Stack",
    "Full-Stack",
    "Fullstack",
    "Programador",
    "Desenvolvedor",
    "São Paulo",
    "SP",
    "React.js",
    "Next.js",
    "Desenvolvimento Web",
    "UI/UX Design",
    "Front-end Engineering",
    "Web Design",
    "Performance Optimization",
    "Mobile-First Development",
    "User Interface Development",
    "HTML/CSS",
    "JavaScript",
    "React Development",
    "Next.js Development",
    "Web Development Services",
    "Website Design",
    "Web Performance Optimization",
    "Cross-Browser Compatibility",
    "Responsive Web Design",
    "High-Quality Development",
    "Digital Transformation",
    "Front-end Solutions",
    "Front-end Expert",
  ],
  creator: "Wallace Bezerra",
  metadataBase: new URL("https://www.wallacebezerra.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html style={{ position: "relative" }} lang="pt-BR">
      <head>
        <link
          rel="preload"
          href="https://unpkg.com/swiper/css/swiper.min.css"
          as="style"
        />
      </head>
      <GoogleTagManager gtmId="G-PSWY0JZ5S5" />
      <GoogleAnalytics gaId="G-PSWY0JZ5S5" />
      <body>
        <ClientComponent>
          <StyledComponentsRegistry>
            <GlobalStyle />
            {children}
            <Analytics />
            <SpeedInsights />
          </StyledComponentsRegistry>
        </ClientComponent>
      </body>
    </html>
  );
}
