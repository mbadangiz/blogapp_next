import { EN_ChipVariant, EN_ColorVariant, EN_Size } from "@/types/enums";

const chipsGeneralStyles =
  "relative max-w-fit min-w-min inline-flex items-center justify-between box-border whitespace-nowrap text-small rounded-full ";

const chipsSizeStyles: Record<EN_Size, string> = {
  [EN_Size.LARGE]: "px-7 h-8 text-lg",
  [EN_Size.MEDIUM]: "px-4 h-7 text-[15px]",
  [EN_Size.SMALL]: "px-2 h-6 text-sm",
};

const chipColorVariantsStyles: Record<
  EN_ChipVariant,
  Record<EN_ColorVariant, string>
> = {
  solid: {
    danger: "bg-danger text-white hover:bg-danger/90",
    primary: "bg-primaryBlue text-white hover:bg-primaryBlue/90",
    secodary: "bg-primaryBlack text-white hover:bg-primaryBlack/90",
    success: "bg-success text-emerald-900 hover:bg-success/90",
    warning: "bg-warning text-white hover:bg-warning/90",
  },
  bordered: {
    danger:
      "bg-transparent border border-danger text-danger hover:bg-danger/10",
    primary:
      "bg-transparent border border-primaryBlue text-primaryBlue hover:bg-primaryBlue/10",
    secodary:
      "bg-transparent border border-primaryBlack text-primaryBlack hover:bg-primaryBlack/10",
    success:
      "bg-transparent border border-success text-success hover:bg-success/10",
    warning:
      "bg-transparent border border-warning text-warning hover:bg-warning/10",
  },
  flat: {
    danger: "bg-danger/20 text-danger hover:bg-danger/30",
    primary: "bg-primaryBlue/20 text-primaryBlue hover:bg-primaryBlue/30",
    secodary: "bg-primaryBlack/20 text-primaryBlack hover:bg-primaryBlack/30",
    success: "bg-success/20 text-emerald-900 hover:bg-success/30",
    warning: "bg-warning/20 text-amber-700 hover:bg-warning/30",
  },
};
export { chipsGeneralStyles, chipsSizeStyles, chipColorVariantsStyles };
