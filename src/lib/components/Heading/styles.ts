import styled, { css } from 'styled-components';
import { HeadingProps } from '.';
import { theme } from '../../styles/theme';

const mediaFont = () => css`
  @media ${theme.media.lteMedium} {
    font-size: ${theme.font.sizes.xlarge};
  }
`;

const titleSize = {
  small: () => css`
    font-size: ${theme.font.sizes.small};
  `,
  medium: () => css`
    font-size: ${theme.font.sizes.medium};
  `,
  big: () => css`
    font-size: ${theme.font.sizes.large};
  `,
  huge: () => css`
    font-size: ${theme.font.sizes.huge};
    ${mediaFont()};
  `,
};

const titleCase = (uppercase: boolean) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

export const Title = styled.h1<HeadingProps>`
  ${({ colorDark, size, uppercase }) => css`
    color: ${colorDark ? theme.colors.secondaryA : theme.colors.white};
    line-height: 1.2;
    ${titleSize[size || 'small']()};
    ${titleCase(uppercase || false)};
  `}
`;
