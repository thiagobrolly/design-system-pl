import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';
import { ButtonProps } from './index';

const buttonModifiers = {
  small: () => css`
    height: 3rem;
    font-size: ${theme.font.size.xsmall};
  `,
  medium: () => css`
    height: 4rem;
    font-size: ${theme.font.size.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.small};
  `,
  large: () => css`
    height: 5rem;
    font-size: ${theme.font.size.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  withIcon: () => css`
    > svg {
      width: 1.8rem;

      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,
};

const buttonTheme = {
  primary: () => css`
    background: transparent;
    color: ${theme.color.secondary};
    border: none;

    &:not([disabled]):hover {
      background: ${theme.color.gray_500};
    }
    &:not([disabled]):active {
      background: ${theme.color.gray_700};
    }

    &:disabled {
      pointer-events: none;
      cursor: not-allowed;
      color: ${theme.color.gray_800};
    }
  `,

  secondary: () => css`
    background: ${theme.color.secondary};
    color: ${theme.color.white};
    border: none;

    &:not([disabled]):hover {
      background: ${theme.color.secondary_300};
    }
    &:not([disabled]):active {
      background: ${theme.color.secondary_100};
    }
    &:disabled {
      pointer-events: none;
      cursor: not-allowed;
      color: ${theme.color.white};
      background: ${theme.color.gray_800};
    }
  `,

  outline: () => css`
    background: ${theme.color.white};
    color: ${theme.color.secondary};
    border: 2px solid ${theme.color.secondary};

    &:not([disabled]):hover {
      background: ${theme.color.gray_500};
    }
    &:not([disabled]):active {
      background: ${theme.color.gray_700};
      border-color: ${theme.color.gray_800};
    }
    &:disabled {
      pointer-events: none;
      cursor: not-allowed;
      color: ${theme.color.gray_800};
      border-color: ${theme.color.gray_800};
    }
  `,

  approve: () => css`
    background: ${theme.color.success};
    color: ${theme.color.white};
    border: none;

    &:not([disabled]):hover {
      filter: brightness(90%);
    }
    &:not([disabled]):active {
      filter: brightness(100%); // color default
    }
    &:disabled {
      pointer-events: none;
      cursor: not-allowed;
      color: ${theme.color.white};
      background: ${theme.color.gray_800};
    }
  `,

  cancel: () => css`
    background: ${theme.color.error};
    color: ${theme.color.white};
    border: none;

    &:not([disabled]):hover {
      filter: brightness(90%);
    }
    &:not([disabled]):active {
      filter: brightness(100%); // color default
    }
    &:disabled {
      pointer-events: none;
      cursor: not-allowed;
      color: ${theme.color.white};
      background: ${theme.color.gray_800};
    }
  `,
};

export const Button = styled.button<ButtonProps>`
  ${({
    appearance,
    size,
    fullWidth,
    icon,
    margin,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    linkStyle,
  }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${linkStyle ? '0' : theme.spacings.xsmall};
    font-weight: ${theme.font.weight.regular};
    text-align: center;
    transition: background 0.3s, filter 0.3s;
    border-radius: ${theme.border.radius};
    text-decoration: none;
    width: fit-content;
    margin: ${margin};
    margin-top: ${marginTop};
    margin-bottom: ${marginBottom};
    margin-left: ${marginLeft};
    margin-right: ${marginRight};
    cursor: pointer;
    ${buttonTheme[appearance!]()}
    ${!linkStyle && buttonModifiers[size!]()}
    ${!!fullWidth && buttonModifiers.fullWidth()}
    ${!!icon && buttonModifiers.withIcon()}

    > span {
      width: fit-content;
      height: fit-content;

      > a {
        text-decoration: none;
        color: currentColor;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: ${theme.border.radius};
        ${buttonModifiers[size!]()}
      }
    }
  `}
`;
