import React from 'react';
import * as Styled from './styles';
import { ResultsContainerProps } from './types';

const ResultContainer: React.FC<ResultsContainerProps> = ({
  width,
  resultList,
}) => {
  return (
    <>
      {resultList.length > 0 && (
        <Styled.Container width={width}>
          {resultList.map((element) => (
            <Styled.ResultItem key={element}>
              {element} <span>add TAG</span>
            </Styled.ResultItem>
          ))}
        </Styled.Container>
      )}
    </>
  );
};

export default ResultContainer;
