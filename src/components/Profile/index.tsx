
import { Button } from '../Button'
import Image from 'next/image'
import * as S from "./styles"
export const Profile = () => {
  return (
    <S.ProfileContainer>
      <div>
        <S.Emphasis>
          <span>Olá!</span>
          <h1>Front End Developer</h1>
          <p>Criando Interfaces Intuitivas e Experiências Incríveis no Desenvolvimento Web de Alto Nível</p>
          <Image className='vscode-background' src="/vscode-background.svg" width={400} height={400} alt='' />
        </S.Emphasis>
        <S.Contact>
          <Button href="#" target="_blank" variant="primary">Contate-me</Button>
          <div className='group-button'>
            <Button href="https://github.com/Wallace-Bezerra" target="_blank" variant="outlined">GitHub</Button>
            <Button id="linkedin" href="https://www.linkedin.com/in/wallace-bezerra/" target="_blank" variant="outlined"><Image src="./linkedin.svg" width="36" height="36" alt="icone" /></Button>
          </div>
        </S.Contact>
      </div>
      <S.ProfileUser>
        <Image className="profile" src="/profile.png" width={600} height={400} priority alt="profile" />
        <S.Spinner>
          <Image className="name-spinner" src='/name-Spinner.png' width={240} height={240} alt="Wallace Bezerra" />
          <Image className="logo-spinner" src='/logo.svg' width={75} height={26} alt="" />
        </S.Spinner>
        <div className="react-element">
          <Image src='/react-element.svg' width={50} height={50} alt="" />
        </div>
        <div className="icone-computer">
          <Image src='/icone-computer.svg' width={50} height={50} alt="" />
        </div>
        <div className="tree-structure">
          <Image src='/tree-structure.svg' width={70} height={70} alt="" />
        </div>
        <Image className="pointer" src='/pointer.png' width={76} height={84} alt="" />
      </S.ProfileUser>
    </S.ProfileContainer>
  )
}
