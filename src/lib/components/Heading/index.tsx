import React from 'react';
import * as Styled from './styles';

export interface HeadingProps {
  // children: React.ReactNode;
  children: string;
  colorDark?: boolean;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'small' | 'medium' | 'big' | 'huge';
  uppercase?: boolean;
}

export const Heading: React.FC<HeadingProps> = ({
  children,
  colorDark = true,
  as = 'h1',
  size = 'medium',
  uppercase = false,
}) => {
  return (
    <Styled.Title
      colorDark={colorDark}
      as={as}
      size={size}
      uppercase={uppercase}
    >
      {children}
    </Styled.Title>
  );
};
