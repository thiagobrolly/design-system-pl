import React, { useState } from 'react';
import { FaEyeSlash } from 'react-icons/fa';
import * as Styled from './styles';
import { PasswordInputProps } from './types';

import { ReactComponent as IconEye } from '../../assets/web_icons/icon-eye.svg';
// import { ReactComponent as IconClosedEye } from '../../assets/web_icons/icon-closed-eye.svg';

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
          <IconEye aria-label="hidePasswordIcon" />
        ) : (
          // <IconClosedEye aria-label="showPasswordIcon" />
          <FaEyeSlash aria-label="showPasswordIcon" />
        )}
      </Styled.RightIconContainer>
    </Styled.Container>
  );
};
