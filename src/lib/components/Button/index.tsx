import React from 'react';
import * as Styled from './styles';

import { ReactComponent as IconPlusCircle } from '../../../assets/icons/icon-plus-circle.svg';

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
    {iconPlus && (
      <IconPlusCircle viewBox="11 11 16 16" width="16px" height="16px" />
    )}
    {children}
  </Styled.Button>
);
