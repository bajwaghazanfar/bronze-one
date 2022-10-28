export const FadeUpContainer = (delay, stagger) => {
  return {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: stagger,
        delay: delay,
      },
    },
  };
};
export const FadeUpChildren = {
  hidden: { opacity: 0, y: 200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};
