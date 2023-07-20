
import * as S from "./styles"
import { Profile } from "@/components/Profile"
import { Section } from "@/components/Section"
import { Tech } from "@/components/Tech"
export default function Home() {
  return (
    <S.Main>
      <S.Blur />
      <Profile />
      <Section />
      <Tech />
    </S.Main>
  )
}
