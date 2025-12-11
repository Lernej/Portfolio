import { useRef, useEffect, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children?: React.ReactNode;
  className?: string;
  duration: number;
  direction: string;
}

const PopInDiv = ({ children, className, duration, direction }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        mainControls.start("visible");
        setIsVisible(true);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <div ref={ref}>
      <motion.div
        style={{ position: "relative", zIndex: 9999 }}
        className={`${className} ${
          isVisible
            ? `lg:motion-preset-slide-${direction} lg:motion-duration-${duration}`
            : ""
        }`}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 2, delay: 0 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default PopInDiv;
