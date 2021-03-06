import { SVGProps } from 'react';

export interface SVGRProps {
  color?: string;
  background?: string;
  size?: number;
}

const SvgIconPlusCircleFilled = ({
  color = '#215aff',
  background = '#e6e7e9',
  size = 50,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 38.48 38.48"
    width={size}
    {...props}
  >
    <g
      id="icon-plus-circle-filled_svg__icon-plus-circle-filled"
      transform="translate(-396 -1014.484)"
    >
      <rect
        id="icon-plus-circle-filled_svg__Ret\xE2ngulo_447"
        data-name="Ret\xE2ngulo 447"
        width={38.48}
        height={38.48}
        rx={19}
        transform="translate(396 1014.484)"
        fill={background}
      />
      <g
        id="icon-plus-circle-filled_svg__plus-circle"
        transform="translate(406 1024.484)"
      >
        <path
          id="icon-plus-circle-filled_svg__Elipse_47"
          data-name="Elipse 47"
          className="icon-plus-circle-filled_svg__cls-2"
          d="M7-1a8 8 0 0 1 8 8 8 8 0 0 1-8 8 8 8 0 0 1-8-8 8 8 0 0 1 8-8zm0 14.554A6.549 6.549 0 1 0 .455 7 6.557 6.557 0 0 0 7 13.554z"
          transform="translate(2 2)"
          fill={color}
        />
        <path
          id="icon-plus-circle-filled_svg__Linha_119"
          data-name="Linha 119"
          className="icon-plus-circle-filled_svg__cls-2"
          d="M-.272 6.277A.728.728 0 0 1-1 5.549V-.272A.728.728 0 0 1-.272-1a.728.728 0 0 1 .728.728v5.821a.728.728 0 0 1-.728.728z"
          transform="translate(9.277 6.366)"
          fill={color}
        />
        <path
          id="icon-plus-circle-filled_svg__Linha_120"
          data-name="Linha 120"
          className="icon-plus-circle-filled_svg__cls-2"
          d="M5.549.455H-.272A.728.728 0 0 1-1-.272.728.728 0 0 1-.272-1h5.821a.728.728 0 0 1 .728.728.728.728 0 0 1-.728.727z"
          transform="translate(6.366 9.277)"
          fill={color}
        />
      </g>
    </g>
  </svg>
);

export default SvgIconPlusCircleFilled;
