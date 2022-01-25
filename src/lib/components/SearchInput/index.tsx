import React, { useState } from 'react';
import * as Styled from './styles';
import { SearchInputProps } from './types';
import ResultsContainer from './ResultContainer';

import { IconSearch } from '../Icons';

export const SearchInput: React.FC<SearchInputProps> = ({
  width = '320px',
  searchInputType = 'outline',
  label,
  defaultErrorMessage,
  readyOnly,
  autocomplete,
  inputId,
  inputArialabel,
  inputName,
  labelId,
  labelArialabel,
  options,
  ...props
}) => {
  const [resultList, setResultList] = useState<Array<string>>([]);
  const [wordSearched, setWordSearched] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      e.target.classList.add('hasContent');
    } else {
      e.target.classList.remove('hasContent');
    }
  };

  const filterResult = (searchPhrase: string) => {
    return options.filter((option) =>
      option.toLowerCase().includes(searchPhrase.toLowerCase()),
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWordSearched(e.target.value);
    if (e.target.value.length >= 3) {
      const searchResponse = filterResult(e.target.value);
      if (searchResponse.length > 0) {
        setResultList(searchResponse);
        setErrorMessage('');
      } else {
        setErrorMessage(defaultErrorMessage);
        setResultList([]);
      }
    } else {
      setResultList([]);
      setErrorMessage('');
    }
  };

  return (
    <Styled.MainContainer>
      <Styled.InputContainer>
        <Styled.Input
          id={inputId}
          aria-label={inputArialabel}
          name={inputName}
          type="search"
          width={width}
          searchInputType={searchInputType}
          onBlur={handleBlur}
          onChange={handleChange}
          value={wordSearched}
          errorMessage={errorMessage}
          readOnly={readyOnly}
          autoComplete={autocomplete ? 'on' : 'off'}
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
        <Styled.LeftIconContainer className="iconDiv">
          <IconSearch size={20} color="rgba(168, 168, 168, 0.47)" />
        </Styled.LeftIconContainer>
      </Styled.InputContainer>
      <ResultsContainer
        width={width}
        resultList={resultList}
        setWordSearched={setWordSearched}
        setResultList={setResultList}
      />
    </Styled.MainContainer>
  );
};
