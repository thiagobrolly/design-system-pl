import { SVGProps } from 'react';

export interface SVGRProps {
  color?: string;
  size?: number;
}

const SvgIconAlertTriangle = ({
  color = '#215aff',
  size = 25,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 18.9 18.5"
    width={size}
    {...props}
  >
    <path
      id="icon-alert-triangle_svg__Caminho_3848"
      data-name="Caminho 3848"
      d="M9.722 1.9a2.417 2.417 0 0 1 2.055 1.157l6.784 11.326.007.011A2.4 2.4 0 0 1 16.515 18H2.929a2.4 2.4 0 0 1-2.055-3.6l.007-.011L7.665 3.058A2.417 2.417 0 0 1 9.722 1.9Zm.684 1.986a.8.8 0 0 0-1.368 0L2.259 15.2a.8.8 0 0 0 .684 1.2H16.5a.8.8 0 0 0 .684-1.2Z"
      fill={color}
    />
    <path
      id="icon-alert-triangle_svg__Linha_122"
      data-name="Linha 122"
      d="M-.2 3.806A.8.8 0 0 1-1 3V-.2A.8.8 0 0 1-.2-1a.8.8 0 0 1 .8.8V3a.8.8 0 0 1-.8.806Z"
      transform="translate(9.921 7.786)"
      fill={color}
    />
    <path
      id="icon-alert-triangle_svg__Linha_123"
      data-name="Linha 123"
      d="M-.191.6H-.2A.8.8 0 0 1-1-.2.8.8 0 0 1-.2-1h.008a.8.8 0 0 1 .8.8.8.8 0 0 1-.799.8Z"
      transform="translate(9.921 14.193)"
      fill={color}
    />
  </svg>
);

export default SvgIconAlertTriangle;
