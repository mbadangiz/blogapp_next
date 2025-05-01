import { IN_InputProps } from "@/types/interfaces";

function Input({
  label,
  id,
  type = "text",
  required,
  className,
  ...rest
}: IN_InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="mb-4 block font-bold">
          {label} {required && <span className="text-rose-500"> * </span>}
        </label>
      )}
      <input
        type={type}
        className={`border-gray/30 focus:border-primaryBlue-700 h-11 w-full rounded-lg border-[1.7px] border-solid px-3 text-sm font-medium outline-0 ${className}`}
        {...rest}
      />
    </div>
  );
}

export default Input;
