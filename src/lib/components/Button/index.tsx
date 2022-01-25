import React from 'react';
import * as Styled from './styles';
import { IconPlusCircle } from '../Icons';

export interface ButtonProps {
  disabled?: boolean;
  children: React.ReactNode;
  btnType?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  iconPlus?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  btnType = 'primary',
  iconPlus = false,
  fullWidth = false,
  size = 'medium',
  ...props
}) => (
  <Styled.Button
    fullWidth={fullWidth}
    size={size}
    btnType={btnType}
    iconPlus={iconPlus}
    {...props}
  >
    {iconPlus && <IconPlusCircle size={20} color="CurrentColor" />}
    {children}
  </Styled.Button>
);
