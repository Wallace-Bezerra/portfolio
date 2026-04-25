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
import { Card, CardProject } from './Card';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';
import { useTranslations } from 'next-intl';

const baseProjects: Omit<CardProject, 'title' | 'description'>[] = [
  {
    id: 'strino',
    src: '/projects/strino.webp',
    tag: 'UI/UX - NEXT.JS - TAILWIND CSS',
    urlView: 'https://www.strino.app/',
    isView: true,
  },
  {
    id: 'snapblend',
    src: '/projects/snapblend.webp',
    tag: 'UI/UX - NEXT.JS - TAILWIND CSS',
    urlView: 'https://www.snapblend.app/',
    isView: true,
  },
  {
    id: 'trut',
    src: '/projects/trut.webp',
    tag: 'UI/UX - NEXT.JS - TAILWIND CSS',
    urlView: 'https://www.trut.com.br/',
    isView: true,
  },
  {
    id: 'storyplus',
    src: '/projects/storyplus.webp',
    tag: 'UI/UX - NODE JS - NEXT.JS - TAILWIND CSS',
    urlView: 'https://www.valquiriabrito.com',
    isView: true,
  },
  {
    id: 'trinity',
    src: '/projects/trinity.webp',
    tag: 'UI/UX - NEXT.JS - TAILWIND CSS',
    urlView: 'https://trinityai.com.br/',
    isView: true,
  },
  {
    id: 'digitalBank',
    src: '/projects/dsf-project.jpg',
    tag: 'UI/UX - NEXT.JS - SASS',
    urlRepo: 'https://github.com/Wallace-Bezerra/dsf-bank-ThreeJs',
    urlView: 'https://dsf-bank-three-js.vercel.app/',
  },
  {
    id: 'bikcraft',
    src: '/projects/bikcraft-project.jpg',
    tag: 'UI/UX - HTML - CSS - JS',
    urlRepo: 'https://github.com/Wallace-Bezerra/Bikcraft',
    urlView: 'https://bikcraft-web.vercel.app',
  },
  {
    id: 'homeyou',
    src: '/projects/homeyou-project.jpg',
    tag: 'UI/UX - SASS - JAVASCRIPT',
    urlRepo: 'https://github.com/Wallace-Bezerra/HomeYou',
    urlView: 'https://wallace-bezerra.github.io/HomeYou/',
  },
  {
    id: 'blizzard',
    src: '/projects/lp-blizzard-project.jpg',
    tag: 'UI/UX - HTML - SASS - JS',
    urlRepo: 'https://github.com/Wallace-Bezerra/blizzard',
    urlView: 'https://wallace-bezerra.github.io/blizzard/',
  },
  {
    id: 'miniblog',
    src: '/projects/mini-blog-project.jpg',
    tag: 'UI/UX - REACT - SASS',
    urlRepo: 'https://github.com/Wallace-Bezerra/miniBlog',
    urlView: 'https://mini-blog-gamma.vercel.app/',
  },
  {
    id: 'githubApi',
    src: '/projects/git-api-projects.jpg',
    tag: 'UI/UX - REACT - TYPESCRIPT - STYLED COMPONENTS',
    urlRepo: 'https://github.com/Wallace-Bezerra/GitHub-Api',
    urlView: 'https://git-hub-api-wallace.vercel.app/',
  },
];

export default function Projects() {
  const t = useTranslations('projects');
  const tNav = useTranslations('navigation');
  const projects: CardProject[] = baseProjects.map((project) => ({
    ...project,
    title: t(`items.${project.id}.title`),
    description: t(`items.${project.id}.description`),
  }));
  const labels = {
    view: t('actions.view'),
    repo: t('actions.repo'),
  };

  return (
    <S.ContainerProjects id="projetos">
      <motion.div
        className="title"
        variants={fadeIn('up', 0.3)}
        initial={'hidden'}
        whileInView={'show'}
        viewport={{ once: true }}
      >
        <S.TitleWatermark aria-hidden>{tNav('projects')}</S.TitleWatermark>
        <motion.h3
          variants={fadeIn('up', 0.4)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{ once: true }}
        >
          {t('title')}
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
                  <Card project={project} labels={labels} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </S.ContainerSwiper>
      </S.SwiperWrapper>
    </S.ContainerProjects>
  );
}
