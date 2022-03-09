import React, {
  useState,
  InputHTMLAttributes,
  forwardRef,
  ForwardRefRenderFunction,
} from 'react';
import {
  IconUser,
  IconSearch,
  IconEye,
  IconClosedEye,
  IconClose,
} from '../Icons';
import * as S from './styles';

export type TextFieldProps = {
  onInput?: (value: string) => void;
  label?: string;
  initialValue?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  outline?: boolean;
  iconDefault?: boolean;
  inputType?: 'email' | 'number' | 'password' | 'search' | 'tel' | 'text';
  disabled?: boolean;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const TextFieldBase: ForwardRefRenderFunction<
  HTMLInputElement,
  TextFieldProps
> = (
  {
    icon,
    iconPosition = 'left',
    inputType = 'text',
    label,
    name,
    initialValue = '',
    error,
    disabled = false,
    iconDefault = false,
    outline = false,
    onInput,
    ...props
  },
  ref,
) => {
  const [value, setValue] = useState(initialValue);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    if (!disabled) {
      setShowPassword(!showPassword);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setValue(newValue);

    !!onInput && onInput(newValue);
  };
  return (
    <S.Wrapper
      className="wrapper-input"
      disabled={disabled}
      error={!!error}
      outline={outline}
      inputType={inputType}
      {...props}
    >
      <S.InputWrapper>
        {!iconDefault && !!icon && (
          <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>
        )}

        {iconDefault && (
          <S.Icon
            iconPosition={iconPosition}
            icon={!!icon}
            className="icon-wrapper"
          >
            {inputType === 'email' ? (
              <IconUser size={20} color="currentColor" />
            ) : inputType === 'search' ? (
              value.length === 0 ? (
                <IconSearch size={20} color="currentColor" />
              ) : (
                <IconClose
                  size={16}
                  color="currentColor"
                  className="search-clear"
                  onClick={() => setValue('')}
                />
              )
            ) : inputType === 'password' ? (
              showPassword ? (
                <IconEye
                  size={20}
                  onClick={togglePasswordVisibility}
                  style={{ cursor: 'pointer' }}
                  color="currentColor"
                />
              ) : (
                <IconClosedEye
                  size={20}
                  style={{ cursor: 'pointer' }}
                  onClick={togglePasswordVisibility}
                  color="currentColor"
                />
              )
            ) : (
              !iconDefault
            )}
          </S.Icon>
        )}

        <S.Input
          type={
            inputType === 'password'
              ? showPassword
                ? 'text'
                : 'password'
              : inputType
          }
          onChange={onChange}
          value={value}
          iconPosition={iconPosition}
          disabled={disabled}
          name={name}
          // autoComplete="on"
          placeholder=" "
          ref={ref}
          className="input"
          iconDefault={iconDefault}
          icon={icon}
          inputType={inputType}
          {...(label ? { id: name } : {})}
        />
        {!!label && (
          <S.LabelWrapper
            className="label-wrapper"
            iconPosition={iconPosition}
            iconDefault={iconDefault}
            icon={icon}
            inputType={inputType}
          >
            <S.Label htmlFor={name}>{label}</S.Label>
          </S.LabelWrapper>
        )}
      </S.InputWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  );
};

export const TextField = forwardRef(TextFieldBase);
