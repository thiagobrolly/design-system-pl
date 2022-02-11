import { useState } from 'react';
import { IconArrow } from '../Icons';
import * as S from './styles';

export const dropdownChildrenMock = (
  <>
    <p>teste1</p>
    <span>
      teste2 zzzzzzzzzzzz sd sodkaso koaskdoa ko asdas as das daasdasd
    </span>
    <p>teste3</p>
    <p>teste4</p>
    <p>teste5</p>
    <p>teste6</p>
    <p>teste7</p>
    <p>teste8</p>
    <p>teste9</p>
    <p>teste10</p>
    <p>teste11</p>
    <p>teste12</p>
    <p>teste13</p>
    <p>teste14</p>
    <p>teste15</p>
    <p>teste16</p>
    <p>teste17</p>
    <p>teste18</p>
  </>
);

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
