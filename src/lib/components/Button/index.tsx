import React from 'react';
import { HiPlus } from 'react-icons/hi';
import * as Styled from './styles';

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
    {iconPlus ? <HiPlus /> : <></>}
    {children}
  </Styled.Button>
);
