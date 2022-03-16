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
  margin?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  linkStyle?: boolean;
  as?: React.ElementType;
} & ButtonTypes;

export const Button = ({
  children,
  appearance = 'primary',
  icon = false,
  fullWidth = false,
  size = 'medium',
  margin = '',
  marginTop = '',
  marginBottom = '',
  marginLeft = '',
  marginRight = '',
  linkStyle = false,
  ...props
}: ButtonProps) => (
  <S.Button
    fullWidth={fullWidth}
    size={size}
    appearance={appearance}
    icon={icon}
    linkStyle={linkStyle}
    margin={margin}
    marginTop={marginTop}
    marginBottom={marginBottom}
    marginLeft={marginLeft}
    marginRight={marginRight}
    {...props}
  >
    {icon && <IconPlusCircle aria-label="icon plus" color="CurrentColor" />}
    <span>{children}</span>
  </S.Button>
);
