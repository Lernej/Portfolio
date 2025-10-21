interface Props {
  children?: React.ReactNode;
  className?: string;
  href?: string;
}

const Button = ({ children, className, href }: Props) => {
  return (
    <a href={href}>
      <button
        className={`z-50 bg-white flex items-center justify-center text-black rounded-2xl p-3 font-bold text-sm cursor-pointer hover:bg-gray-300 active:bg-gray-400 border-2 border-gray-700 ${className}`}
      >
        {children}
      </button>
    </a>
  );
};

export default Button;
