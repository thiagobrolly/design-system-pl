import styled, { css } from 'styled-components';
import { HeadingProps } from '.';
import { theme } from '../../styles/theme';

const mediaFont = () => css`
  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.font.size.xxlarge};
  }
`;

const titleSize = {
  small: () => css`
    font-size: ${theme.font.size.small};
  `,
  medium: () => css`
    font-size: ${theme.font.size.medium};
  `,
  big: () => css`
    font-size: ${theme.font.size.large};
  `,
  huge: () => css`
    font-size: ${theme.font.size.xxlarge};
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
    ${titleSize[size!]()};
    ${titleCase(uppercase!)};
  `}
`;
