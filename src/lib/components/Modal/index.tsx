import React, { useEffect } from 'react';
import { IconClose } from '../Icons';

import * as S from './styles';

export interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onRequestClose: (newValue: boolean) => void;
  shouldCloseOnOverlayClick?: boolean;
  shouldCloseOnEscClick?: boolean;
  viewCloseButton?: boolean;
}

export const Modal = ({
  isOpen,
  onRequestClose,
  shouldCloseOnOverlayClick = false,
  shouldCloseOnEscClick = true,
  viewCloseButton,
  children,
  ...props
}: ModalProps) => {
  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      key === 'Escape' && shouldCloseOnEscClick && onRequestClose(false);
    };
    window.addEventListener('keyup', handleKeyUp);
    return () => window.removeEventListener('keyup', handleKeyUp);
  }, [onRequestClose, shouldCloseOnEscClick]);

  // if (isOpen) {
  //   document.body.style.overflow = 'hidden';
  // } else {
  //   document.body.removeAttribute('style');
  // }

  return (
    <S.Modal
      className="ui-modal"
      shouldCloseOnEscClick={shouldCloseOnEscClick}
      isOpen={isOpen}
    >
      <S.Overlay
        shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
        onClick={() =>
          shouldCloseOnOverlayClick ? onRequestClose(false) : null
        }
        role="region"
        aria-label="overlay"
      />
      <S.Content {...props}>
        {viewCloseButton && (
          <S.Close onClick={() => onRequestClose(false)}>
            <IconClose size={16} color="currentColor" />
          </S.Close>
        )}
        {children}
      </S.Content>
    </S.Modal>
  );
};
