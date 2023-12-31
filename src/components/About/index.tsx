"use client";
import { fadeIn } from "@/lib/variants";
import * as S from "./styles";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const year = new Date().getFullYear();
  return (
    <S.ContainerAbout id="sobre">
      <motion.h2
        variants={fadeIn("up", 0.4)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true }}
      >
        Sobre mim
      </motion.h2>
      <div className="about">
        <motion.div
          className="wrapper"
          variants={fadeIn("up", 0.5)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: true }}
        >
          <div className="bg-aboutImage">
            <Image
              className="about-image"
              src="/about-image.png"
              width={240}
              height={470}
              alt=""
            />
            <Image
              className="vscode-bar"
              src="/vscode-bar.png"
              width={100}
              height={480}
              priority
              alt=""
            />
            <Image
              className="vscode-icon"
              src="/vs-code-icon.svg"
              width={129}
              height={129}
              priority
              alt=""
            />
            <Image
              className="figma"
              src="/tech/figma-tech-icone.svg"
              width={106}
              height={161}
              priority
              alt=""
            />
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: true }}
              className="blur"
            ></motion.div>
          </div>
        </motion.div>

        <S.AboutCard
          variants={fadeIn("up", 0.5)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: true }}
        >
          <span> São Paulo - SP</span>
          <div>
            <p>
              Olá, meu nome é Wallace tenho {year - 2002} anos e sou
              Desenvolvedor FullStack com experiência em React.js, Next.js,
              JavaScript, Node, TypeScript, Styled Components entre outras
              tecnologias, Apaixonado pelo desenvolvimento de componentes
              reutilizáveis.
            </p>
            <p>
              Estou pronto para enfrentar novos desafios e contribuir com
              soluções inovadoras.
            </p>
          </div>
        </S.AboutCard>
      </div>
    </S.ContainerAbout>
  );
}
