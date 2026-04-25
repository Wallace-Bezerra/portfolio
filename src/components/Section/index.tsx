'use client'
import * as S from "./styles"
import Image from "next/image"
import { motion } from "framer-motion"
import { fadeIn } from "@/lib/variants"
import { useTranslations } from "next-intl"

export default function Section(){
  const t = useTranslations("section")

  return (
    <S.SectionContainer>
      <motion.div
        className="and-icone"
        variants={fadeIn("up", 0.3)}
        initial={"hidden"}
        whileInView={'show'}
        viewport={{ once: true }}
      >
        <Image src="/and-icone.svg" width={300} height={160} priority alt="" />
      </motion.div>
      <S.TopicsContainer>
        <motion.h2
          variants={fadeIn("up", 0.3)}
          initial={"hidden"}
          whileInView={'show'}
          viewport={{ once: true }}
        >
          {t("titleTop")}
          <span>{t("titleBottom")}</span>
        </motion.h2>
        <div className="topics">
          <motion.div className="textTopic"
            variants={fadeIn("up", 0.4)}
            initial={"hidden"}
            whileInView={'show'}
            viewport={{ once: true }}>
            <h3>{t("goalTitle")}</h3>
            <p>{t("goalDescription")}</p>
          </motion.div>
          <motion.div className="textTopic"
            variants={fadeIn("up", 0.5)}
            initial={"hidden"}
            whileInView={'show'}
            viewport={{ once: true }}>
            <h3>{t("solutionsTitle")}</h3>
            <p>{t("solutionsDescription")}</p>
          </motion.div>
        </div>
      </S.TopicsContainer>
      <S.VsCode
        variants={fadeIn("up", 0.3)}
        initial={"hidden"}
        whileInView={'show'}
        viewport={{ once: true }}
      >
        <div className="image-container">
          <Image className="vscode-ilustration" src="/vs-code-ilustration.svg" width={400} height={330} priority alt="" />
          <Image className="chave-1" src="/chave-1.svg" width={96} height={250} priority alt="" />
          <Image className="vscode-icon" src="/vs-code-icon.svg" width={120} height={120} priority alt="" />
          <Image className="chave-2" src="/chave-2.svg" width={96} height={250} priority alt="" />
          <div className="bugs">
            <Image className="bug-1" src="/bug-icone.svg" width={40} height={40} priority alt="" />
            <Image className="bug-2" src="/bug2-icone.svg" width={40} height={40} priority alt="" />
          </div>
        </div>
        <p>{t("vscodeDescription")}</p>
      </S.VsCode>
    </S.SectionContainer >
  )
}
