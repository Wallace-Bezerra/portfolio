import * as S from "../styles";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Profile from "@/components/Profile";
import Projects from "@/components/Projects";
import Section from "@/components/Section";
import Tech from "@/components/Tech";

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
  );
}
