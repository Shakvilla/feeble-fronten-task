import { SVGProps } from "react";


const PageLoadingSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={1920}
    height={1080}
    viewBox="0 0 1920 1080"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_1_40)">
      <rect width={1920} height={1080} fill="white" />
      <g clipPath="url(#clip1_1_40)">
        <rect width={1920} height={1080} fill="#007AFF" />
        <rect width={1920} height={1080} fill="white" fillOpacity={0.9} />
        <g filter="url(#filter0_f_1_40)">
          <ellipse
            cx={143.159}
            cy={-257.881}
            rx={235.633}
            ry={220.881}
            fill="white"
            fillOpacity={0.7}
          />
        </g>
      </g>
    </g>
    <defs>
      <filter
        id="filter0_f_1_40"
        x={-213.474}
        y={-599.762}
        width={713.265}
        height={683.762}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation={60.5}
          result="effect1_foregroundBlur_1_40"
        />
      </filter>
      <clipPath id="clip0_1_40">
        <rect width={1920} height={1080} fill="white" />
      </clipPath>
      <clipPath id="clip1_1_40">
        <rect width={1920} height={1080} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export default PageLoadingSVG;
