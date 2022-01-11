import React from 'react';
import * as Styled from './styles';
import { GenericInputProps } from './types';

export const GenericInput: React.FC<GenericInputProps> = ({
  inputType = 'text',
  width = '320px',
  genericInputType = 'outlined',
  label,
  leftIcon = undefined,
  rightIcon = undefined,
  errorMessage,
  inputId,
  inputArialabel,
  inputName,
  labelId,
  labelArialabel,
  ...props
}) => {
  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      e.target.classList.add('hasContent');
    } else {
      e.target.classList.remove('hasContent');
    }
  };

  return (
    <Styled.Container>
      <Styled.Input
        id={inputId}
        aria-label={inputArialabel}
        name={inputName}
        type={inputType}
        width={width}
        genericInputType={genericInputType}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        onBlur={handleBlur}
        errorMessage={errorMessage}
        {...props}
      />
      <Styled.Label
        id={labelId}
        htmlFor={inputId}
        aria-label={labelArialabel}
        leftIcon={leftIcon}
        errorMessage={errorMessage}
      >
        {label}
      </Styled.Label>
      {errorMessage && (
        <Styled.ErrorMessage>{errorMessage}</Styled.ErrorMessage>
      )}
      <Styled.LeftIconContainer className="iconDiv">
        {leftIcon}
      </Styled.LeftIconContainer>
      <Styled.RightIconContainer className="iconDiv">
        {rightIcon}
      </Styled.RightIconContainer>
    </Styled.Container>
  );
};
