import styled, { css } from 'styled-components';
import { CardProps } from '.';
import { theme } from '../..';

const cardModifiers = {
  small: () => css`
    min-width: 200px;
    width: fit-content;
  `,
  medium: () => css`
    min-width: 720px;
    width: fit-content;
  `,
  large: () => css`
    min-width: 980px;
    width: fit-content;
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  auto: () => css`
    width: fit-content;
  `,
};

export const Wrapper = styled.div<CardProps>`
  ${({ size, margin, marginTop, marginBottom, marginLeft, marginRight }) => css`
    display: flex;
    flex-direction: column;
    padding: 2.4rem;
    background-color: ${theme.color.white};
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 7%);
    border-radius: ${theme.border.radius};
    margin: ${margin};
    margin-top: ${marginTop};
    margin-bottom: ${marginBottom};
    margin-left: ${marginLeft};
    margin-right: ${marginRight};
    ${cardModifiers[size!]()}
  `}
`;

export const SubTitle = styled.span`
  margin-top: 0.5rem;
  font-size: ${theme.font.size.medium};
  color: ${theme.color.gray_900};
`;
