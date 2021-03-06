import { SVGProps } from 'react';

export interface SVGRProps {
  color?: string;
  size?: number;
}

const SvgIconClose = ({
  color = '#215aff',
  size = 25,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width={size}
    fill={color}
    {...props}
  >
    <path
      data-name="Linha 115"
      d="M.143 15a1.139 1.139 0 0 1-.808-.335 1.143 1.143 0 0 1 0-1.616L13.049-.665A1.143 1.143 0 0 1 14.665.951L.951 14.665A1.139 1.139 0 0 1 .143 15z"
      transform="translate(1 1)"
    />
    <path
      data-name="Linha 116"
      d="M13.857 15a1.139 1.139 0 0 1-.808-.335L-.665.951A1.143 1.143 0 0 1 .951-.665l13.714 13.714A1.143 1.143 0 0 1 13.857 15z"
      transform="translate(1 1)"
    />
  </svg>
);

export default SvgIconClose;
