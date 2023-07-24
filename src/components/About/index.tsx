import * as S from "./styles"
import Image from "next/image"

export const About = () => {
  const year = new Date().getFullYear()
  return (
    <S.ContainerAbout id="sobre">
      <h2>Sobre mim</h2>
      <div className="about">
        <Image src="/about-image.jpg" width={400} height={500} priority alt="" />
        <S.AboutCard>
          <span> São Paulo - SP</span>
          <div>
            <p>
              Olá, meu nome é Wallace  tenho {year - 2002} anos e sou Desenvolvedor Front-End com experiência em React.js, Next.js, JavaScript, TypeScript, Styled Components entre outras tecnologias, Apaixonado pelo desenvolvimento de componentes reutilizáveis.
            </p>
            <p>
              Estou pronto para enfrentar novos desafios e contribuir com soluções inovadoras.
            </p>
          </div>
        </S.AboutCard>
      </div>
    </S.ContainerAbout>
  )
}
