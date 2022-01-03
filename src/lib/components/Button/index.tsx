import React from 'react';
import * as Styled from './styles';

export interface Props {
  backgroundColor?: string;
  color?: string;
  outlined?: boolean;
  disabled?: boolean;
  children: string;
  themeButton?: 'blue' | 'white' | 'gray' | 'darkblue';
  onClick?: () => void;
}

export const Button: React.FC<Props> = ({
  backgroundColor = '',
  color = '',
  outlined = false,
  children,
  themeButton = 'blue',
  ...props
}) => (
  <Styled.Button
    backgroundColor={backgroundColor}
    color={color}
    outlined={outlined}
    themeButton={themeButton}
    {...props}
  >
    {children}
  </Styled.Button>
);
