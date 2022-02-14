import React, { useState, useEffect, useCallback } from 'react';
import * as S from './styles';
import { IconFlagBrazil, IconFlagEua, IconFlagSpain } from '../Icons';

export const localeOptions = [
  {
    id: 0,
    localeValue: 'pt-BR',
    image: <IconFlagBrazil id="select-list_image_itens_pt-BR" />,
  },
  {
    id: 1,
    localeValue: 'en-US',
    image: <IconFlagEua id="select-list_image_itens_en-US" />,
  },
  {
    id: 2,
    localeValue: 'es-ES',
    image: <IconFlagSpain id="select-list_image_itens_es-ES" />,
  },
];

type OptionProps = {
  id: number;
  localeValue: string;
  image: JSX.Element;
};

export type SelectLanguageProps = {
  locale?: 'pt-BR' | 'en-US' | 'es-ES';
  dispatchSettings?: React.Dispatch<{ type: string }>;
};

export const SelectLanguage = ({
  locale = 'pt-BR',
  dispatchSettings,
}: SelectLanguageProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<OptionProps | undefined>({
    id: 0,
    localeValue: 'pt-BR',
    image: localeOptions[0].image,
  });

  const toggling = () => setIsOpen(!isOpen);

  const setSettingsDispatch = useCallback(
    (localeSelected: string) => {
      if (dispatchSettings) {
        switch (localeSelected) {
          case 'pt-BR':
            dispatchSettings({ type: 'SET_LOCALE_BR' });
            break;
          case 'en-US':
            dispatchSettings({ type: 'SET_LOCALE_EN' });
            break;
          case 'es-ES':
            dispatchSettings({ type: 'SET_LOCALE_ES' });
            break;
          default:
        }
      }
    },
    [dispatchSettings],
  );

  const onOptionClicked = useCallback(
    (localeSelected: string) => {
      for (let i = 0; i < localeOptions.length; i += 1) {
        if (localeSelected === localeOptions[i].localeValue) {
          setSelectedImage(localeOptions[i]);
          setIsOpen(false);
          setSettingsDispatch(localeOptions[i].localeValue);
          break;
        }
      }
    },
    [setSettingsDispatch],
  );

  useEffect(() => {
    onOptionClicked(locale);
  }, [locale, onOptionClicked]);

  const renderDropDown = () => {
    return (
      <S.DropdownList id="select-dropdwon_list" aria-hidden={!isOpen}>
        {localeOptions.map((option) => (
          <S.ListItem
            onClick={() => onOptionClicked(option.localeValue)}
            key={option.id}
            id={`select-list_item_${option.localeValue}`}
          >
            {option.image}
          </S.ListItem>
        ))}
      </S.DropdownList>
    );
  };

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.SelectContainer id="select-container" role="menu">
        <S.DropdownHeader id="select-dropdwon_header" onClick={toggling}>
          {selectedImage?.image}
        </S.DropdownHeader>
        {isOpen && renderDropDown()}
      </S.SelectContainer>
      <S.Overlay
        aria-label="dropdown-overlay"
        aria-hidden={!isOpen}
        onClick={toggling}
      />
    </S.Wrapper>
  );
};
