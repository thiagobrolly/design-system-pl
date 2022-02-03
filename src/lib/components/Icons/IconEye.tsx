import { SVGProps } from 'react';

export interface SVGRProps {
  color?: string;
  size?: number;
}

const SvgIconEye = ({
  color = '#215aff',
  size = 25,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 21.5 16.1"
    width={size}
    fill={color}
    {...props}
  >
    <path
      id="icon-eye_svg__Caminho_3806"
      data-name="Caminho 3806"
      d="M10.737 3a9.471 9.471 0 0 1 4.613 1.23 13.575 13.575 0 0 1 3.31 2.632 17.777 17.777 0 0 1 2.72 3.791.9.9 0 0 1 0 .8 17.777 17.777 0 0 1-2.72 3.791 13.575 13.575 0 0 1-3.31 2.632 9.471 9.471 0 0 1-4.612 1.23 9.471 9.471 0 0 1-4.612-1.23 13.575 13.575 0 0 1-3.31-2.632 17.777 17.777 0 0 1-2.72-3.791.9.9 0 0 1 0-.8 17.777 17.777 0 0 1 2.72-3.791A13.575 13.575 0 0 1 6.125 4.23 9.471 9.471 0 0 1 10.737 3Zm8.821 8.053a16.786 16.786 0 0 0-2.235-3 9.059 9.059 0 0 0-6.586-3.263c-4.827 0-7.986 4.824-8.821 6.263a16.786 16.786 0 0 0 2.235 3 9.059 9.059 0 0 0 6.586 3.263c4.827 0 7.986-4.824 8.821-6.263Z"
      transform="translate(0 -3)"
    />
    <path
      id="icon-eye_svg__Elipse_41"
      data-name="Elipse 41"
      d="M2.579-1A3.579 3.579 0 1 1-1 2.579 3.583 3.583 0 0 1 2.579-1Zm0 5.369A1.79 1.79 0 1 0 .79 2.579a1.792 1.792 0 0 0 1.789 1.79Z"
      transform="translate(8.158 5.474)"
    />
  </svg>
);

export default SvgIconEye;
