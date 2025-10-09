import Mt from "../assets/mountain.svg?react";
import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  className: string;
}

const Mountain = ({ className = "" }: Props) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <Mt className={`${className}`}></Mt>
    </motion.div>
  );
};

export default Mountain;
