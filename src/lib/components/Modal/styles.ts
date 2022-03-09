import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';

type OverlayProps = {
  shouldCloseOnOverlayClick?: boolean;
};

type ModalProps = {
  shouldCloseOnEscClick: boolean;
  isOpen: boolean;
};

const modalModifiers = {
  open: () => css`
    opacity: 1;
    visibility: visible;

    ${Content} {
      transform: translateY(0px);
      opacity: 1;
    }
  `,

  close: () => css`
    opacity: 0;
    pointer-events: none;
    visibility: hidden;

    ${Content} {
      opacity: 0;
      transform: translateY(-150px);
    }
  `,
};

export const Modal = styled.div<ModalProps>`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${theme.layers.modal};
  transition: ${theme.transition.default};

  ${({ isOpen }) => css`
    ${isOpen && modalModifiers.open()}
    ${!isOpen && modalModifiers.close()}
  `}
`;

export const Overlay = styled.div<OverlayProps>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: ${theme.layers.overlay};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  color: #1e1d24;
  border-radius: 8px;
  z-index: 99999;
  transition: ${theme.transition.default};
  /* animation: slideIn 0.5s ease-in-out;

  @keyframes slideIn {
    from {
      transform: translateY(-150px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  } */
`;

export const Close = styled.button`
  align-self: flex-end;
  margin-bottom: 10px;
  color: ${theme.color.primary};
  background: transparent;
  border: 0;
  transition: 0.3s;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: ${theme.color.gray_500};
  }
`;
