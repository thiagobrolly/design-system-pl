import React from 'react';
import * as Styled from './styles';
import { IconPaylivreProps, IconType } from './types';

import { ReactComponent as IconArrow } from '../../assets/web_icons/icon-arrow.svg';
import { ReactComponent as IconArrowFilled } from '../../assets/web_icons/icon-arrow-filled.svg';
import { ReactComponent as IconArrowOutline } from '../../assets/web_icons/icon-arrow-outline.svg';
import { ReactComponent as IconAlertTriangle } from '../../assets/web_icons/icon-alert-triangle.svg';
import { ReactComponent as IconAlertTriangleFilled } from '../../assets/web_icons/icon-alert-triangle-filled.svg';
import { ReactComponent as IconAlertTriangleOutline } from '../../assets/web_icons/icon-alert-triangle-outline.svg';
import { ReactComponent as IconLock } from '../../assets/web_icons/icon-lock.svg';
import { ReactComponent as IconLockFilled } from '../../assets/web_icons/icon-lock-filled.svg';
import { ReactComponent as IconLockOutline } from '../../assets/web_icons/icon-lock-outline.svg';
import { ReactComponent as IconSearch } from '../../assets/web_icons/icon-search.svg';
import { ReactComponent as IconSearchFilled } from '../../assets/web_icons/icon-search-filled.svg';
import { ReactComponent as IconSearchOutline } from '../../assets/web_icons/icon-search-outline.svg';
import { ReactComponent as IconUser } from '../../assets/web_icons/icon-user.svg';
import { ReactComponent as IconUserFilled } from '../../assets/web_icons/icon-user-filled.svg';
import { ReactComponent as IconUserOutline } from '../../assets/web_icons/icon-user-outline.svg';
// const nome = "icon-user";
// import { ReactComponent as IconUser } from {`../../assets/web_icons/${nome}.svg`};

// Importing dinamically all svgs
// const reqSvgs = require.context('../../assets/web_icons', true, /\.svg$/);
// const svgs = reqSvgs.keys().map((path) => reqSvgs(path));

// const iconsPathObject = reqSvgs.keys().reduce((images, path) => {
//   const key = path.substring(path.lastIndexOf('/') + 1, path.lastIndexOf('.'));
//   images[key] = reqSvgs(path);
//   return images;
// }, {});

// const svgsNames = reqSvgs.keys();

// const SvgComponentsArray = [];
// for (let i = 0; i < svgsNames.length; i++) {
//   console.log('teste', i, svgsNames[i]);
//   // SvgComponentsArray.push(import  { ReactComponent as IconUserOutline } from)
//   // import  { ReactComponent as IconUserOutline2 } from `../../assets/web_icons/${svgsNames[i]}`;
// }

export const IconPaylivre: React.FC<IconPaylivreProps> = ({
  iconType = undefined,
  iconFormat = 'regular',
  size = 38.5,
  color = '#215aff',
}) => {
  // console.log('svgs=', svgs);
  // console.log('iconsPathObject=', iconsPathObject);
  const regularProps = {
    // viewBox: `0 0 ${size}px ${size}px`,
    // width: `${size}px`,
    // height: `${size}px`,
  };
  const filledProps = {
    // viewBox: `0 0 ${size} ${size}`,
    // width: size,
    // height: size,
  };

  const iconOptions = {
    regular: {
      alertTriangleIcon: <IconAlertTriangle {...regularProps} />,
      arrowIcon: <IconArrow {...regularProps} />,
      lockIcon: <IconLock {...regularProps} />,
      searchIcon: <IconSearch {...regularProps} />,
      userIcon: <IconUser {...regularProps} />,
      undefined: <IconAlertTriangle {...regularProps} />,
    },
    filled: {
      alertTriangleIcon: <IconAlertTriangleFilled {...filledProps} />,
      arrowIcon: <IconArrowFilled {...filledProps} />,
      lockIcon: <IconLockFilled {...filledProps} />,
      searchIcon: <IconSearchFilled {...filledProps} />,
      userIcon: <IconUserFilled {...filledProps} />,
    },
    outline: {
      alertTriangleIcon: <IconAlertTriangleOutline {...filledProps} />,
      arrowIcon: <IconArrowOutline {...filledProps} />,
      lockIcon: <IconLockOutline {...filledProps} />,
      searchIcon: <IconSearchOutline {...filledProps} />,
      userIcon: <IconUserOutline {...filledProps} />,
    },
  };

  const renderIcon = (type: IconType | undefined) => {
    if (type) {
      return iconOptions[iconFormat][type];
    }
    return iconOptions.regular.undefined;
  };

  // const TesteIcon = iconsPathObject['icon-lock-filled'];
  // const TesteIcon2 = iconsPathObject['icon-search-outline'];

  return (
    <Styled.IconContainer className="iconDiv" size={size} color={color}>
      {renderIcon(iconType)}
      {/* {svgs.} */}
      {/* <TesteIcon /> */}
      {/* {console.log(TesteIcon)} */}
      {/* <img src={TesteIcon2} alt="icone teste" /> */}
      {/* <svg path={TesteIcon} /> */}
    </Styled.IconContainer>
  );
};
