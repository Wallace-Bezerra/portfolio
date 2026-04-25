'use client';
import * as S from './styles';
import { Button } from '../Button';
import Image from 'next/image';
import { fadeIn } from '@/lib/variants';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Fragment } from 'react';

export default function Profile() {
  const t = useTranslations('profile');
  const whatsappUrl = `https://api.whatsapp.com/send?phone=5511965035851&text=${encodeURIComponent(
    t('whatsappMessage')
  )}`;

  return (
    <S.ProfileContainer>
      <div>
        <S.Emphasis
          variants={fadeIn('up', 0.2)}
          initial={'hidden'}
          animate={'show'}
          transition={{
            staggerChildren: 0.2,
          }}
        >
          <span>{t('eyebrow')}</span>
          <motion.h1 variants={fadeIn('up', 0.2)}>
            {t('title').split('\n').map((line, i, arr) => (
              <Fragment key={i}>{line}{i < arr.length - 1 && <br />}</Fragment>
            ))}
          </motion.h1>
          <motion.p>{t('description')}</motion.p>
          <Image
            className="vscode-background"
            src="/vscode-background.svg"
            width={400}
            height={400}
            priority
            alt=""
          />
        </S.Emphasis>
        <S.Contact
          variants={fadeIn('up', 0.3)}
          initial={'hidden'}
          animate={'show'}
        >
          <Button
            href={whatsappUrl}
            target="_blank"
            variant="primary"
          >
            {t('contact')}
          </Button>
          <div className="group-button">
            <Button
              href="https://github.com/Wallace-Bezerra"
              target="_blank"
              variant="outlined"
            >
              GitHub
            </Button>
            <Button
              id="linkedin"
              href="https://www.linkedin.com/in/wallace-bezerra/"
              target="_blank"
              variant="outlined"
            >
              <Image
                src="./linkedin.svg"
                width="36"
                height="36"
                priority
                alt={t('linkedinAlt')}
              />
            </Button>
          </div>
        </S.Contact>
      </div>
      <S.ProfileUser
        variants={fadeIn('up', 0.3)}
        initial={'hidden'}
        whileInView={'show'}
        viewport={{ once: true }}
      >
        <S.Image>
          <div className="blur"></div>
          <Image
            className="profile"
            src="/profile.webp"
            width={419}
            height={745}
            priority
            alt={t('profileAlt')}
          />
        </S.Image>
        <S.Spinner>
          <Image
            className="name-spinner"
            src="/name-Spinner.png"
            width={256}
            height={256}
            priority
            alt="Wallace Bezerra"
          />
          <Image
            className="logo-spinner"
            src="/logo.svg"
            width={75}
            height={26}
            alt=""
            priority
          />
        </S.Spinner>
        <div className="react-element">
          <Image
            src="/react-element.svg"
            width={50}
            height={50}
            priority
            alt=""
          />
        </div>
        <div className="icone-computer">
          <Image
            src="/icone-computer.svg"
            width={50}
            height={50}
            priority
            alt=""
          />
        </div>
        <div className="tree-structure">
          <Image
            src="/tree-structure.svg"
            width={70}
            height={70}
            priority
            alt=""
          />
        </div>
        <Image
          className="pointer"
          src="/pointer.png"
          width={81}
          priority
          height={90}
          alt=""
        />
      </S.ProfileUser>
    </S.ProfileContainer>
  );
}
