import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import * as S from './styles';
import { IconPlusCircle } from '../Icons';

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLAnchorElement>;

export type ButtonProps = {
  disabled?: boolean;
  appearance?: 'primary' | 'secondary' | 'outline' | 'approve' | 'cancel';
  size?: 'small' | 'medium' | 'large';
  icon?: boolean;
  fullWidth?: boolean;
  as?: React.ElementType;
} & ButtonTypes;

export const Button = ({
  children,
  appearance = 'primary',
  icon = false,
  fullWidth = false,
  size = 'medium',
  ...props
}: ButtonProps) => (
  <S.Button
    fullWidth={fullWidth}
    size={size}
    appearance={appearance}
    icon={icon}
    {...props}
  >
    {icon && <IconPlusCircle aria-label="icon plus" color="CurrentColor" />}
    <span>{children}</span>
  </S.Button>
);
