'use client';
import * as S from './styles';
import { Button } from '../Button';
import Image from 'next/image';
import { fadeIn } from '@/lib/variants';
import { motion } from 'framer-motion';

export default function Profile() {
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
          <span>Olá, eu sou</span>
          <motion.h1 variants={fadeIn('up', 0.2)}>
            Desenvolvedor de Apps e Sites
          </motion.h1>
          <motion.p>
            Eu crio apps e sites que as pessoas curtem usar. Gosto de juntar
            design com funcionalidade, sem enrolação. A ideia é sempre
            transformar algo simples em algo legal de verdade.
          </motion.p>
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
            href="https://api.whatsapp.com/send?phone=5511965035851&text=Ol%C3%A1%2C%20gostaria%20de%20entrar%20em%20contato."
            target="_blank"
            variant="primary"
          >
            Contate-me
          </Button>
          <div className="group-button">
            {/* <Button
              href="https://github.com/Wallace-Bezerra"
              target="_blank"
              variant="outlined"
            >
              GitHub
            </Button> */}
            <Button
              href="https://tocnuncamais.vercel.app/"
              target="_blank"
              variant="outlined"
            >
              TESTE
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
                alt="icone"
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
            alt="profile"
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
