import * as S from "./styles"
import Image from "next/image"
export const Section = () => {
  return (
    <S.SectionContainer>
      <Image className="and-icone" src="/and-icone.svg" width={300} height={160} alt="" />
      <S.TopicsContainer>
        <h2>
          Desenvolvimento
          <span>Tecnologia</span>
        </h2>
        <div className="topics">
          <div className="textTopic">
            <h3>IMPULSIONO SEU OBJETIVO</h3>
            <p>Meu objetivo é desenvolver interfaces atraentes e intuitivas que melhorem a usabilidade e satisfação dos usuários.</p>
          </div>
          <div className="textTopic">
            <h3>SOLUÇOES CRIATIVAS | DESIGN RESPONSIVO</h3>
            <p>Ao garantir que seu site seja responsivo, você está preparado para enfrentar os desafios do mundo digital e oferecer o melhor para seus visitantes.</p>
          </div>
        </div>
      </S.TopicsContainer>
      <S.VsCode>
        <div className="image-container">
          <Image className="vscode-ilustration" src="/vs-code-ilustration.svg" width={400} height={330} alt="" />
          <Image className="chave-1" src="/chave-1.svg" width={96} height={250} alt="" />
          <Image className="vscode-icon" src="/vs-code-icon.svg" width={120} height={120} alt="" />
          <Image className="chave-2" src="/chave-2.svg" width={96} height={250} alt="" />
          <div className="bugs">
            <Image className="bug-1" src="/bug-icone.svg" width={40} height={40} alt="" />
            <Image className="bug-2" src="/bug2-icone.svg" width={40} height={40} alt="" />
          </div>
        </div>
        <p>Estou constantemente atualizado com as últimas tendências e tecnologias, buscando aprimorar minha expertise para oferecer resultados excepcionais.</p>
      </S.VsCode>
    </S.SectionContainer>
  )
}
