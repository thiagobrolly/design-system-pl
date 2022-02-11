import { SVGProps } from 'react';

export interface SVGRProps {
  color?: string;
  size?: number;
  rotate180?: boolean;
}

const SvgIconArrow = ({
  color = '#215aff',
  size = 25,
  rotate180 = false,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16.1 9.9"
    width={size}
    {...props}
  >
    {rotate180 ? (
      <path
        data-name="\u21B3Color"
        d="M14.21 0 8.051 6.137 1.892 0 0 1.889l8.051 8.04 8.049-8.04z"
        fill={color}
        style={{ transform: 'rotate(180deg)', transformOrigin: 'center' }}
      />
    ) : (
      <path
        data-name="\u21B3Color"
        d="M14.21 0 8.051 6.137 1.892 0 0 1.889l8.051 8.04 8.049-8.04z"
        fill={color}
        style={{ transition: '0.3s' }}
      />
    )}
  </svg>
);

export default SvgIconArrow;
