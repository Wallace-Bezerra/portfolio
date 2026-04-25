'use client';
import { fadeIn } from '@/lib/variants';
import * as S from './styles';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const birthYear = 2002;

export default function About() {
  const year = new Date().getFullYear();
  const t = useTranslations('about');

  return (
    <S.ContainerAbout id="sobre">
      <motion.h2
        variants={fadeIn('up', 0.4)}
        initial={'hidden'}
        whileInView={'show'}
        viewport={{ once: true }}
      >
        {t('title')}
      </motion.h2>
      <div className="about">
        <S.AboutCard
          variants={fadeIn('up', 0.5)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{ once: true }}
        >
          <span>{t('location')}</span>
          <div>
            <p>{t('body1', { age: year - birthYear })}</p>
            <p>{t('body2')}</p>
          </div>
        </S.AboutCard>
      </div>
    </S.ContainerAbout>
  );
}
