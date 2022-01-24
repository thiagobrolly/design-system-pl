import React from 'react';
import * as Styled from './styles';
import { IconPlusCircle } from '../Icons';

export interface Props {
  disabled?: boolean;
  children: React.ReactNode;
  btnType?: 'primary' | 'secondary' | 'outline';
  iconPlus?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<Props> = ({
  children,
  btnType = 'primary',
  iconPlus = false,
  ...props
}) => (
  <Styled.Button btnType={btnType} iconPlus={iconPlus} {...props}>
    {iconPlus && <IconPlusCircle size={20} color="CurrentColor" />}
    {children}
  </Styled.Button>
);
