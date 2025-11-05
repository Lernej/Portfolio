interface Props {
  children?: React.ReactNode;
  className?: string;
  href?: string;
}

const Button = ({ children, className, href }: Props) => {
  return (
    <a href={href}>
      <button
        className={`z-50 bg-gray-800 flex items-center justify-center text-white rounded-2xl p-3 font-bold text-sm cursor-pointer border-2 hover:bg-gray-900 transition-colors duration-200 border-black ${className}`}
      >
        {children}
      </button>
    </a>
  );
};

export default Button;
