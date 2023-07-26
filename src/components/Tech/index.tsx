'use client'
import * as S from "./styles"
import { CardTech } from "../CardTech"
import { motion } from "framer-motion"
import { fadeIn } from "@/lib/variants"
export const Tech = () => {
  return (
    <S.ContainerTech>
      <motion.h2 className="title"
        variants={fadeIn("up", 0.3)}
        initial={"hidden"}
        whileInView={'show'}
        viewport={{ once: true }}
      >Tecnologias</motion.h2>
      <motion.div className="tech"
        variants={fadeIn("none", 0.2)}
        viewport={{ once: true }}
      >
        <CardTech />
        <S.Skills>
          <motion.h2
            variants={fadeIn("up", 0.5)}
            initial={"hidden"}
            whileInView={'show'}
            viewport={{ once: true }}
          >
            <span>
              Minhas
            </span> Habilidades</motion.h2>
          <motion.p className="side"
            variants={fadeIn("up", 0.5)}
            initial={"hidden"}
            whileInView={'show'}
            viewport={{ once: true }}
          >
            Ao lado estão as tecnologias e frameworks que possuo habilidades e conhecimentos.
          </motion.p>
          <motion.p className="below"
            variants={fadeIn("up", 0.5)}
            initial={"hidden"}
            whileInView={'show'}
            viewport={{ once: true }}
          >
            Logo abaixo estão as tecnologias e frameworks que possuo habilidades e conhecimentos.
          </motion.p>
        </S.Skills>
      </motion.div >
    </S.ContainerTech >
  )
}
