import styled, { css } from 'styled-components';
import { TextFieldProps } from '.';
import { theme } from '../..';

type IconPositionProps = Pick<
  TextFieldProps,
  'iconPosition' | 'icon' | 'iconDefault'
>;

const colorInput = theme.color.white;

type WrapperProps = Pick<TextFieldProps, 'disabled' | 'outline'> & {
  error?: boolean;
};

export const InputWrapper = styled.div`
  display: flex;
  background-color: ${colorInput};
  border-radius: 0.8rem;
  padding: 0 ${theme.spacings.xsmall};
  border: 0.2rem solid;
  border-color: ${theme.color.gray_500};
  height: 65px;
  position: sticky;

  &:focus-within {
    border: 0.2rem solid ${theme.color.secondary};
  }

  &:focus-within .icon-wrapper {
    color: ${theme.color.secondary};
  }
`;

export const Input = styled.input<IconPositionProps>`
  ${({ iconPosition }) => css`
    color: ${theme.color.black};
    font-size: ${theme.font.size.medium};
    padding-top: 0.7rem;
    //padding-${iconPosition}: ${theme.spacings.xxsmall};
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;

    transition: all 0.15s linear;

    ::placeholder {
      color: transparent;
    }

    &:focus + .label-wrapper,
    &:not(:placeholder-shown) + .label-wrapper {
      top: -2px;
      left: 10px;
      background-color: ${colorInput};
      padding: 0 0.5rem;
    }

    &:focus + .label-wrapper > label,
    &:not(:placeholder-shown) + .label-wrapper > label {
      margin-top: -0.8rem;
      color: ${theme.color.secondary};
      font-weight: 600;
    }
  `}
`;

export const LabelWrapper = styled.span<IconPositionProps>`
  ${({ iconPosition, icon, iconDefault }) => css`
    pointer-events: none;
    position: absolute;
    background-color: transparent;
    top: calc(50% - 0.8rem);
    ${(!!iconDefault || !!icon) && iconPosition === 'left' && 'left: 50px'};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s linear;
  `}
`;

export const Label = styled.label`
  font-size: ${theme.font.size.small};
  color: ${theme.color.title};
`;

export const Icon = styled.div<IconPositionProps>`
  ${({ iconPosition }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    color: ${theme.color.gray_default};
    order: ${iconPosition === 'right' ? 1 : 0};

    ${iconPosition === 'left'
      ? `margin-right: ${theme.spacings.xxsmall};`
      : `margin-left: ${theme.spacings.xxsmall};`}

    & > svg {
      width: 100%;
    }
  `}
`;

export const Error = styled.p`
  color: ${theme.color.error};
  font-size: ${theme.font.size.xsmall};
  margin-top: 0.2rem;
  margin-left: 0.5rem;
`;

const wrapperModifiers = {
  error: () => css`
    ${InputWrapper} {
      border-color: ${theme.color.error};
    }

    ${Label}, ${Icon} {
      color: ${theme.color.error} !important;
    }
  `,

  disabled: () => css`
    ${Label},
    ${Input},
    ${Icon} {
      cursor: not-allowed;
      color: ${theme.color.gray_default} !important;

      &::placeholder {
        color: currentColor;
      }
    }

    ${InputWrapper} {
      border-color: ${theme.color.gray_default};
    }
  `,

  outline: () => css`
    ${Input} {
      padding-top: 1.5rem;
      &:focus + .label-wrapper,
      &:not(:placeholder-shown) + .label-wrapper {
        background-color: transparent;
      }

      &:focus + .label-wrapper > label,
      &:not(:placeholder-shown) + .label-wrapper > label {
        margin-top: 0.7rem;
        font-weight: normal;
      }

      &:focus + .icon-wrapper,
      &:not(:placeholder-shown) + .icon-wrapper {
        margin-top: 0.7rem;
        font-weight: normal;
      }
    }

    ${Icon} {
      padding-top: 10px;
    }

    ${LabelWrapper} {
      top: calc(50% - 3px);
    }
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ disabled, error, outline }) => css`
    ${!!error && wrapperModifiers.error()}
    ${disabled && wrapperModifiers.disabled()}
    ${outline && wrapperModifiers.outline()}
    padding-top: 13px;
  `}
`;
