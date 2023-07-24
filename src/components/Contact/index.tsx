import * as S from "./styles"
import Image from "next/image"
import { Button } from "../Button"
export const Contact = () => {
  return (
    <S.ContainerContact>
      <div>
        <h2>
          Vamos trabalhar juntos para deixar
        </h2>
        <p>Sua presença online incrível!</p>
      </div>
      <Button href="https://api.whatsapp.com/send?phone=5511965035851&text=Ol%C3%A1%2C%20gostaria%20de%20entrar%20em%20contato." target="_blank" variant="view">Contate-me</Button>
      <div className="contacts">
        <Button id="linkedin" href="https://www.linkedin.com/in/wallace-bezerra/" target="_blank" variant="outlined"><Image src="./linkedin.svg" width="36" height="36" alt="icone" /></Button>
        <Button id="instagram" href="https://www.instagram.com/wallace_x227/" target="_blank" variant="outlined"><Image src="./instagram-icone.svg" width="36" height="36" alt="icone" /> </Button>
        <Button id="github" href="https://github.com/Wallace-Bezerra" target="_blank" variant="outlined"><Image src="./github-icone.svg" width="36" height="36" alt="icone" /></Button>
      </div>
    </S.ContainerContact>
  )
}
