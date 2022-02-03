import { SVGProps } from 'react';

export interface SVGRProps {
  color?: string;
  size?: number;
}

const SvgIconLock = ({
  color = '#215aff',
  size = 25,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 18.6"
    width={size}
    fill={color}
    {...props}
  >
    <path
      id="icon-lock_svg__Ret\xE2ngulo_261"
      data-name="Ret\xE2ngulo 261"
      d="M1.4-1h11.2A2.4 2.4 0 0 1 15 1.4V7a2.4 2.4 0 0 1-2.4 2.4H1.4A2.4 2.4 0 0 1-1 7V1.4A2.4 2.4 0 0 1 1.4-1Zm11.2 8.8a.8.8 0 0 0 .8-.8V1.4a.8.8 0 0 0-.8-.8H1.4a.8.8 0 0 0-.8.8V7a.8.8 0 0 0 .8.8Z"
      transform="translate(3 9.199)"
    />
    <path
      id="icon-lock_svg__Caminho_3761"
      data-name="Caminho 3761"
      d="M14.8 9.8A.8.8 0 0 1 14 9V5.8a3.2 3.2 0 1 0-6.4 0V9A.8.8 0 0 1 6 9V5.8a4.8 4.8 0 0 1 9.6 0V9a.8.8 0 0 1-.8.8Z"
      transform="translate(-.8)"
    />
  </svg>
);

export default SvgIconLock;
