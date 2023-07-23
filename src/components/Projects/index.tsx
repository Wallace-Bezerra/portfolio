'use client'
import * as S from "./styles"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, HashNavigation, Keyboard } from 'swiper/modules';
import { Card, CardProject } from "./Card";

const projects: CardProject[] = [
  {
    id: "Wallace2",
    src: '/projects/dsf-project.png',
    tag: "UI-UX  |  React  |  Styled Components",
    title: "LinkTree Personalizado",
    description: "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
    urlRepo: "",
    urlView: "",
  },
  {
    id: "Wallace3",
    src: '/projects/homeyou-project.jpg',
    tag: "UI-UX  |  React  |  Styled Components",
    title: "LinkTree Personalizado",
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
]


export const Projects = () => {
  return (
    <S.ContainerProjects id="projetos">
      <div className="title">
        <Image src="/projetos-ilustration.svg" width={720} height={160} alt="" />
        <h3>Incríveis</h3>
      </div>
      <S.SwiperWrapper>
        <S.Swiper
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
              <S.Slide key={project.id}>
                <Card project={project} />
              </S.Slide>
            )
          })}

        </S.Swiper>
      </S.SwiperWrapper>
    </S.ContainerProjects >
  )
}
