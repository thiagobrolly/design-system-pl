import { SVGProps } from 'react';

export interface SVGRProps {
  color?: string;
  size?: number;
}

const SvgIconUser = ({
  color = '#215aff',
  size = 25,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20.5 18"
    width={size}
    {...props}
  >
    <path
      id="icon-user_svg__Caminho_3761"
      data-name="Caminho 3761"
      d="M16.6 20.4a.8.8 0 0 1-.8-.8V18a2.4 2.4 0 0 0-2.4-2.4H7A2.4 2.4 0 0 0 4.6 18v1.6a.8.8 0 1 1-1.6 0V18a4 4 0 0 1 4-4h6.4a4 4 0 0 1 4 4v1.6a.8.8 0 0 1-.8.8Z"
      transform="translate(0 -2.4)"
      fill={color}
    />
    <path
      id="icon-user_svg__Elipse_41"
      data-name="Elipse 41"
      d="M3-1a4 4 0 1 1-4 4 4 4 0 0 1 4-4Zm0 6.4A2.4 2.4 0 1 0 .6 3 2.4 2.4 0 0 0 3 5.4Z"
      transform="translate(7.2 3)"
      fill={color}
    />
  </svg>
);

export default SvgIconUser;
