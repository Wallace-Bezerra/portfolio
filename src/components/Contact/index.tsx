"use client";
import * as S from "./styles";
import Image from "next/image";
import { Button } from "../Button";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("contact");
  const profile = useTranslations("profile");
  const whatsappUrl = `https://api.whatsapp.com/send?phone=5511965035851&text=${encodeURIComponent(
    profile("whatsappMessage")
  )}`;

  return (
    <S.ContainerContact>
      <div>
        <motion.h2
          variants={fadeIn("up", 0.4)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: true }}
        >
          {t("title")}
        </motion.h2>
        <motion.p
          variants={fadeIn("up", 0.5)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: true }}
        >
          {t("subtitle")}
        </motion.p>
      </div>
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true }}
      >
        <Button
          href={whatsappUrl}
          target="_blank"
          variant="view"
        >
          {t("button")}
        </Button>
      </motion.div>
      <motion.div
        className="contacts"
        variants={fadeIn("up", 0.7)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true }}
      >
        <Button
          id="linkedin-contact"
          href="https://www.linkedin.com/in/wallace-bezerra/"
          target="_blank"
          variant="outlined"
        >
          <Image src="/linkedin.svg" width="36" height="36" alt={t("linkedinAlt")} />
        </Button>
        <Button
          id="instagram"
          href="https://www.instagram.com/wallace.bz/"
          target="_blank"
          variant="outlined"
        >
          <Image
            src="./instagram-icone.svg"
            width="36"
            height="36"
            alt={t("instagramAlt")}
          />{" "}
        </Button>
        <Button
          id="github"
          href="https://github.com/Wallace-Bezerra"
          target="_blank"
          variant="outlined"
        >
          <Image src="/github-icone.svg" width="36" height="36" alt={t("githubAlt")} />
        </Button>
      </motion.div>
    </S.ContainerContact>
  );
}
