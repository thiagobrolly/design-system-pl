import { useState } from 'react';
import * as S from './styles';

import { TooltipProps } from './types';

export const Tooltip = ({
  title,
  children,
  position = 'left',
}: TooltipProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Title onClick={() => setIsOpen(!isOpen)}>{title}</S.Title>

      <S.Content aria-hidden={!isOpen} position={position}>
        {children}
      </S.Content>
      <S.Overlay aria-hidden={!isOpen} onClick={() => setIsOpen(false)} />
    </S.Wrapper>
  );
};
