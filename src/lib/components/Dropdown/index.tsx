import { useState } from 'react';
import { IconArrow } from '../Icons';
import * as S from './styles';

export type DropdownProps = {
  title?: string;
  children?: React.ReactNode;
};

export const Dropdown = ({
  title = 'default Dropdown title',
  children,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => setIsOpen(!isOpen);

  const renderDropDown = () => {
    return (
      <S.DropdownList aria-label="dropdown-list" aria-hidden={!isOpen}>
        {children}
      </S.DropdownList>
    );
  };

  const renderIcon = () =>
    isOpen ? <IconArrow size={16} rotate180 /> : <IconArrow size={16} />;

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.DropdownContainer aria-label="dropdown-container" role="menu">
        <S.DropdownHeader aria-label="dropdown-header" onClick={toggling}>
          <S.DropdownTitle aria-label="dropdown-title">{title}</S.DropdownTitle>
          {renderIcon()}
        </S.DropdownHeader>
        {isOpen && renderDropDown()}
      </S.DropdownContainer>
      <S.Overlay
        aria-label="dropdown-overlay"
        aria-hidden={!isOpen}
        onClick={toggling}
      />
    </S.Wrapper>
  );
};
