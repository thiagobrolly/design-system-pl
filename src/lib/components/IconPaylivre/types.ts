export interface IconPaylivreProps {
  iconType?: IconType;
  iconFormat?: 'regular' | 'filled' | 'outline';
  size?: number;
  color?: string;
}

export type IconType =
  | 'alertTriangleIcon'
  | 'arrowIcon'
  | 'lockIcon'
  | 'searchIcon'
  | 'userIcon';

export interface IconContainerProps {
  color?: string;
  size?: number;
}
