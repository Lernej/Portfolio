import { useRef, useEffect, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const PopInDiv = ({ children, className }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        mainControls.start("visible");
        setIsVisible(true);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <div ref={ref}>
      <motion.div
        className={`${className} ${
          isVisible ? "motion-preset-slide-right motion-duration-2000" : ""
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
