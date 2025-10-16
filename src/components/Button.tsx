import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const Button = ({ children, className }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.button
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 2, delay: 0.5 }}
      className={`absolute left-[5%] z-50 bg-white flex items-center justify-center text-black rounded-2xl p-3 font-bold text-sm cursor-pointer hover:bg-gray-300 active:bg-gray-400 border-2 border-gray-700 ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;
