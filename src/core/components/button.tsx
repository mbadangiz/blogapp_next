import { buttonSizeClasses, buttonStyles } from "@/constant/buttonStyles";
import { EN_Size, EN_ButtonVariant, EN_ColorVariant } from "@/types/enums";
import { IN_ButtonProps } from "@/types/interfaces";

function Button({
  children,
  className,
  variants = EN_ButtonVariant.SOLID,
  color = EN_ColorVariant.PRIMARY,
  size = EN_Size.MEDIUM,
  ...rest
}: IN_ButtonProps) {
  return (
    <button
      className={` ${buttonSizeClasses[size]} ${buttonStyles[variants][color]} cursor-pointer rounded-sm ${className} `}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
