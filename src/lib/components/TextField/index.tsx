import React, { useState, InputHTMLAttributes } from 'react';
import { IconUser, IconSearch, IconEye, IconClosedEye } from '../Icons';
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

export const TextField = ({
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
}: TextFieldProps) => {
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
    <S.Wrapper disabled={disabled} error={!!error} outline={outline}>
      <S.InputWrapper>
        {!iconDefault && !!icon && (
          <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>
        )}

        {iconDefault && (
          <S.Icon iconPosition={iconPosition} className="icon-wrapper">
            {inputType === 'email' ? (
              <IconUser size={5} color="currentColor" />
            ) : inputType === 'search' ? (
              <IconSearch size={20} color="currentColor" />
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
          autoComplete="off"
          placeholder=" "
          {...(label ? { id: name } : {})}
          {...props}
        />
        {!!label && (
          <S.LabelWrapper
            className="label-wrapper"
            iconPosition={iconPosition}
            iconDefault={iconDefault}
            icon={icon}
          >
            <S.Label htmlFor={name}>{label}</S.Label>
          </S.LabelWrapper>
        )}
      </S.InputWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  );
};
