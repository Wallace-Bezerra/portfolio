"use client";
import * as S from "./styles";
import { CardTech } from "../CardTech";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import { useTranslations } from "next-intl";

export default function Tech() {
  const t = useTranslations("tech");

  return (
    <S.ContainerTech>
      <motion.h2
        className="title"
        variants={fadeIn("up", 0.3)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true }}
      >
        {t("title")}
      </motion.h2>
      <motion.div
        className="tech"
        variants={fadeIn("none", 0.2)}
        viewport={{ once: true }}
      >
        <CardTech />
        <S.Skills>
          <motion.h2
            variants={fadeIn("up", 0.5)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: true }}
          >
            <span>{t("skillsTitlePrefix")}</span> {t("skillsTitle")}
          </motion.h2>
          <motion.p
            className="side"
            variants={fadeIn("up", 0.5)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: true }}
          >
            {t("sideDescription")}
          </motion.p>
          <motion.p
            className="below"
            variants={fadeIn("up", 0.5)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: true }}
          >
            {t("belowDescription")}
          </motion.p>
        </S.Skills>
      </motion.div>
    </S.ContainerTech>
  );
}
