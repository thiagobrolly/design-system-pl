import styled, { css } from 'styled-components';
import { theme } from '../..';

interface WrapperProps {
  isOpen?: boolean;
}

const wrapperModifiers = {
  open: () => css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;
    transform: translateY(-1.6rem);
  `,
};

export const SelectContainer = styled.div`
  position: relative;
`;

export const DropdownHeader = styled.div`
  padding: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const DropdownList = styled.ul`
  position: absolute;
  background-color: ${theme.color.white};
  border: 0.1rem solid ${theme.color.gray_700};
  border-radius: 4px;
  z-index: ${theme.layers.alwayOnTop};
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

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: ${theme.layers.overlay};
`;

export const Wrapper = styled.div<WrapperProps>`
  ${({ isOpen }) => css`
    position: relative;
    width: max-content;
    ${DropdownList}, ${Overlay} {
      ${isOpen && wrapperModifiers.open()}
      ${!isOpen && wrapperModifiers.close()}
    }
    }
  `}
`;
