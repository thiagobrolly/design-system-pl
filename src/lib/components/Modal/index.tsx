import React from 'react';

import * as S from './styles';

export interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onRequestClose: (newValue: boolean) => void;
  shouldCloseOnOverlayClick?: boolean;
  viewCloseButton?: boolean;
}

export const Modal = ({
  isOpen,
  onRequestClose,
  shouldCloseOnOverlayClick = false,
  viewCloseButton,
  children,
  ...props
}: ModalProps) => {
  return (
    <S.Overlay
      isOpen={isOpen}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      onClick={() => (shouldCloseOnOverlayClick ? onRequestClose(false) : null)}
      role="region"
      aria-label="overlay"
    >
      <S.Container {...props}>
        {viewCloseButton && (
          <S.Close onClick={() => onRequestClose(false)}>X</S.Close>
        )}
        {children}
      </S.Container>
    </S.Overlay>
  );
};
