import { EN_Size, EN_ButtonVariant, EN_ColorVariant } from "@/types/enums";

const buttonStyles: Record<
  EN_ButtonVariant,
  Record<EN_ColorVariant, string>
> = {
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

const buttonSizeClasses: Record<EN_Size, string> = {
  [EN_Size.SMALL]: "px-3 py-1 text-sm",
  [EN_Size.MEDIUM]: "px-4 py-2 text-base",
  [EN_Size.LARGE]: "px-5 py-3 text-lg",
};

export { buttonSizeClasses, buttonStyles };
