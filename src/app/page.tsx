
import { Contact } from "@/components/Contact"
import * as S from "./styles"
import { Profile } from "@/components/Profile"
import { Projects } from "@/components/Projects"
import { Section } from "@/components/Section"
import { Tech } from "@/components/Tech"
export default function Home() {
  return (
    <S.Main>
      <S.Blur />
      <Profile />
      <Section />
      <Tech />
      <Projects />
      <Contact />
    </S.Main>
  )
}
