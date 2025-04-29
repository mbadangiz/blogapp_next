import {
  EN_ButtonSize,
  EN_ButtonVariant,
  EN_ColorVariant,
} from "@/types/enums";
import { IN_ButtonProps } from "@/types/interfaces";

function Button({
  children,
  className,
  variants = EN_ButtonVariant.SOLID,
  color = EN_ColorVariant.PRIMARY,
  size = EN_ButtonSize.MEDIUM,
  ...rest
}: IN_ButtonProps) {
  const styles: Record<EN_ButtonVariant, Record<EN_ColorVariant, string>> = {
    outline: {
      danger:
        "border border-danger text-danger hover:bg-danger hover:text-white disabled:opacity-50 disabled:cursor-not-allowed",
      primary:
        "border border-primaryBlue text-primaryBlue hover:bg-primaryBlue hover:text-white disabled:opacity-50 disabled:cursor-not-allowed",
      secodary:
        "border border-gray text-gray hover:bg-gray hover:text-white disabled:opacity-50 disabled:cursor-not-allowed",
      success:
        "border border-success text-success hover:bg-success hover:text-white disabled:opacity-50 disabled:cursor-not-allowed",
      warning:
        "border border-warning text-warning hover:bg-warning hover:text-white disabled:opacity-50 disabled:cursor-not-allowed",
    },
    solid: {
      danger:
        "bg-danger text-white hover:bg-danger disabled:opacity-50 disabled:cursor-not-allowed",
      primary:
        "bg-primaryBlue text-white hover:bg-primaryBlue disabled:opacity-50 disabled:cursor-not-allowed",
      secodary:
        "bg-gray text-white hover:bg-gray disabled:opacity-50 disabled:cursor-not-allowed",
      success:
        "bg-success text-white hover:bg-success disabled:opacity-50 disabled:cursor-not-allowed",
      warning:
        "bg-warning text-white hover:bg-warning disabled:opacity-50 disabled:cursor-not-allowed",
    },
  };

  const buttonSizeClasses: Record<EN_ButtonSize, string> = {
    [EN_ButtonSize.SMALL]: "px-3 py-1 text-sm",
    [EN_ButtonSize.MEDIUM]: "px-4 py-2 text-base",
    [EN_ButtonSize.LARGE]: "px-5 py-3 text-lg",
  };

  return (
    <button
      className={` ${buttonSizeClasses[size]} ${styles[variants][color]} cursor-pointer rounded-sm ${className} `}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
