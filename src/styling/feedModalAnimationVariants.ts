const feedModalAnimationVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: { y: "-1%", opacity: 1 },
  exit: {
    y: "100%",
    opacity: 1,
    scale: 1,
    filter: "blur(10px)",
  },
};

export { feedModalAnimationVariants };
