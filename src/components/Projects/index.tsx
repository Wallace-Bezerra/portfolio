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
    tag: "UI-UX  |  React  |  Styled Components",
    title: "Landing Page Digital Bank",
    description: "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
    urlRepo: "",
    urlView: "",
  },
  {
    id: "Wallace3",
    src: '/projects/homeyou-project.jpg',
    tag: "UI-UX  |  React  |  Styled Components",
    title: "Landing Page HomeYou",
    description: "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
    urlRepo: "",
    urlView: "",
  },
  {
    id: "Wallace1",
    src: '/projects/eukatie-project.jpg',
    tag: "UI-UX  |  React  |  Styled Components",
    title: "LinkTree Personalizado",
    description: "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
    urlRepo: "",
    urlView: "",
  },
  {
    id: "Wallace4",
    src: '/projects/travel-project.jpg',
    tag: "UI-UX  |  React  |  Styled Components",
    title: "Site Reserva de hospedagens",
    description: "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
    urlRepo: "",
    urlView: "",
  },
  {
    id: "Wallace5",
    src: '/projects/mini-blog-project.jpg',
    tag: "UI-UX  |  React  |  Styled Components",
    title: "MiniBlog",
    description: "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
    urlRepo: "",
    urlView: "",
  },
  {
    id: "Wallace6",
    src: '/projects/git-api-projects.jpg',
    tag: "UI-UX  |  React  |  Styled Components",
    title: "GitHub Api",
    description: "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
    urlRepo: "",
    urlView: "",
  },
  {
    id: "Wallace7",
    src: '/projects/bikcraft-project.jpg',
    tag: "UI-UX  |  React  |  Styled Components",
    title: "Landing Page Bikcraft",
    description: "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
    urlRepo: "",
    urlView: "",
  },
  {
    id: "Wallace8",
    src: '/projects/lp-neon-project.jpg',
    tag: "UI-UX  |  Html  |  Sass",
    title: "Landing Page Banco Neon",
    description: "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
    urlRepo: "",
    urlView: "",
  },
  {
    id: "Wallace9",
    src: '/projects/lp-blizzard-project.jpg',
    tag: "UI-UX  |  Html  |  Sass",
    title: "Landing Page Blizzard",
    description: "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
    urlRepo: "",
    urlView: "",
  },
  {
    id: "Wallace10",
    src: '/projects/linktree-full-project.jpg',
    tag: "UI-UX  |  Html  |  Sass",
    title: "LinkTree Personalizado",
    description: "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
    urlRepo: "",
    urlView: "",
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
