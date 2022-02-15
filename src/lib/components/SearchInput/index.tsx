import React, { useState } from 'react';
import * as S from './styles';
import { IconSearch } from '../Icons';

export type SearchInputProps = {
  fetchData: (value: string) => boolean;
  children: React.ReactNode;
  outline?: boolean;
  disabled?: boolean;
  name?: string;
  label?: string;
  initialValue?: string;
  errorMessage?: string;
  readyOnly?: boolean;
  autocomplete?: boolean;
};

export const SearchInput = ({
  fetchData,
  outline = false,
  label,
  initialValue = '',
  errorMessage = 'Registro não encontrado',
  readyOnly,
  autocomplete,
  name,
  children,
  ...props
}: SearchInputProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(initialValue);
  const [currentErrorMessage, setCurrentErrorMessage] = useState('');

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      e.target.classList.add('hasContent');
    } else {
      e.target.classList.remove('hasContent');
    }
  };

  // Sets the value. Sets the error msg (if no entry was found).
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (newValue.length >= 3) {
      const foundData = !!fetchData && fetchData(newValue);
      if (foundData) {
        setCurrentErrorMessage('');
        setIsOpen(true);
      } else {
        setCurrentErrorMessage(errorMessage);
        setIsOpen(false);
      }
    } else {
      setCurrentErrorMessage('');
      setIsOpen(false);
    }
  };

  return (
    <S.Wrapper>
      <S.InputWrapper>
        <S.Input
          {...(name ? { id: name } : { id: 'search-input-defaultID' })}
          type="search"
          outline={outline}
          onBlur={handleBlur}
          onChange={handleChange}
          value={value}
          errorMessage={currentErrorMessage}
          readOnly={readyOnly}
          autoComplete={autocomplete ? 'on' : 'off'}
          {...props}
        />
        <S.Label
          htmlFor={name || 'search-input-defaultID'}
          errorMessage={currentErrorMessage}
        >
          {label}
        </S.Label>
        {currentErrorMessage && (
          <S.ErrorMessage>{currentErrorMessage}</S.ErrorMessage>
        )}
        <S.LeftIconContainer className="iconDiv">
          <IconSearch size={16} color="rgba(168, 168, 168, 0.47)" />
        </S.LeftIconContainer>
      </S.InputWrapper>
      {isOpen && (
        <S.DropdownList aria-label="dropdown-list">{children}</S.DropdownList>
      )}
    </S.Wrapper>
  );
};
