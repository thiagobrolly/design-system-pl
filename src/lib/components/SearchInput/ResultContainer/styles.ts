import styled from 'styled-components';
import { theme } from '../../../styles/theme';
import { ContainerProps } from './types';

export const Container = styled.ul<ContainerProps>`
  position: absolute;
  top: 62px;
  z-index: 2;
  width: ${(props) => props.width};
  max-height: 300px;
  background-color: white;
  border-radius: 10px;
  padding: 10px 16px 0px 16px;
  box-shadow: 0 3px 10px 0 rgba(112, 112, 112, 0.16);
  transition: 0.8s;
  overflow-x: scroll;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track:hover {
  }
  ::-webkit-scrollbar-thumb {
    background: lightgray;
    border-radius: 10px;
    cursor: pointer;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.secondaryC};
  }
  ::-webkit-scrollbar-corner {
    border-radius: 10px;
  }
`;

export const ResultItem = styled.li`
  padding: 10px 0;
  color: ${theme.colors.secondaryB};
  font-size: 16px;
  line-height: 20px;
  list-style-type: none;
  cursor: pointer;
  white-space: nowrap;
  display: flex;
  justify-content: space-between;
`;
