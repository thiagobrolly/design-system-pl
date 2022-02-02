import styled, { css } from 'styled-components';
import { TextFieldProps } from '.';
import { theme } from '../..';

type IconPositionProps = Pick<TextFieldProps, 'iconPosition'>;

type WrapperProps = Pick<TextFieldProps, 'disabled'> & { error?: boolean };

export const InputWrapper = styled.div`
  display: flex;
  background-color: ${theme.color.gray_500};
  border-radius: 0.2rem;
  padding: 0 ${theme.spacings.xsmall};
  border: 0.2rem solid;
  border-color: ${theme.color.gray_500};

  &:focus-within {
    box-shadow: 0 0 0.5rem ${theme.color.primary};
  }
`;

export const Input = styled.input<IconPositionProps>`
  ${({ iconPosition }) => css`
  color: ${theme.color.black};
  font-size: ${theme.font.size.medium};
  padding: ${theme.spacings.xxsmall} 0;
  padding-${iconPosition}: ${theme.spacings.xxsmall};
  background: transparent;
  border: 0;
  outline: none;
  width: 100%;
  `}
`;

export const Label = styled.label`
  font-size: ${theme.font.size.small};
  color: ${theme.color.black};
  cursor: pointer;
`;

export const Icon = styled.div<IconPositionProps>`
  ${({ iconPosition }) => css`
    display: flex;
    width: 2.5rem;
    color: ${theme.color.gray_500};
    order: ${iconPosition === 'right' ? 1 : 0};

    & > svg {
      width: 100%;
    }
  `}
`;

export const Error = styled.p`
  color: ${theme.color.error};
  font-size: ${theme.font.size.xsmall};
  margin-top: 0.2rem;
`;

const wrapperModifiers = {
  error: () => css`
    ${InputWrapper} {
      border-color: ${theme.color.error};
    }

    ${Icon} svg {
      fill: ${theme.color.error};
    }

    ${Input}, ${Label} {
      color: ${theme.color.error};
    }
  `,

  disabled: () => css`
    ${Label},
    ${Input},
    ${Icon} {
      cursor: not-allowed;
      color: ${theme.color.gray_800};

      &::placeholder {
        color: currentColor;
      }
    }

    ${Icon} svg {
      fill: ${theme.color.gray_800};
    }
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ disabled, error }) => css`
    ${!!error && wrapperModifiers.error()}
    ${disabled && wrapperModifiers.disabled()}
  `}
`;
