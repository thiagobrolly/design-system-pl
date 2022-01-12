import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';
import { InputProps, LabelProps } from './types';

const passwordInputTheme = {
  filled: (errorMessage: string | undefined) => css`
    background-color: ${theme.colors.white};
    color: rgba(0, 0, 0, 0.87);
    padding: 22px 52px 12px 16px;
    outline: none;
    border: ${errorMessage ? `1px solid ${theme.colors.errorRed}` : 'none'};

    &:not([disabled], .hasContent):hover + label,
    &:not([disabled]):hover ~ .iconDiv {
      color: #a8a8a8;
    }
    &:not([disabled]):focus {
      background-color: ${theme.colors.white};
      border: 1px solid ${theme.colors.secondaryB};
    }
    &:not([disabled]):focus ~ .iconDiv {
      color: #707070;
    }
    &:disabled {
      background-color: #a8a8a8;
      cursor: not-allowed;
      color: ${theme.colors.white};
    }
    &:disabled + label,
    &:disabled ~ .iconDiv {
      cursor: not-allowed;
      color: ${theme.colors.white};
    }
    // rule for the label behavior
    &.hasContent + label,
    &:not([disabled]):focus + label {
      top: 8px;
      font-size: 12px;
      color: ${errorMessage ? theme.colors.errorRed : theme.colors.secondaryB};
    }
  `,

  outlined: (errorMessage: string | undefined) => css`
    background-color: transparent;
    color: rgba(0, 0, 0, 0.74);
    padding: 18px 52px 18px 16px;
    border: none;
    outline: ${errorMessage
      ? `1px solid ${theme.colors.errorRed}`
      : '1px solid #e6e7e9'};

    &:not([disabled]):hover {
      outline: ${`1px solid rgba(0, 0, 0, 0.12)`};
    }
    &:not([disabled], .hasContent):hover + label,
    &:not([disabled]):hover ~ .iconDiv {
      color: #a8a8a8;
    }
    &:not([disabled]):focus {
      outline: 1px solid ${theme.colors.secondaryB};
    }
    &:not([disabled]):focus ~ .iconDiv {
      color: #707070;
    }
    &:disabled {
      cursor: not-allowed;
      color: #a8a8a8;
      border-color: #a8a8a8;
    }
    &:disabled + label,
    &:disabled ~ .iconDiv {
      cursor: not-allowed;
    }
    // rule for the label behavior
    &.hasContent + label,
    &:not([disabled]):focus + label {
      background: #f5f5f5;
      padding: 0 4px;
      top: -8px;
      font-size: 12px;
      color: ${errorMessage ? theme.colors.errorRed : theme.colors.secondaryB};
    }
  `,
};

export const Input = styled.input<InputProps>`
  ${({ passwordInputType, width, errorMessage }) => css`
    ${passwordInputTheme[passwordInputType || 'filled'](errorMessage)}
    box-sizing: border-box;
    width: ${width};
    height: 56px;
    border-radius: 10px;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.15px;
    transition: 0.3s;
    cursor: pointer;
  `}
`;

export const Container = styled.div`
  max-width: max-content;
  position: sticky;
`;

export const RightIconContainer = styled.div`
  width: 48px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0px;
  right: 0px;
  color: rgba(168, 168, 168, 0.47);
  transition: 0.4s;
  cursor: pointer;
`;

export const Label = styled.label<LabelProps>`
  max-width: max-content;
  position: absolute;
  top: 20px;
  left: 16px;
  font-size: 16px;
  color: ${(props) =>
    props.errorMessage ? theme.colors.errorRed : 'rgba(168, 168, 168, 0.47)'};
  transition: 0.4s;
  pointer-events: none;
`;

export const ErrorMessage = styled.span`
  max-width: max-content;
  position: absolute;
  top: 58px;
  left: 16px;
  font-size: 12px;
  line-height: 16px;
  color: ${theme.colors.errorRed};
`;
