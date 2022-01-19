import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import * as Styled from './styles';
import { PasswordInputProps } from './types';

export const PasswordInput: React.FC<PasswordInputProps> = ({
  width = '320px',
  passwordInputType = 'outlined',
  label,
  errorMessage,
  inputId,
  inputArialabel,
  inputName,
  labelId,
  labelArialabel,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      e.target.classList.add('hasContent');
    } else {
      e.target.classList.remove('hasContent');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Styled.Container>
      <Styled.Input
        id={inputId}
        aria-label={inputArialabel}
        name={inputName}
        type={showPassword ? 'text' : 'password'}
        width={width}
        passwordInputType={passwordInputType}
        onBlur={handleBlur}
        errorMessage={errorMessage}
        autoComplete="off"
        {...props}
      />
      <Styled.Label
        id={labelId}
        htmlFor={inputId}
        aria-label={labelArialabel}
        errorMessage={errorMessage}
      >
        {label}
      </Styled.Label>
      {errorMessage && (
        <Styled.ErrorMessage>{errorMessage}</Styled.ErrorMessage>
      )}
      <Styled.RightIconContainer
        aria-label="togglePasswordBtn"
        className="iconDiv"
        onClick={togglePasswordVisibility}
      >
        {showPassword ? (
          <FaEye aria-label="hidePasswordIcon" />
        ) : (
          <FaEyeSlash aria-label="showPasswordIcon" />
        )}
      </Styled.RightIconContainer>
    </Styled.Container>
  );
};
