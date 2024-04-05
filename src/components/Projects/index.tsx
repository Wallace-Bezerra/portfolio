"use client";
import * as S from "./styles";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Navigation,
  HashNavigation,
  Keyboard,
} from "swiper/modules";
import Image from "next/image";
import { Card, CardProject } from "./Card";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const projects: CardProject[] = [
  {
    id: "Wallace2",
    src: "/projects/dsf-project.jpg",
    tag: "UI-UX  -  Next JS  -  Sass",
    title: "Landing Page Digital Bank",
    description: "Landing Page simples com algumas animações e efeitos.",
    urlRepo: "https://github.com/Wallace-Bezerra/dsf-bank-ThreeJs",
    urlView: "https://dsf-bank-three-js.vercel.app/",
  },
  {
    id: "Wallace2",
    src: "/projects/food-delivery-project.webp",
    tag: "UI-UX  -  Next JS - TypeScript  -  Tailwind",
    title: "Food Delivery",
    description:
      "Projeto FullStack para realizar pedidos de delivery, enviando pelo whatsApp. Onde possui um painel administrativo separado para gerenciar os produtos e etc.",
    // urlRepo: "https://github.com/Wallace-Bezerra/food-delivery-store",
    urlView: "https://food-delivery-store.vercel.app/",
  },
  {
    id: "Wallace7",
    src: "/projects/bikcraft-project.jpg",
    tag: "UI-UX  -  Html - CSS  - JS ",
    title: "Landing Page Bikcraft",
    description: "Site sobre Bicicletas elétricas de alta precisão",
    urlRepo: "https://github.com/Wallace-Bezerra/Bikcraft",
    urlView: "https://wallace-bikcraft-site.netlify.app/",
  },
  // {
  //   id: "Wallace4",
  //   src: "/projects/travel-project.jpg",
  //   tag: "UI-UX  -  Next JS - TypeScript  -  Tailwind",
  //   title: "Site Reserva de hospedagens",
  //   description: "Projeto Fullstack site de busca de viagens e hospedagens!",
  //   urlRepo: "https://github.com/Wallace-Bezerra/trips-app",
  //   urlView: "https://travelnest-app-web.vercel.app/",
  // },
  {
    id: "Wallace3",
    src: "/projects/homeyou-project.jpg",
    tag: "UI-UX  -  Sass - Javascript",
    title: "Landing Page HomeYou",
    description: "Landing Page moderna de uma imobiliaria.",
    urlRepo: "https://github.com/Wallace-Bezerra/HomeYou",
    urlView: "https://wallace-bezerra.github.io/HomeYou/",
  },
  {
    id: "Wallace8",
    src: "/projects/lp-neon-project.jpg",
    tag: "UI-UX  -  Html  -  Sass - JS",
    title: "Landing Page Banco Neon",
    description: "Landing Page de um banco digital, com animações e efeitos.",
    urlRepo: "https://github.com/Wallace-Bezerra/landingPage-Neon",
    urlView: "https://lp-neon-bank.vercel.app/",
  },
   {
    id: "Wallace9",
    src: "/projects/lp-blizzard-project.jpg",
    tag: "UI-UX  -  Html  -  Sass - JS",
    title: "Landing Page Blizzard",
    description:
      "Landing Page de uma das grandes desenvolvedoras da indústria de jogos.",
    urlRepo: "https://github.com/Wallace-Bezerra/blizzard",
    urlView: "https://wallace-bezerra.github.io/blizzard/",
  },
  {
    id: "Wallace1",
    src: "/projects/eukatie-project.jpg",
    tag: "UI-UX - React  -  Styled Components",
    title: "LinkTree Personalizado",
    description: "Site com links personalizados e descrições.",
    urlRepo: "https://github.com/Wallace-Bezerra/katieLinks",
    urlView: "https://eukatie.vercel.app/",
  },
  {
    id: "Wallace5",
    src: "/projects/mini-blog-project.jpg",
    tag: "UI-UX  |  React |  Sass",
    title: "MiniBlog",
    description:
      "Projeto feito para publicarmos posts, nele podemos criar uma conta e postar sobre qualquer assunto.",
    urlRepo: "https://github.com/Wallace-Bezerra/miniBlog",
    urlView: "https://mini-blog-gamma.vercel.app/",
  },
  {
    id: "Wallace6",
    src: "/projects/git-api-projects.jpg",
    tag: "UI-UX  -  React  - TypeScript -  Styled Components",
    title: "GitHub Api",
    description:
      "Esse é o GitApi nele podemos acessar e exibir dados de usuários do GitHub usando a API do GitHub.",
    urlRepo: "https://github.com/Wallace-Bezerra/GitHub-Api",
    urlView: "https://git-hub-api-wallace.vercel.app/",
  },
  {
    id: "Wallace10",
    src: "/projects/linktree-full-project.jpg",
    tag: "UI-UX  -  React  -  Styled Components",
    title: "LinkTree Personalizado",
    description: "Site com links personalizados e descrições com slides.",
    urlRepo: "https://github.com/Wallace-Bezerra/LinktreeFull",
    urlView: "https://linktree-full.vercel.app/",
  },
  {
    id: "Wallace11",
    src: "/projects/nlw-project.jpg",
    tag: "UI-UX  -  Next JS - TypeScript  -  Tailwind",
    title: "Cápsula do Tempo",
    description:
      "Sua cápsula do tempo, colecione momentos marcantes da sua jornada e compartilhe se quiser com o mundo!",
    urlRepo: "https://github.com/Wallace-Bezerra/nlw-spaceTime-Web",
    urlView: "https://nlw-spacetimeweb.vercel.app/",
  },
];

export default function Projects() {
  return (
    <S.ContainerProjects id="projetos">
      <motion.div
        className="title"
        variants={fadeIn("up", 0.3)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true }}
      >
        <Image
          src="/projetos-ilustration.svg"
          width={720}
          height={160}
          priority
          alt=""
        />
        <motion.h3
          variants={fadeIn("up", 0.4)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: true }}
        >
          Incríveis
        </motion.h3>
      </motion.div>
      <S.SwiperWrapper
        variants={fadeIn("up", 0.5)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true }}
      >
        <S.ContainerSwiper>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            grabCursor={true}
            breakpoints={{
              900: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
            keyboard={{
              enabled: true,
            }}
            hashNavigation={{
              watchState: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Keyboard, Navigation, HashNavigation]}
            className="mySwiper"
          >
            {projects.map((project, index) => {
              return (
                <SwiperSlide data-hash={`slide${index}`} key={project.id}>
                  <Card project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </S.ContainerSwiper>
      </S.SwiperWrapper>
    </S.ContainerProjects>
  );
}
