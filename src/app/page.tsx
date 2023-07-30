
import * as S from "./styles"
import { Contact } from "@/components/Contact"
import { Profile } from "@/components/Profile"
import { Projects } from "@/components/Projects"
import { Section } from "@/components/Section"
import { Tech } from "@/components/Tech"
import { About } from "@/components/About"

export default function Home() {
  return (
    <S.Main>
      <div className="blur" />
      <Profile />
      <Section />
      <Tech />
      <Projects />
      <About />
      <Contact />
    </S.Main>
  )
}
