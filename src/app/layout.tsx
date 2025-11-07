import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ClientComponent from "@/lib/ClientComponent";
import StyledComponentsRegistry from "@/lib/registry";
import { Header } from "@/components/Header";
import { GlobalStyle } from "@/styles/GlobalStyle";
import { Rubik, Barlow } from "next/font/google";
import type { Metadata } from "next";
import Head from "next/head";
import { Footer } from "@/components/Footer";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
const barlow = Barlow({
  subsets: ["latin"],
  style: "normal",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Wallace Bezerra | Desenvolvedor FullStack",
  description:
    "Desenvolvedor FullStack com Experiência em React.js, Next.js, TypeScript, Styled Components, Tailwind. Oferecendo serviços de alta qualidade em desenvolvimento web. Transforme sua visão em realidade com um profissional que valoriza a usabilidade, performance e design responsivo.",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html style={{ position: "relative" }} lang="pt-br">
      <Head>
        <link
          rel="preload"
          href="https://unpkg.com/swiper/css/swiper.min.css"
          as="style"
        />
      </Head>
      <GoogleTagManager gtmId="G-PSWY0JZ5S5" />
      <GoogleAnalytics gaId="G-PSWY0JZ5S5" />
      <body>
        <ClientComponent>
          <StyledComponentsRegistry>
            <GlobalStyle />
            <Header />
            {children}
            <Analytics />
            <SpeedInsights />
            <Footer />
          </StyledComponentsRegistry>
        </ClientComponent>
      </body>
    </html>
  );
}
