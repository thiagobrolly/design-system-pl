import React from 'react';
import * as Styled from './styles';

export type HeadingProps = {
  children: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'small' | 'medium' | 'large' | 'xlarge' | 'big';
  color?: 'white' | 'gray' | 'black';
  bold?: boolean;
  uppercase?: boolean;
} & React.HTMLAttributes<HTMLElement>;

export const Heading: React.FC<HeadingProps> = ({
  children,
  as = 'h1',
  size = 'medium',
  uppercase = false,
  bold = false,
  color = 'gray',
  ...props
}) => {
  return (
    <Styled.Title
      as={as}
      size={size}
      uppercase={uppercase}
      bold={bold}
      color={color}
      {...props}
    >
      {children}
    </Styled.Title>
  );
};
