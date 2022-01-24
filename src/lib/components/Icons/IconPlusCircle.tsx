import { SVGProps } from 'react';

export interface SVGRProps {
  color?: string;
  size?: number;
}

const SvgIconPlusCircle = ({
  color = '#215aff',
  size = 50,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 18 18"
    width={size}
    {...props}
  >
    <path
      id="icon-plus-circle_svg__Elipse_47"
      data-name="Elipse 47"
      className="icon-plus-circle_svg__cls-2"
      d="M7-1a8 8 0 0 1 8 8 8 8 0 0 1-8 8 8 8 0 0 1-8-8 8 8 0 0 1 8-8zm0 14.554A6.549 6.549 0 1 0 .455 7 6.557 6.557 0 0 0 7 13.554z"
      transform="translate(2 2)"
      fill={color}
    />
    <path
      id="icon-plus-circle_svg__Linha_119"
      data-name="Linha 119"
      className="icon-plus-circle_svg__cls-2"
      d="M-.272 6.277A.728.728 0 0 1-1 5.549V-.272A.728.728 0 0 1-.272-1a.728.728 0 0 1 .728.728v5.821a.728.728 0 0 1-.728.728z"
      transform="translate(9.277 6.366)"
      fill={color}
    />
    <path
      id="icon-plus-circle_svg__Linha_120"
      data-name="Linha 120"
      className="icon-plus-circle_svg__cls-2"
      d="M5.549.455H-.272A.728.728 0 0 1-1-.272.728.728 0 0 1-.272-1h5.821a.728.728 0 0 1 .728.728.728.728 0 0 1-.728.727z"
      transform="translate(6.366 9.277)"
      fill={color}
    />
  </svg>
);

export default SvgIconPlusCircle;
