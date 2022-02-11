import styled from 'styled-components';
import { theme } from '../../../styles/theme';
import { ResultItemProps } from './types';

export const Container = styled.ul`
  position: absolute;
  top: 62px;
  z-index: 2;
  width: max-content;
  max-height: 400px;
  background-color: white;
  border-radius: 10px;
  padding-top: 10px;
  padding-bottom: 4px;
  box-shadow: 0 3px 10px 0 rgba(112, 112, 112, 0.16);
  transition: 0.8s;
  overflow-x: scroll;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: lightgray;
    border-radius: 10px;
    cursor: pointer;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.color.secondary_400};
  }
  ::-webkit-scrollbar-corner {
    border-radius: 10px;
  }
`;

export const ResultItem = styled.li<ResultItemProps>`
  padding: 10px 16px;
  color: ${theme.color.secondary_400};
  font-size: 16px;
  line-height: 20px;
  list-style-type: none;
  cursor: pointer;
  white-space: nowrap;
  display: flex;
  justify-content: space-between;
  :hover {
    background-color: lightgray;
  }
`;
