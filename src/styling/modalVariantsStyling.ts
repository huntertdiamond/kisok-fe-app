const modalStyling = {
  hidden:
    "fixed bottom-1 left-1 right-1 bg-white z-[111] rounded-[20px] shadow-shFSNoBorder flex flex-col gap-2 overflow-x-clip overflow-y-clip   max-w-[495px] min-w-[350px]",
  small:
    "fixed bottom-1 left-1 right-1 bg-white z-[111] rounded-[20px] shadow-shFSNoBorder flex flex-col gap-2 overflow-clip mx-auto  max-w-[495px] min-w-[350px]",

  full: "fixed bottom-0 right-0 left-0 bg-white z-[111] flex flex-col gap-2 mx-auto  max-w-[500px] min-w-[400px] overflow-y-auto overflow-x-hidden",
  draggingDown:
    "fixed bottom-1 left-1 right-1 bg-white z-[111] rounded-[20px] shadow-shFSNoBorder flex flex-col gap-2 overflow-clip mx-auto  max-w-[495px] min-w-[350px]",
} as const;

export { modalStyling };
