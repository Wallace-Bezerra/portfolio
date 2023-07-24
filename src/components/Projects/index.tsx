'use client'
import * as S from "./styles"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, HashNavigation, Keyboard } from 'swiper/modules';
import Image from "next/image"
import { Card, CardProject } from "./Card";

const projects: CardProject[] = [
  {
    id: "Wallace2",
    src: '/projects/dsf-project.png',
    tag: "UI-UX  -  Next JS  -  Sass",
    title: "Landing Page Digital Bank",
    description: "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
    urlRepo: "https://github.com/Wallace-Bezerra/dsf-bank-ThreeJs",
    urlView: "https://dsf-bank-three-js.vercel.app/",
  },
  {
    id: "Wallace4",
    src: '/projects/travel-project.jpg',
    tag: "UI-UX  -  Next JS - TypeScript  -  Tailwind",
    title: "Site Reserva de hospedagens",
    description: "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
    urlRepo: "https://github.com/Wallace-Bezerra/trips-app",
    urlView: "https://travelnest-app-web.vercel.app/",
  },
  {
    id: "Wallace3",
    src: '/projects/homeyou-project.jpg',
    tag: "UI-UX  -  Sass - Javascript",
    title: "Landing Page HomeYou",
    description: "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
    urlRepo: "https://github.com/Wallace-Bezerra/HomeYou",
    urlView: "https://wallace-bezerra.github.io/HomeYou/",
  },
  {
    id: "Wallace1",
    src: '/projects/eukatie-project.jpg',
    tag: "UI-UX - React  -  Styled Components",
    title: "LinkTree Personalizado",
    description: "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
    urlRepo: "https://github.com/Wallace-Bezerra/katieLinks",
    urlView: "https://eukatie.vercel.app/",
  },
  {
    id: "Wallace5",
    src: '/projects/mini-blog-project.jpg',
    tag: "UI-UX  |  React |  Sass",
    title: "MiniBlog",
    description: "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
    urlRepo: "https://github.com/Wallace-Bezerra/miniBlog",
    urlView: "https://mini-blog-gamma.vercel.app/",
  },
  {
    id: "Wallace6",
    src: '/projects/git-api-projects.jpg',
    tag: "UI-UX  -  React  - TypeScript -  Styled Components",
    title: "GitHub Api",
    description: "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
    urlRepo: "https://github.com/Wallace-Bezerra/GitHub-Api",
    urlView: "https://git-hub-api-wallace.vercel.app/",
  },
  {
    id: "Wallace10",
    src: '/projects/linktree-full-project.jpg',
    tag: "UI-UX  -  React  -  Styled Components",
    title: "LinkTree Personalizado",
    description: "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
    urlRepo: "https://github.com/Wallace-Bezerra/LinktreeFull",
    urlView: "https://linktree-full.vercel.app/",
  },
  {
    id: "Wallace7",
    src: '/projects/bikcraft-project.jpg',
    tag: "UI-UX  -  Html - CSS  - JS ",
    title: "Landing Page Bikcraft",
    description: "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
    urlRepo: "https://github.com/Wallace-Bezerra/Bikcraft",
    urlView: "https://wallace-bikcraft-site.netlify.app/",
  },
  {
    id: "Wallace8",
    src: '/projects/lp-neon-project.jpg',
    tag: "UI-UX  -  Html  -  Sass - JS",
    title: "Landing Page Banco Neon",
    description: "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
    urlRepo: "",
    urlView: "https://wallace-lp-neon.netlify.app/",
  },
  {
    id: "Wallace9",
    src: '/projects/lp-blizzard-project.jpg',
    tag: "UI-UX  -  Html  -  Sass - JS",
    title: "Landing Page Blizzard",
    description: "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
    urlRepo: "https://github.com/Wallace-Bezerra/blizzard",
    urlView: "https://wallace-bezerra.github.io/blizzard/",
  },

  {
    id: "Wallace11",
    src: '/projects/nlw-project.jpg',
    tag: "UI-UX  -  Next JS - TypeScript  -  Tailwind",
    title: "Cápsula do Tempo",
    description: "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
    urlRepo: "https://github.com/Wallace-Bezerra/nlw-spaceTime-Web",
    urlView: "https://nlw-spacetimeweb.vercel.app/",
  },
]

export const Projects = () => {
  return (
    <S.ContainerProjects id="projetos">
      <div className="title">
        <Image src="/projetos-ilustration.svg" width={720} height={160} alt="" />
        <h3>Incríveis</h3>
      </div>
      <S.SwiperWrapper>
        <S.ContainerSwiper>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            grabCursor={true}
            breakpoints={{
              900: {
                slidesPerView: 2,
                spaceBetween: 30,
              }
            }
            }
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
            {projects.map((project) => {
              return (
                <SwiperSlide key={project.id}>
                  <Card project={project} />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </S.ContainerSwiper>
      </S.SwiperWrapper>
    </S.ContainerProjects >
  )
}
