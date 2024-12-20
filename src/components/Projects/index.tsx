'use client';
import * as S from './styles';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Pagination,
  Navigation,
  HashNavigation,
  Keyboard,
} from 'swiper/modules';
import Image from 'next/image';
import { Card, CardProject } from './Card';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';

const projects: CardProject[] = [
  {
    id: 'trut',
    src: '/projects/trut.webp',
    tag: 'UI/UX - NEXT.JS - TAILWIND CSS',
    title: 'Landing Page Trut Ambientes Planejados',
    description:
      'Landing Page desenvolvida em Next.js, com design refinado e efeitos visuais que destacam a qualidade e elegância dos serviços de ambientes planejados da Trut.',
    urlView: 'https://www.trut.com.br/',
    isView: true,
  },
  {
    id: 'trinity',
    src: '/projects/trinity.webp',
    tag: 'UI/UX - NEXT.JS - TAILWIND CSS',
    title: 'Landing Page Trinity',
    description:
      'Landing Page sobre automações com IA e chatbots, criada para promover as soluções inovadoras da Trinity AI com um design moderno e interativo.',
    urlView: 'https://trinityai.com.br/',
    isView: true,
  },
  {
    id: 'Wallace2',
    src: '/projects/dsf-project.jpg',
    tag: 'UI/UX - NEXT.JS - SASS',
    title: 'Landing Page Digital Bank',
    description:
      'Landing Page para um banco digital, com animações fluidas e elementos interativos que proporcionam uma experiência imersiva.',
    urlRepo: 'https://github.com/Wallace-Bezerra/dsf-bank-ThreeJs',
    urlView: 'https://dsf-bank-three-js.vercel.app/',
  },
  {
    id: 'Wallace7',
    src: '/projects/bikcraft-project.jpg',
    tag: 'UI/UX - HTML - CSS - JS',
    title: 'Landing Page Bikcraft',
    description:
      'Landing Page sobre bicicletas elétricas de alta performance, com um design limpo e responsivo.',
    urlRepo: 'https://github.com/Wallace-Bezerra/Bikcraft',
    urlView: 'https://bikcraft-web.vercel.app',
  },
  {
    id: 'Wallace3',
    src: '/projects/homeyou-project.jpg',
    tag: 'UI/UX - SASS - JAVASCRIPT',
    title: 'Landing Page HomeYou',
    description:
      'Landing Page elegante para uma imobiliária, com foco em apresentar propriedades de maneira moderna e envolvente.',
    urlRepo: 'https://github.com/Wallace-Bezerra/HomeYou',
    urlView: 'https://wallace-bezerra.github.io/HomeYou/',
  },
  {
    id: 'Wallace8',
    src: '/projects/lp-neon-project.jpg',
    tag: 'UI/UX - HTML - SASS - JS',
    title: 'Landing Page Banco Neon',
    description:
      'Landing Page para um banco digital, com animações criativas e design profissional que destaca a inovação da marca.',
    urlRepo: 'https://github.com/Wallace-Bezerra/landingPage-Neon',
    urlView: 'https://lp-neon-bank.vercel.app/',
  },
  {
    id: 'Wallace9',
    src: '/projects/lp-blizzard-project.jpg',
    tag: 'UI/UX - HTML - SASS - JS',
    title: 'Landing Page Blizzard',
    description:
      'Landing Page para uma das maiores desenvolvedoras de jogos do mundo, com design imersivo e animações envolventes.',
    urlRepo: 'https://github.com/Wallace-Bezerra/blizzard',
    urlView: 'https://wallace-bezerra.github.io/blizzard/',
  },
  {
    id: 'Wallace5',
    src: '/projects/mini-blog-project.jpg',
    tag: 'UI/UX - REACT - SASS',
    title: 'MiniBlog',
    description:
      'Aplicação para criação e publicação de posts, permitindo interação e compartilhamento de conteúdos diversos.',
    urlRepo: 'https://github.com/Wallace-Bezerra/miniBlog',
    urlView: 'https://mini-blog-gamma.vercel.app/',
  },
  {
    id: 'Wallace6',
    src: '/projects/git-api-projects.jpg',
    tag: 'UI/UX - REACT - TYPESCRIPT - STYLED COMPONENTS',
    title: 'GitHub API',
    description:
      'Projeto que utiliza a API do GitHub para exibir informações detalhadas de usuários e repositórios.',
    urlRepo: 'https://github.com/Wallace-Bezerra/GitHub-Api',
    urlView: 'https://git-hub-api-wallace.vercel.app/',
  },
];

export default function Projects() {
  return (
    <S.ContainerProjects id="projetos">
      <motion.div
        className="title"
        variants={fadeIn('up', 0.3)}
        initial={'hidden'}
        whileInView={'show'}
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
          variants={fadeIn('up', 0.4)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{ once: true }}
        >
          Incríveis
        </motion.h3>
      </motion.div>
      <S.SwiperWrapper
        variants={fadeIn('up', 0.5)}
        initial={'hidden'}
        whileInView={'show'}
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
