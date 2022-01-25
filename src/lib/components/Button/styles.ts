import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';
import { ButtonProps } from './index';

const buttonSize = {
  small: () => css`
    height: 3rem;
    font-size: ${theme.font.size.xsmall};
  `,
  medium: () => css`
    height: 4rem;
    font-size: ${theme.font.size.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  large: () => css`
    height: 5rem;
    font-size: ${theme.font.size.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
};

const buttonTheme = {
  primary: () => css`
    background: transparent;
    color: ${theme.color.secondary};
    border: none;
    svg {
      fill: ${theme.color.secondary};
    }

    &:not([disabled]):hover {
      background: #ebecee;
    }
    &:not([disabled]):focus {
      background: #d8dae0;
    }
    &:not([disabled]):active {
      background: #e3e4e8;
    }
    &:disabled {
      cursor: not-allowed;
      color: #a8a8a8;
      svg {
        fill: #a8a8a8;
      }
    }
  `,

  secondary: () => css`
    background: ${theme.color.secondary};
    color: ${theme.color.white};
    border: none;
    svg {
      fill: ${theme.color.white};
    }

    &:not([disabled]):hover {
      background: #182252;
    }
    &:not([disabled]):focus {
      background: #2c3561;
    }
    &:not([disabled]):active {
      background: #161758;
    }
    &:disabled {
      cursor: not-allowed;
      color: ${theme.color.white};
      background: #a8a8a8;
    }
  `,

  outline: () => css`
    background: ${theme.color.white};
    color: ${theme.color.secondary};
    border: 2px solid ${theme.color.secondary};
    svg {
      fill: ${theme.color.secondary};
    }

    &:not([disabled]):hover {
      background: #ebecee;
    }
    &:not([disabled]):focus {
      background: #d8dae0;
    }
    &:not([disabled]):active {
      background: #e3e4e8;
      border-color: #cdcfd5;
    }
    &:disabled {
      cursor: not-allowed;
      color: #a8a8a8;
      border-color: #a8a8a8;
      svg {
        fill: #a8a8a8;
      }
    }
  `,
};

export const Button = styled.button<ButtonProps>`
  ${({ btnType, size, fullWidth }) => css`
    padding: ${theme.spacings.xxsmall};
    font-weight: ${theme.font.weight.regular};
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.3s;
    border-radius: ${theme.border.radius};
    cursor: pointer;
    ${buttonTheme[btnType!]()}
    ${buttonSize[size!]()}
    ${!!fullWidth && buttonSize.fullWidth()}

    svg {
      margin-right: 5px;
    }
  `}
`;
