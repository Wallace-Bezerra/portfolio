'use client'
import { fadeIn } from "@/lib/variants"
import * as S from "./styles"
import { motion } from "framer-motion"
import Image from "next/image"

export const About = () => {
  const year = new Date().getFullYear()
  return (
    <S.ContainerAbout id="sobre">
      <motion.h2
        variants={fadeIn("up", 0.4)}
        initial={"hidden"}
        whileInView={'show'}
        viewport={{ once: true }}>Sobre mim</motion.h2 >
      <div className="about">
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial={"hidden"}
          whileInView={'show'}
          viewport={{ once: true }}
        >
          <Image src="/about-image.jpg" width={600} height={400} quality={100} priority alt="" />
        </motion.div>
        <S.AboutCard
          variants={fadeIn("up", 0.6)}
          initial={"hidden"}
          whileInView={'show'}
          viewport={{ once: true }}
        >
          <span> São Paulo - SP</span>
          <div>
            <p>
              Olá, meu nome é Wallace  tenho {year - 2002} anos e sou Desenvolvedor Front-End com experiência em React.js, Next.js, JavaScript, TypeScript, Styled Components entre outras tecnologias, Apaixonado pelo desenvolvimento de componentes reutilizáveis.
            </p>
            <p>
              Estou pronto para enfrentar novos desafios e contribuir com soluções inovadoras.
            </p>
          </div>
        </S.AboutCard>
      </div>
    </S.ContainerAbout>
  )
}
