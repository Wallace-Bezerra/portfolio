'use client'
import Image from 'next/image'
import { Slide } from './Slide'
import { Tech } from './Slide/types'
import * as S from './styles'
import { useState } from 'react'

const tech1: Tech[] = [
  {
    name: "React",
    images: [
      {
        nameImage: "React",
        src: "/tech/react-tech-icone.svg",
        width: 260,
        height: 260,
        alt: "React icone"
      },
      {
        nameImage: "React",
        src: "/tech/next-tech-icone.svg",
        width: 165,
        height: 165,
        alt: "Next icone"
      }
    ]
  },
  {
    name: "TypeScript",
    images: [
      {
        nameImage: "TypeScript",
        src: "/tech/typescript-tech-icone.svg",
        width: 224,
        height: 224,
        alt: "TypeScript icone"
      },
    ]
  },
  {
    name: "Styled Components",
    images: [
      {
        nameImage: "Styled Components",
        src: "/tech/styled-componets-tech-icone.png",
        width: 256,
        height: 256,
        alt: "Styled Components icone"
      },
    ]
  },
]

const tech2: Tech[] = [
  {
    name: "Html / Css",
    images: [
      {
        nameImage: "Html / Css",
        src: "/tech/html-tech-icone.png",
        width: 174,
        height: 218,
        alt: "Html icone"
      },
      {
        nameImage: "Html / Css",
        src: "/tech/css-tech-icone.png",
        width: 165,
        height: 195,
        alt: "Css icone"
      }
    ]
  },
  {
    name: "Figma",
    images: [
      {
        nameImage: "Figma",
        src: "/tech/figma-tech-icone.svg",
        width: 173,
        height: 261,
        alt: "Figma icone"
      },
    ]
  },
  {
    name: "Git / GitHub",
    images: [
      {
        nameImage: "Git / GitHub",
        src: "/tech/github-tech-icone.png",
        width: 240,
        height: 240,
        alt: "GitHub icone"
      },
      {
        nameImage: "Git / GitHub",
        src: "/tech/git-tech-icone.svg",
        width: 240,
        height: 240,
        alt: "Git icone"
      },
    ]
  },
]

const tech3: Tech[] = [
  {
    name: "Tailwind css",
    images: [
      {
        nameImage: "Tailwind css",
        src: "/tech/tailwind-tech-icone.png",
        width: 280,
        height: 250,
        alt: "Tailwind css icone"
      }
    ]
  },
  {
    name: "React Query",
    images: [
      {
        nameImage: "React Query",
        src: "/tech/reactquery-tech-icone.png",
        width: 320,
        height: 320,
        alt: "React Query icone"
      },
    ]
  },
  {
    name: "Zustand",
    images: [
      {
        nameImage: "Zustand",
        src: "/tech/zustand-tech-icone.png",
        width: 375,
        height: 310,
        alt: "Zustand icone"
      },
    ]
  },
]

export const CardTech = () => {
  const [slideLength, setSlideLength] = useState(3)
  const [slideState, setSlideState] = useState(0);
  const [inactive, setInactive] = useState(false);
  console.log(slideState)
  return (
    <S.ContainerCardTech>
      <S.SliderWrapper state={slideState}>
        <Slide className='tech-images-1' tech={tech1} />
        <Slide className='tech-images-2' tech={tech2} />
        <Slide className='tech-images-3' tech={tech3} />
      </S.SliderWrapper>
      <div className='setas'>
        <S.Arrow inactive={slideState === 0} onClick={() => {
          if (slideState > 0) {
            setSlideState(prev => prev - 1)
          }
          setInactive(true)
        }}>
          <Image src="/back-icone.svg" width={62} height={62} alt="" />
        </S.Arrow>
        <S.Arrow inactive={slideState === 2} onClick={() => {
          if (slideState < slideLength - 1)
            setSlideState(prev => prev + 1)
        }}>
          <Image src="/prev-icone.svg" width={62} height={62} alt="" />
        </S.Arrow>
      </div >
    </S.ContainerCardTech>
  )
}
