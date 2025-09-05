interface ButtonProps {
  text?: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({
  text,
  className,
  type = "button",
  onClick,
  disabled,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`text-[16px] h-[48px] cursor-pointer font-[500] rounded-[10px] leading-[120%] md:w-[200px] w-full ${className}`}
    >
      {text}
    </button>
  );
}
