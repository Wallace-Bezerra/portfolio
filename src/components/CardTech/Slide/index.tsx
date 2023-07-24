import { Tech } from './types'
import * as S from './styles'
import Image from 'next/image'
import { Item } from './Item'
import { useState } from 'react'

interface SlideProps {
  tech: Tech[]
  className: string
}
export const Slide = ({ tech, className }: SlideProps) => {
  const [active, setActive] = useState(0);

  return (
    <S.Slider>
      {tech.map((item, index) => {
        return (
          <>
            <Item item={item} isActive={active === index} setActive={setActive} index={index} />
            <li className={className}>
              <div id={`tech-${index + 1}`} className={`${tech[active].name === tech[index].images[0].nameImage ? "" : "active"}`}>
                {item.images.map((image) => {
                  return (
                    <Image key={image.src} src={image.src} width={image.width} height={image.height} priority alt={image.alt} />
                  )
                })}
              </div>
            </li>
          </>
        )
      })}
    </S.Slider>
  )
}
