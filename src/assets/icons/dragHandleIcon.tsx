import { SVGProps } from 'react'

const DragHandleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="40"
    height="5"
    viewBox="0 0 40 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width="40" height="5" rx="2.5" fill="#D9D9D9" />
  </svg>
)

export { DragHandleIcon }
