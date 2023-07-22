
import * as S from './styles'

// eslint-disable-next-line react/display-name
export const Item = ({ item, index, setActive, active, isActive, onClick }: any) => {
  return (
    <S.Item onClick={() => {
      setActive(index)
    }} className={`${isActive ? 'active' : ''}`}>
      {item.name === "Styled Components" ? item.name.split(" ").map((i: any) => {
        // eslint-disable-next-line react/jsx-key
        return (<div>
          {i}
        </div>
        )
      }) : item.name}
    </S.Item>
  )
}


