import styled, { css } from 'styled-components';

import { Props } from './index';

const buttonTheme = {
  blue: () => css`
    background: #215aff;
    color: #fff;
  `,
  white: () => css`
    background: #fff;
    color: #215aff;
    border: 2px solid #215aff;

    &:hover {
      color: #0f194b !important;
      background: #fff !important;
      border: 2px solid #0f194b !important;
    }
  `,
  gray: () => css`
    color: #fff;
    background: #c8c8c8;
  `,

  darkblue: () => css`
    color: #fff;
    background: #0f194b;

    &:hover {
      color: #fff !important;
      background: #c8c8c8 !important;
    }
  `,
};

export const Button = styled.button<Props>`
  ${({ backgroundColor, outlined, themeButton, color }) => css`
    background-color: ${outlined ? 'transparent' : backgroundColor};
    color: ${outlined ? backgroundColor : color};
    border: ${outlined ? `2px solid ${backgroundColor}` : 'none'};
    border-radius: 5px;
    padding: 15px 20px;
    font-weight: 400;
    font-size: 1.8rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    transition: background 0.3s;
    cursor: pointer;
    ${buttonTheme[themeButton || 'blue']()}
    /* ${backgroundColor === '' &&
    color === '' &&
    buttonTheme[themeButton || 'blue']()} */

    &:hover {
      color: #fff;
      background: #0f194b;
      border: 0;
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.7;
      color: #fff;
      background: #c8c8c8;

      &:hover {
        color: #fff;
        background: #c8c8c8;
      }
    }
  `}
`;
