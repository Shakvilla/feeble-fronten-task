import * as React from "react";
import { SVGProps } from "react";
const RightBottomBird = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.8632 24.7812L12.8481 23.4926C11.2035 21.4048 10.3812 20.361 10.7562 19.5139C11.1313 18.6667 12.4158 18.6667 14.9848 18.6667H17.0151C19.5841 18.6667 20.8685 18.6667 21.2437 19.5139C21.6188 20.361 20.7964 21.4048 19.1517 23.4926L18.1367 24.7811C17.1464 26.0382 16.6513 26.6667 16 26.6667C15.3485 26.6667 14.8535 26.0382 13.8632 24.7812Z"
      stroke="#1D2026"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 18.6666V5.33331"
      stroke="#1D2026"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default RightBottomBird;
