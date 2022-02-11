import React, { useState } from 'react';
import * as S from './styles';
import { SearchInputProps } from './types';
import ResultsContainer from './ResultContainer';

import { IconSearch } from '../Icons';

export const SearchInput: React.FC<SearchInputProps> = ({
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
    <S.Wrapper>
      <S.InputWrapper>
        <S.Input
          id={inputId}
          aria-label={inputArialabel}
          name={inputName}
          type="search"
          searchInputType={searchInputType}
          onBlur={handleBlur}
          onChange={handleChange}
          value={wordSearched}
          errorMessage={errorMessage}
          readOnly={readyOnly}
          autoComplete={autocomplete ? 'on' : 'off'}
          {...props}
        />
        <S.Label
          id={labelId}
          htmlFor={inputId}
          aria-label={labelArialabel}
          errorMessage={errorMessage}
        >
          {label}
        </S.Label>
        {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
        <S.LeftIconContainer className="iconDiv">
          <IconSearch size={16} color="rgba(168, 168, 168, 0.47)" />
        </S.LeftIconContainer>
      </S.InputWrapper>
      <ResultsContainer
        resultList={resultList}
        setWordSearched={setWordSearched}
        setResultList={setResultList}
      />
    </S.Wrapper>
  );
};
