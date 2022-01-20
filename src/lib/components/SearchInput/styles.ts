import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';
import { InputProps, LabelProps } from './types';

const searchInputTheme = {
  filled: (errorMessage: string | undefined) => css`
    background-color: ${theme.color.white};
    color: rgba(0, 0, 0, 0.87);
    padding: 22px 16px 12px 52px;
    outline: none;
    border: ${errorMessage ? `1px solid ${theme.color.error}` : 'none'};

    &:not([disabled], .hasContent):hover + label,
    &:not([disabled]):hover ~ .iconDiv {
      color: #a8a8a8;
      svg {
        fill: #a8a8a8;
        transition: 0.1s;
      }
    }
    &:not([disabled]):focus {
      background-color: ${theme.color.white};
      border: 1px solid ${theme.color.secondary_400};
    }
    &:not([disabled]):focus ~ .iconDiv {
      svg {
        fill: #707070;
        transition: 0.1s;
      }
    }
    &:disabled {
      background-color: #a8a8a8;
      cursor: not-allowed;
      color: ${theme.color.white};
    }
    &:disabled + label,
    &:disabled ~ .iconDiv {
      cursor: not-allowed;
      color: ${theme.color.white};
      svg {
        fill: ${theme.color.white};
        transition: 0.1s;
      }
    }
    // rule for the label behavior
    &.hasContent + label,
    &:not([disabled]):focus + label {
      top: 8px;
      font-size: 12px;
      color: ${errorMessage ? theme.color.error : theme.color.secondary_400};
    }
  `,

  outline: (errorMessage: string | undefined, width: string) => css`
    background-color: transparent;
    color: rgba(0, 0, 0, 0.74);
    padding: 18px 16px 18px 52px;
    outline: none;

    &:not([disabled], .hasContent) {
      border: ${errorMessage
        ? `1px solid ${theme.color.error}`
        : '1px solid #e6e7e9'};
    }
    &.hasContent {
      border: ${errorMessage
        ? `1px solid ${theme.color.error}`
        : '1px solid #e6e7e9'};
      border-top: none;
    }

    &:not([disabled]):hover {
      border: ${`1px solid rgba(0, 0, 0, 0.12)`};
      border-top: none;
    }
    &:not([disabled], .hasContent):hover {
      border: ${`1px solid rgba(0, 0, 0, 0.12)`};
    }
    &:not([disabled], .hasContent):hover + label,
    &:not([disabled]):hover ~ .iconDiv {
      color: #a8a8a8;
      svg {
        fill: #a8a8a8;
        transition: 0.1s;
      }
    }

    &:not([disabled]):focus {
      border: 1px solid ${theme.color.secondary_400};
      border-top: none;
    }
    &:not([disabled]):focus ~ .iconDiv {
      svg {
        fill: #707070;
        transition: 0.1s;
      }
    }

    &:disabled {
      cursor: not-allowed;
      color: #a8a8a8;
      border-color: #a8a8a8;
      border-top: none;
    }
    &:not(.hasContent):disabled {
      cursor: not-allowed;
      color: #a8a8a8;
      border: 1px solid #a8a8a8;
    }
    &:disabled + label,
    &:disabled ~ .iconDiv {
      cursor: not-allowed;
      transition: 0.1s;
    }

    // rule for the label behavior
    &.hasContent + label {
      padding: 0 4px;
      top: -7px;
      margin-left: 0px;
      font-size: 12px;
      color: ${errorMessage ? theme.color.error : theme.color.secondary_400};
      &:before,
      &:after {
        content: '';
        position: absolute;
        border-bottom: 1px solid ${errorMessage ? theme.color.error : '#e6e7e9'};
        top: 50%;
      }
      &:before {
        width: 9px;
        left: -9px;
      }
      &:after {
        width: calc(${width} - 100% - 24px);
        right: calc(100% + 24px - ${width});
      }
    }
    &:not([disabled]):focus + label {
      padding: 0 4px;
      top: -7px;
      margin-left: 0px;
      font-size: 12px;
      color: ${errorMessage ? theme.color.error : theme.color.secondary_400};
      &:before,
      &:after {
        content: '';
        position: absolute;
        border-bottom: 1px solid ${theme.color.secondary_400};
        top: 50%;
      }
      &:before {
        width: 9px;
        left: -9px;
      }
      &:after {
        width: calc(${width} - 100% - 24px);
        right: calc(100% + 24px - ${width});
      }
    }
  `,
};

export const Input = styled.input<InputProps>`
  ${({ searchInputType, width, errorMessage }) => css`
    ${searchInputTheme[searchInputType || 'filled'](errorMessage, width)}
    box-sizing: border-box;
    width: ${width};
    height: 56px;
    border-radius: 10px;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.15px;
    transition: 0.1s;
    cursor: pointer;
    ::-webkit-search-cancel-button {
      cursor: pointer;
    }
  `}
`;

export const MainContainer = styled.div`
  position: relative;
`;

export const InputContainer = styled.div`
  max-width: max-content;
  position: sticky;
`;

export const LeftIconContainer = styled.div`
  max-width: max-content;
  position: absolute;
  top: 20px;
  left: 20px;
  pointer-events: none;
`;

export const Label = styled.label<LabelProps>`
  max-width: max-content;
  position: absolute;
  top: 20px;
  left: 16px;
  font-size: 16px;
  color: ${(props) =>
    props.errorMessage ? theme.color.error : 'rgba(168, 168, 168, 0.47)'};
  margin-left: 36px;
  transition: 0.1s;
  pointer-events: none;
`;

export const ErrorMessage = styled.span`
  max-width: max-content;
  position: absolute;
  top: 58px;
  left: 16px;
  font-size: 12px;
  line-height: 16px;
  color: ${theme.color.error};
`;
