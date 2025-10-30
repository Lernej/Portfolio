interface Props {
  children?: React.ReactNode;
  className?: string;
  href?: string;
}

const Button = ({ children, className, href }: Props) => {
  return (
    <a href={href}>
      <button
        className={`z-50 bg-gradient-to-r from-gray-400 to-gray-800 flex items-center justify-center text-white rounded-2xl p-3 font-bold text-sm cursor-pointer border-2 border-gray-900 ${className}`}
      >
        {children}
      </button>
    </a>
  );
};

export default Button;
