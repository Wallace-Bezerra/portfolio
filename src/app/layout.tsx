import { Analytics } from "@vercel/analytics/react";
import ClientComponent from "@/lib/ClientComponent";
import StyledComponentsRegistry from "@/lib/registry";
import { Header } from "@/components/Header";
import { GlobalStyle } from "@/styles/GlobalStyle";
import { Rubik, Barlow } from "next/font/google";
import type { Metadata } from "next";
import Head from "next/head";
import { Footer } from "@/components/Footer";

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
  title: "Wallace Bezerra | Desenvolvedor Front-end",
  description:
    "Desenvolvedor Front-end com Experiência em React.js , Next.js , TypeScript,  Styled Components, Tailwind.",
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
      <body>
        {/* <body className={`${rubik.className} ${barlow.className}`}> */}
        <ClientComponent>
          <StyledComponentsRegistry>
            <GlobalStyle />
            <Header />
            {children}
            <Analytics />
            <Footer />
          </StyledComponentsRegistry>
        </ClientComponent>
      </body>
    </html>
  );
}
