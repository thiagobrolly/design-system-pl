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

const dropdownContainerModifiers = {
  open: () => css`
    border: 0.1rem solid ${theme.color.secondary};
  `,
  close: () => css`
    border: 0.1rem solid ${theme.color.gray_800};
  `,
};

export const DropdownContainer = styled.div`
  position: relative;
  height: 56px;
  width: max-content;
  max-width: 32rem;
  background-color: ${theme.color.white};
  border-radius: 1rem;
  transition: 0.2s;
`;

export const DropdownHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  cursor: pointer;
  z-index: ${theme.layers.alwayOnTop};
`;

export const DropdownList = styled.div`
  position: absolute;
  background-color: ${theme.color.white};
  box-shadow: 0px 3px 10px 0px ${theme.color.gray_500};
  border-radius: 1rem;
  z-index: ${theme.layers.alwayOnTop};
  left: 0;
  padding: 24px 16px;
  margin-top: 4px;
  width: max-content;
  max-height: 30rem;
  // scrollbar
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    border-radius: 1rem;
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
    border-radius: 1rem;
  }
`;

export const DropdownTitle = styled.title`
  height: 2.4rem;
  font-size: 2rem;
  margin-right: 16px;
  cursor: pointer;
  color: ${theme.color.gray_default};
  // hide text when overflows
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
  // disable selecting the Title text when clicked
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
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
    ${DropdownContainer} {
        ${isOpen && dropdownContainerModifiers.open()}
        ${!isOpen && dropdownContainerModifiers.close()}
        :hover {
          border: 0.1rem solid ${theme.color.secondary};
        }
      }
    }
  `}
`;
