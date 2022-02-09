import styled from 'styled-components';
import { theme } from '../..';

export const SelectContainer = styled.div`
  position: relative;
`;

export const DropDownHeader = styled.div`
  padding: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const DropDownList = styled.ul`
  position: absolute;
  border: 0.1rem solid ${theme.color.gray_700};
  border-radius: 4px;
  z-index: 100;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  list-style: none;
`;

export const ListItem = styled.li`
  margin: 0.3rem;
  opacity: 0.7;
  transition: 0.2s;
  margin-bottom: 0;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

export const ListImage = styled.img`
  width: 4rem;

  @media (max-width: 768px) {
    width: 3rem;
  }
  @media (max-width: 480px) {
    width: 2.5rem;
  }
`;
