"use client";
import * as S from "./styles";
import dynamic from "next/dynamic";
import Contact from "@/components/Contact";
import Profile from "@/components/Profile";
import Projects from "@/components/Projects";
import Section from "@/components/Section";
import Tech from "@/components/Tech";
import About from "@/components/About";

//@ts-ignore
const DynamicProfile = dynamic(
  async () => await import("../components/Profile"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const DynamicProjects = dynamic(
  async () => await import("../components/Projects"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const DynamicSection = dynamic(
  async () => await import("../components/Section"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const DynamicAbout = dynamic(async () => await import("../components/About"), {
  loading: () => <p>Loading...</p>,
});

const DynamicTech = dynamic(async () => await import("../components/Tech"), {
  loading: () => <p>Loading...</p>,
});
const DynamicContact = dynamic(
  async () => await import("../components/Contact"),
  {
    loading: () => <p>Loading...</p>,
  }
);

export default function Home() {
  return (
    <S.Main>
      <div className="blur" />
      <DynamicProfile />
      <DynamicSection />
      <DynamicTech />
      <DynamicProjects />
      <DynamicAbout />
      <DynamicContact />
    </S.Main>
  );
}
