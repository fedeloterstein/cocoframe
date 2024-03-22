import * as React from "react"
import { SVGProps } from "react"

export const BaseLogo = (props: SVGProps<SVGSVGElement>) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M54.921 110.034c30.438 0 55.113-24.632 55.113-55.017S85.359 0 54.921 0C26.043 0 2.353 22.171 0 50.392h72.847v9.25H0c2.353 28.22 26.043 50.392 54.921 50.392Z"
    />
  </svg>
)

