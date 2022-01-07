import React from 'react';
import { FaSearch } from 'react-icons/fa';
import * as Styled from './styles';

export interface TextFieldProps {
  inputType: 'text' | 'number' | 'email' | 'password';
  label?: string;
  textFieldType?: 'filled' | 'outlined';
  leftIcon?: boolean;
  errorMessage?: string;
  disabled?: boolean;
  // placeholder?: string;
  // onClick?: () => void;
}

export interface InputProps {
  type: 'text' | 'number' | 'email' | 'password';
  disabled?: boolean;
  textFieldType?: 'filled' | 'outlined';
  errorMessage?: string;
  leftIcon?: boolean;
  // placeholder?: string;
}

export interface LabelProps {
  leftIcon?: boolean;
  errorMessage?: string;
}

export const TextField: React.FC<TextFieldProps> = ({
  inputType = 'text',
  label,
  textFieldType,
  leftIcon = false,
  errorMessage,
  ...props
}) => {
  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      e.target.classList.add('hasContent');
    } else {
      e.target.classList.remove('hasContent');
    }

    // Fazer Validation
  };

  return (
    <Styled.Container>
      <Styled.LeftIconContainer>
        {leftIcon && <FaSearch />}
      </Styled.LeftIconContainer>
      <Styled.Input
        type={inputType}
        textFieldType={textFieldType}
        leftIcon={leftIcon}
        onBlur={handleBlur}
        errorMessage={errorMessage}
        {...props}
      />
      <Styled.Label leftIcon={leftIcon} errorMessage={errorMessage}>
        {label}
      </Styled.Label>
      {errorMessage && (
        <Styled.ErrorMessage>{errorMessage}</Styled.ErrorMessage>
      )}
    </Styled.Container>
  );
};
