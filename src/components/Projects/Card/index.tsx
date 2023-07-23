import * as S from "./styles"
import { Button } from "@/components/Button"
import Image from "next/image"

export interface CardProject {
  id: string
  src: string
  tag: string
  title: string
  description: string
  urlView: string
  urlRepo: string
}

interface CardProps {
  project: CardProject
}
export const Card = ({ project }: CardProps) => {
  return (
    <S.ContainerCard>
      <Image src={project.src} width={1200} height={800} quality={100} alt="" />
      <div className="description">
        <div className="content">
          <h4>{project.tag}</h4>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
        <div className="buttons">
          <Button href={project.urlView} target="_blank" variant="view">Visualizar</Button>
          <Button href={project.urlRepo} target="_blank" variant="repo">Repositorio</Button>
        </div>
      </div>
    </S.ContainerCard>
  )
}
