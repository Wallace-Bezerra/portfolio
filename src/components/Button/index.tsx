import { ReactNode, ComponentProps } from "react"
import * as S from "./styles"

interface ButtonProps extends ComponentProps<'a'> {
  children: ReactNode
  variant: "primary" | "outlined" | "view" | "repo"
}
export const Button = ({ children, variant, ...props }: ButtonProps) => {
  return (
    <S.Button {...props} variant={variant}>{children}</S.Button>
  )
}
