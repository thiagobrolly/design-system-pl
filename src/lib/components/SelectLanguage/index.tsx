import React, { useState, useEffect, useCallback } from 'react';
import * as S from './styles';
import flagBR from '../../../assets/icon-flag-brazil.svg';
import flagUS from '../../../assets/icon-flag-eua.svg';
import flagES from '../../../assets/icon-flag-spain.svg';

export const localeOptions = [
  { id: 0, localeValue: 'pt-BR', image: flagBR },
  { id: 1, localeValue: 'en-US', image: flagUS },
  { id: 2, localeValue: 'es-ES', image: flagES },
];

export type SelectLanguageProps = {
  locale?: 'pt-BR' | 'en-US' | 'es-ES';
  dispatchSettings?: React.Dispatch<{ type: string }>;
};

export const SelectLanguage = ({
  locale = 'pt-BR',
  dispatchSettings,
}: SelectLanguageProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({
    image: '',
    localeValue: '',
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
          setSelectedImage({
            image: localeOptions[i].image,
            localeValue: localeOptions[i].localeValue,
          });
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
      <S.DropDownList id="select-dropdwon_list">
        {localeOptions.map((option) => (
          <S.ListItem
            onClick={() => onOptionClicked(option.localeValue)}
            key={option.id}
            id={`select-list_item_${option.localeValue}`}
          >
            <S.ListImage
              id={`select-list_image_itens_${option.localeValue}`}
              src={option.image}
              alt={`language country flag_${option.localeValue}`}
            />
          </S.ListItem>
        ))}
      </S.DropDownList>
    );
  };

  return (
    <S.SelectContainer id="select-container" role="menu">
      <S.DropDownHeader id="select-dropdwon_header" onClick={toggling}>
        <S.ListImage
          id="select-list_image_header"
          src={selectedImage.image}
          alt={`selectlanguage country flag_${selectedImage.localeValue}`}
        />
      </S.DropDownHeader>
      {isOpen && renderDropDown()}
    </S.SelectContainer>
  );
};
