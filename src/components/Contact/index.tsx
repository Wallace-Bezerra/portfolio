'use client'
import * as S from "./styles"
import Image from "next/image"
import { Button } from "../Button"
import { motion } from "framer-motion"
import { fadeIn } from "@/lib/variants"
export const Contact = () => {
  return (
    <S.ContainerContact>
      <div>
        <motion.h2
          variants={fadeIn("up", 0.4)}
          initial={"hidden"}
          whileInView={'show'}
          viewport={{ once: true }}>
          Vamos trabalhar juntos para deixar
        </motion.h2>
        <motion.p
          variants={fadeIn("up", 0.5)}
          initial={"hidden"}
          whileInView={'show'}
          viewport={{ once: true }}
        >Sua presença online incrível!</motion.p>
      </div>
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial={"hidden"}
        whileInView={'show'}
        viewport={{ once: true }}
      >
        <Button href="https://api.whatsapp.com/send?phone=5511965035851&text=Ol%C3%A1%2C%20gostaria%20de%20entrar%20em%20contato." target="_blank" variant="view">Contate-me</Button>
      </motion.div>
      <motion.div className="contacts"
        variants={fadeIn("up", 0.7)}
        initial={"hidden"}
        whileInView={'show'}
        viewport={{ once: true }}
      >
        <Button id="linkedin" href="https://www.linkedin.com/in/wallace-bezerra/" target="_blank" variant="outlined"><Image src="./linkedin.svg" width="36" height="36" alt="icone" /></Button>
        <Button id="instagram" href="https://www.instagram.com/wallace.bz/" target="_blank" variant="outlined"><Image src="./instagram-icone.svg" width="36" height="36" alt="icone" /> </Button>
        <Button id="github" href="https://github.com/Wallace-Bezerra" target="_blank" variant="outlined"><Image src="./github-icone.svg" width="36" height="36" alt="icone" /></Button>
      </motion.div>
    </S.ContainerContact >
  )
}
