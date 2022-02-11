import React from 'react';
import * as Styled from './styles';
import { ResultsContainerProps } from './types';

const ResultContainer: React.FC<ResultsContainerProps> = ({
  resultList,
  setWordSearched,
  setResultList,
}) => {
  const handleClick = (element: string) => {
    setWordSearched(element);
    setResultList([]);
  };
  return (
    <>
      {resultList.length > 0 && (
        <Styled.Container>
          {resultList.map((element) => (
            <Styled.ResultItem
              key={element}
              onClick={() => handleClick(element)}
            >
              <span>{element}</span>
              <span>add TAG</span>
            </Styled.ResultItem>
          ))}
        </Styled.Container>
      )}
    </>
  );
};

export default ResultContainer;
