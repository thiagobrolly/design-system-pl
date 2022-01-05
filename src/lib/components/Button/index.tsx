import React from 'react';
import { FaPlus } from 'react-icons/fa';
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
    {iconPlus ? <FaPlus /> : <></>}
    {children}
  </Styled.Button>
);
