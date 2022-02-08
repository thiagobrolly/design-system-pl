import React, { useState, useEffect, useCallback } from 'react';
import * as S from './styles';
// Images country flags
import BR from '../../../assets/icon-flag-brazil.svg';
import EN from '../../../assets/icon-flag-eua.svg';
import ES from '../../../assets/icon-flag-spain.svg';

export const localeOptions = [
  { id: 0, value: 'pt-BR', image: BR },
  { id: 1, value: 'en-US', image: EN },
  { id: 2, value: 'es-ES', image: ES },
];

export type SelectLanguageProps = {
  locale?: 'pt-BR' | 'en-US' | 'es-ES';
  // localeOptions: { id: number; value: string; image: string }[];
  // dispatchSettings: React.Dispatch<{ type: string }>;
};

export const SelectLanguage = ({
  locale = 'pt-BR',
}: // localeOptions,
// dispatchSettings,
SelectLanguageProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState([undefined, '']);

  const toggling = () => setIsOpen(!isOpen);

  // const setSettingsDispatch = useCallback(
  //   (localeString: string) => {
  //     switch (localeString) {
  //       case 'pt-BR':
  //         dispatchSettings({ type: 'SET_LOCALE_BR' });
  //         break;
  //       case 'en-US':
  //         dispatchSettings({ type: 'SET_LOCALE_EN' });
  //         break;
  //       case 'es-ES':
  //         dispatchSettings({ type: 'SET_LOCALE_ES' });
  //         break;
  //       default:
  //         dispatchSettings({ type: 'SET_LOCALE_BR' });
  //     }
  //   },
  //   [dispatchSettings],
  // );

  const onOptionClicked = useCallback((localeString: string) => {
    // const values = localeOptions;
    // if (values !== null && values !== undefined && values.length > 0) {
    for (let i = 0; i < localeOptions.length; i += 1) {
      if (localeString === localeOptions[i].value) {
        // setSettingsDispatch(localeOptions[i].value);
        setSelectedImage([localeOptions[i].image, localeOptions[i].value]);
        setIsOpen(false);
        break;
      }
    }
    // }
  }, []);

  useEffect(() => {
    onOptionClicked(locale);
  }, [locale, onOptionClicked]);

  const renderDropDown = () => {
    // let renderDD;
    // if (
    //   localeOptions !== null &&
    //   localeOptions !== undefined &&
    //   localeOptions.length > 0
    // ) {
    // renderDD = (
    return (
      <S.DropDownList id="select-dropdwon_list">
        {localeOptions.map((option) => (
          <S.ListItem
            onClick={() => onOptionClicked(option.value)}
            key={option.id}
            id={`${'select-list_item_'}${option.value}`}
          >
            <S.ListImage
              id={`${'select-list_image_itens_'}${option.value}`}
              src={option.image}
              alt={`${'language country flag_'}${option.value}`}
            />
          </S.ListItem>
        ))}
      </S.DropDownList>
    );
    // } else {
    //   renderDD = <span>null</span>;
    // }
    // return renderDD;
  };

  return (
    <S.SelectContainer id="select-container" role="menu">
      <S.DropDownHeader id="select-dropdwon_header" onClick={toggling}>
        <S.ListImage
          id="select-list_image_header"
          src={selectedImage[0]}
          alt={`${'selectlanguage country flag_'}${selectedImage[1]}`}
        />
      </S.DropDownHeader>
      {isOpen && renderDropDown()}
    </S.SelectContainer>
  );
};
