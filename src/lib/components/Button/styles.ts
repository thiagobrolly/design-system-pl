import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';
import { Props } from './index';

const buttonTheme = {
  primary: () => css`
    background: transparent;
    color: ${theme.color.secondary};
    border: none;
    border-radius: 10px;
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
    border-radius: 10px;
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
    border-radius: 10px;
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

export const Button = styled.button<Props>`
  ${({ btnType }) => css`
    padding: 8px 16px;
    font-weight: 600;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.3s;
    cursor: pointer;
    ${buttonTheme[btnType!]()}

    svg {
      margin-right: 5px;
    }
  `}
`;
