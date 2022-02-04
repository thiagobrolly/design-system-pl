import { useState } from 'react';
import * as S from './styles';

export type TooltipProps = {
  title: React.ReactNode;
  children: React.ReactNode;
  position?: 'right' | 'left';
  className?: string;
  isOpen?: boolean;
};

export const Tooltip = ({
  title,
  children,
  position = 'left',
  className = '',
}: TooltipProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Wrapper isOpen={isOpen} className={className}>
      <S.Title onClick={() => setIsOpen(!isOpen)}>{title}</S.Title>

      <S.Content aria-hidden={!isOpen} position={position}>
        {children}
      </S.Content>
      <S.Overlay aria-hidden={!isOpen} onClick={() => setIsOpen(false)} />
    </S.Wrapper>
  );
};
