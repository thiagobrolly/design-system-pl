import styled, { css } from 'styled-components';
import { HeadingProps } from '.';
import { theme } from '../../styles/theme';

const mediaFont = () => css`
  @media ${theme.media.lteMedium} {
    font-size: ${theme.font.size.l3};
  }
`;

const titleSize = {
  small: () => css`
    font-size: ${theme.font.size.s1};
  `,
  medium: () => css`
    font-size: ${theme.font.size.m1};
  `,
  big: () => css`
    font-size: ${theme.font.size.l1};
  `,
  huge: () => css`
    font-size: ${theme.font.size.l3};
    ${mediaFont()};
  `,
};

const titleCase = (uppercase: boolean) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

export const Title = styled.h1<HeadingProps>`
  ${({ colorDark, size, uppercase }) => css`
    color: ${colorDark ? theme.color.secondary_variant : theme.color.white};
    line-height: 1.2;
    ${titleSize[size || 'small']()};
    ${titleCase(uppercase || false)};
  `}
`;
