import * as S from './styles'
import { Tech } from '../types'

interface ItemProps {
  item: Tech
  index: number
  setActive: (index: number) => void
  isActive: boolean
}
export const Item = ({ item, index, setActive, isActive }: ItemProps) => {
  return (
    <S.Item onClick={() => {
      setActive(index)
    }} className={`${isActive ? 'active' : ''}`}>
      {item.name === "Styled Components" ? item.name.split(" ").map((i: string, index: number) => {
        return (<div key={`styled ${index}`}>
          {i}
        </div>
        )
      }) : item.name}
    </S.Item>
  )
}


