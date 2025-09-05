interface LabelProps {
  text?: string;
  hideIcon?: boolean;
  className?: string;
}
export default function Label({ text, hideIcon, className }: LabelProps) {
  return (
    <>
      <label
        htmlFor=""
        className={`text-[14px] leading-[20px] font-[500] ${className}`}
      >
        {text}
        {!hideIcon && <span className="text-[var(--main)] px-[3px]">*</span>}
      </label>
    </>
  );
}
