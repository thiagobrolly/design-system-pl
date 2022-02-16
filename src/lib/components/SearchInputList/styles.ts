import styled, { css } from 'styled-components';
import { SearchInputListProps } from '.';
import { theme } from '../../styles/theme';

type InputProps = Pick<SearchInputListProps, 'outline' | 'errorMessage'>;
type LabelProps = Pick<SearchInputListProps, 'errorMessage'>;

const searchInputListTheme = {
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
        transition: 0.4s;
      }
    }
    &:not([disabled]):focus {
      background-color: ${theme.color.white};
      border: 1px solid ${theme.color.secondary_400};
    }
    &:not([disabled]):focus ~ .iconDiv {
      svg {
        fill: #707070;
        transition: 0.4s;
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
        transition: 0.4s;
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

  outline: (errorMessage: string | undefined) => css`
    background-color: ${theme.color.white};
    color: rgba(0, 0, 0, 0.74);
    padding: 18px 16px 18px 52px;
    outline: none;
    border: ${errorMessage
      ? `1px solid ${theme.color.error}`
      : '1px solid #e6e7e9'};

    &:not([disabled]):hover {
      border: ${`1px solid rgba(0, 0, 0, 0.12)`};
    }
    &:not([disabled], .hasContent):hover {
      border: ${`1px solid rgba(0, 0, 0, 0.12)`};
    }
    &:not([disabled], .hasContent):hover + label,
    &:not([disabled]):hover ~ .iconDiv {
      color: #a8a8a8;
      svg {
        fill: #a8a8a8;
        transition: 0.4s;
      }
    }

    &:not([disabled]):focus {
      border: 1px solid ${theme.color.secondary_400};
    }
    &:not([disabled]):focus ~ .iconDiv {
      svg {
        fill: #707070;
        transition: 0.4s;
      }
    }

    &:disabled {
      cursor: not-allowed;
      color: #a8a8a8;
      border-color: #a8a8a8;
    }
    &:disabled + label,
    &:disabled ~ .iconDiv {
      cursor: not-allowed;
      transition: 0.4s;
    }

    // rule for the label behavior
    &.hasContent + label,
    &:not([disabled]):focus + label {
      top: -14px;
      margin-left: 0px;
      font-size: 12px;
      color: ${errorMessage ? theme.color.error : theme.color.secondary_400};
    }
  `,
};

export const Input = styled.input<InputProps>`
  ${({ outline, errorMessage }) => css`
    ${searchInputListTheme[outline ? 'outline' : 'filled'](errorMessage)}
    box-sizing: border-box;
    width: 100%;
    height: 56px;
    border-radius: 10px;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.15px;
    transition: 0.4s;
    cursor: pointer;
    ::-webkit-search-cancel-button {
      cursor: pointer;
    }
  `}
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const InputWrapper = styled.div`
  min-width: 35vw;
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
  color: ${theme.color.error};
`;

export const DropdownList = styled.div`
  position: absolute;
  background-color: ${theme.color.white};
  box-shadow: 0px 3px 10px 0px ${theme.color.gray_500};
  border-radius: 1rem;
  z-index: ${theme.layers.alwayOnTop};
  left: 0;
  padding: 24px 16px;
  margin-top: 4px;
  width: max-content;
  max-height: 40rem;
  // scrollbar
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    border-radius: 1rem;
  }
  ::-webkit-scrollbar-thumb {
    background: lightgray;
    border-radius: 10px;
    cursor: pointer;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.color.secondary_400};
  }
  ::-webkit-scrollbar-corner {
    border-radius: 1rem;
  }
`;
