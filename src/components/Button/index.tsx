import { ReactNode, ComponentProps } from 'react';
import * as S from './styles';

interface ButtonProps extends ComponentProps<'a'> {
  children: ReactNode;
  variant: 'primary' | 'outlined' | 'view' | 'repo';
  isView?: boolean;
}
export const Button = ({
  children,
  variant,
  isView,
  ...props
}: ButtonProps) => {
  return (
    <S.Button {...props} $variant={variant} $isView={isView}>
      {children}
    </S.Button>
  );
};
