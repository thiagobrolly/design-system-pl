import React from 'react';
import * as Styled from './styles';
import { GenericInputProps, IconType } from './types';

import { IconLock, IconSearch, IconUser, IconAlertTriangle } from '../Icons';

export const GenericInput: React.FC<GenericInputProps> = ({
  inputType = 'text',
  width = '320px',
  genericInputType = 'outline',
  label,
  leftIcon = undefined,
  leftIconType = undefined,
  rightIcon = undefined,
  rightIconType = undefined,
  errorMessage,
  autocomplete,
  readyOnly,
  inputId,
  inputArialabel,
  inputName,
  labelId,
  labelArialabel,
  ...props
}) => {
  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      e.target.classList.add('hasContent');
    } else {
      e.target.classList.remove('hasContent');
    }
  };
  // const iconProps = {
  //   viewBox: '10 10 24 24',
  //   width: '24px',
  //   height: '24px',
  //   fill: 'rgba(168, 168, 168, 0.47)',
  // };
  const iconOptions = {
    searchIcon: <IconSearch size={20} />,
    lockIcon: <IconLock size={20} />,
    userIcon: <IconUser size={20} />,
    undefined: <IconAlertTriangle size={20} />,
  };

  const renderIcon = (
    active: boolean | undefined,
    type: IconType | undefined,
  ) => {
    if (active && type) {
      return iconOptions[type];
    }
    if (active && !type) {
      return iconOptions.undefined;
    }
    return null;
  };

  return (
    <Styled.Container>
      <Styled.Input
        id={inputId}
        aria-label={inputArialabel}
        name={inputName}
        type={inputType}
        width={width}
        genericInputType={genericInputType}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        onBlur={handleBlur}
        errorMessage={errorMessage}
        readOnly={readyOnly}
        autoComplete={autocomplete ? 'on' : 'off'}
        {...props}
      />
      <Styled.Label
        id={labelId}
        htmlFor={inputId}
        aria-label={labelArialabel}
        leftIcon={leftIcon}
        errorMessage={errorMessage}
      >
        {label}
      </Styled.Label>
      {errorMessage && (
        <Styled.ErrorMessage>{errorMessage}</Styled.ErrorMessage>
      )}
      <Styled.LeftIconContainer className="iconDiv">
        {renderIcon(leftIcon, leftIconType)}
      </Styled.LeftIconContainer>
      <Styled.RightIconContainer className="iconDiv">
        {renderIcon(rightIcon, rightIconType)}
      </Styled.RightIconContainer>
    </Styled.Container>
  );
};
