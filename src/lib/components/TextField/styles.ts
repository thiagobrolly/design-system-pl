import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';
import { InputProps, LabelProps } from './index';

const textFieldTheme = {
  filled: (errorMessage: string | undefined) => css`
    background-color: ${theme.colors.white};
    color: rgba(0, 0, 0, 0.87);
    font-family: ${theme.font.family.default};
    outline: none;
    border: ${errorMessage ? `1px solid ${theme.colors.errorRed}` : 'none'};

    &:not([disabled], .hasContent):hover + label {
      color: #a8a8a8;
    }
    &:not([disabled]):focus {
      background-color: ${theme.colors.white};
      border: 1px solid ${theme.colors.secondaryB};
    }
    &:disabled {
      background-color: #a8a8a8;
      cursor: not-allowed;
      color: ${theme.colors.white};
    }
    &:disabled + label {
      cursor: not-allowed;
      color: ${theme.colors.white};
    }
  `,

  // Pending
  outlined: () => css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.secondaryB};
    border: 1px solid ${theme.colors.secondaryB};

    &:not([disabled]):hover {
      background-color: #ebecee;
    }
    &:not([disabled]):focus {
      background-color: #d8dae0;
    }
    &:not([disabled]):active {
      background-color: #e3e4e8;
      border-color: #cdcfd5;
    }
    &:disabled {
      cursor: not-allowed;
      color: #a8a8a8;
      border-color: #a8a8a8;
    }
  `,
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input<InputProps>`
  ${({ textFieldType, leftIcon, errorMessage }) => css`
    ${textFieldTheme[textFieldType || 'filled'](errorMessage)}
    border-radius: 10px;
    box-sizing: border-box;
    width: 320px;
    height: 56px;
    padding: 22px 16px 12px 16px;
    padding-left: ${leftIcon ? '52px' : '16px'};
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.15px;
    transition: 0.3s;
    cursor: pointer;
    // rule for the label behavior
    &.hasContent + label,
    &:not([disabled]):focus + label {
      top: -48px;
      font-size: 12px;
      color: ${errorMessage ? theme.colors.errorRed : theme.colors.secondaryB};
    }
  `}
`;

export const LeftIconContainer = styled.div`
  max-width: max-content;
  position: relative;
  left: 20px;
  top: 40px;
  color: rgba(168, 168, 168, 0.47);
  transition: 0.2s;
  &:hover {
    color: #a8a8a8;
  }
`;

export const Label = styled.label<LabelProps>`
  max-width: max-content;
  position: relative;
  left: 16px;
  top: -36px;
  font-size: 16px;
  color: ${(props) =>
    props.errorMessage ? theme.colors.errorRed : 'rgba(168, 168, 168, 0.47)'};
  transition: 0.2s;
  &:hover {
    color: #a8a8a8;
  }
  margin-left: ${(props) => props.leftIcon && '36px'};
`;

export const ErrorMessage = styled.span`
  position: relative;
  left: 16px;
  top: -12px;
  font-size: 12px;
  line-height: 16px;
  color: ${theme.colors.errorRed};
`;
