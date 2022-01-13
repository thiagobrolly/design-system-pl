import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import * as Styled from './styles';
import { SearchInputProps } from './types';

export const SearchInput: React.FC<SearchInputProps> = ({
  inputType = 'text',
  width = '320px',
  searchInputType = 'outlined',
  label,
  errorMessage,
  readyOnly,
  inputId,
  inputArialabel,
  inputName,
  labelId,
  labelArialabel,
  options,
  ...props
}) => {
  const [resultList, setResultList] = useState<Array<string>>([]);

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
    if (e.target.value.length >= 3) {
      setResultList(filterResult(e.target.value));
    } else {
      setResultList([]);
    }
  };

  return (
    <>
      <Styled.Container>
        <Styled.Input
          id={inputId}
          aria-label={inputArialabel}
          name={inputName}
          type={inputType}
          width={width}
          searchInputType={searchInputType}
          onBlur={handleBlur}
          onChange={handleChange}
          errorMessage={errorMessage}
          readOnly={readyOnly}
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
          <FaSearch />
        </Styled.LeftIconContainer>
      </Styled.Container>
      {resultList.length > 0 && (
        <Styled.ResultsContainer width={width}>
          {resultList.map((element) => (
            <Styled.ResultItem>{element}</Styled.ResultItem>
          ))}
        </Styled.ResultsContainer>
      )}
      <p>teste aqui</p>
      <p>teste 2</p>
    </>
  );
};
