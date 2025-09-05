interface InputProps {
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  name?: string;
  id?: string;
  error?: boolean;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
}

export default function Input({
  type,
  placeholder,
  name,
  value,
  onChange,

  id,
  inputMode,
}: InputProps) {
  return (
    <input
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      inputMode={inputMode}
      placeholder={placeholder}
      className="input w-full mt-[7px] bg-white h-[3rem] rounded-[10px] px-6 focus:border-[2px] border-gray-300 text-[14px]
        focus:border-[var(--main)] focus:ring-0 focus:outline-none"
    />
  );
}
