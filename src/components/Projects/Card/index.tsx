import * as S from "./styles"
import { Button } from "@/components/Button"
import Image from "next/image"
import { motion } from "framer-motion"
import { fadeIn } from "@/lib/variants"

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
      <Image src={project.src} width={800} height={600} priority alt="" />
      <div className="description">
        <div className="content">
          <h4>{project.tag}</h4>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
        <motion.div className="buttons"
          variants={fadeIn("up", 0.2)}
          initial={'hidden'}
          animate={'show'}
        >
          <Button href={project.urlView} target="_blank" variant="view">Visualizar</Button>
          <Button href={project.urlRepo} target="_blank" variant="repo">Repositorio</Button>
        </motion.div>
      </div>
    </S.ContainerCard>
  )
}
