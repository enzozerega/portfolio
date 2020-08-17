export const animation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    translateY: -50,
    transition: {
      duration: 0.2,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
  exit: {
    opacity: 0,
    translateY: -150,
    transition: {
      duration: 0.2,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};
