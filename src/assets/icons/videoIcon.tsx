import { SVGProps } from "react";

const VideoIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20ZM9 9.03351C9 8.57281 9.49769 8.28399 9.89768 8.51256L15.0883 11.4787C15.4914 11.709 15.4914 12.2902 15.0883 12.5205L9.89768 15.4866C9.49769 15.7152 9 15.4264 9 14.9657V9.03351Z"
        strokeWidth={2}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M9.89768 8.51256C9.49769 8.28399 9 8.57281 9 9.03351V14.9657C9 15.4264 9.49769 15.7152 9.89768 15.4866L15.0883 12.5205C15.4914 12.2902 15.4914 11.709 15.0883 11.4787L9.89768 8.51256Z"
        strokeWidth={2}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
};
export { VideoIcon };
