import { CardTech } from "../CardTech"
import * as S from "./styles"

export const Tech = () => {
  return (
    <S.ContainerTech>
      <h2 className="title">Tecnologias</h2>
      <div className="tech">
        <CardTech />
        <S.Skills>
          <h2>
            <span>
              Minhas
            </span> Habilidades</h2>
          <p className="side">
            Ao lado estão as tecnologias e frameworks que possuo habilidades e conhecimentos.
          </p>
          <p className="below">
            Logo abaixo estão as tecnologias e frameworks que possuo habilidades e conhecimentos.
          </p>
        </S.Skills>
      </div>
    </S.ContainerTech>
  )
}
