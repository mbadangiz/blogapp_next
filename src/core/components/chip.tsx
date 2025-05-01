import { EN_ChipVariant, EN_ColorVariant, EN_Size } from "@/types/enums";
import { T_ChipVariant, T_ColorVariant, T_Size } from "@/types/types";
import clsx from "clsx";

interface IN_chipProps {
  variant?: T_ChipVariant;
  size?: T_Size;
  text?: string;
  color?: T_ColorVariant;
}

function Chip({
  variant = EN_ChipVariant.FLAT,
  size = EN_Size.MEDIUM,
  text,
  color = EN_ColorVariant.PRIMARY,
}: IN_chipProps) {
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
      danger: "bg-danger text-white",
      primary: "bg-primaryBlue text-white",
      secodary: "bg-primaryBlack text-white",
      success: "bg-success text-emerald-900",
      warning: "bg-warning text-white",
    },
    bordered: {
      danger: "bg-transparent border border-danger text-danger",
      primary: "bg-transparent border border-primaryBlue text-primaryBlue",
      secodary: "bg-transparent border border-primaryBlack text-primaryBlack",
      success: "bg-transparent border border-success text-success",
      warning: "bg-transparent border border-warning text-warning",
    },
    flat: {
      danger: "bg-danger/20 text-danger",
      primary: "bg-primaryBlue/20 text-primaryBlue",
      secodary: "bg-primaryBlack/20 text-primaryBlack",
      success: "bg-success/20 text-emerald-900",
      warning: "bg-warning/20 text-amber-700",
    },
  };

  return (
    <div
      className={clsx(
        chipsGeneralStyles,
        chipsSizeStyles[size],
        chipColorVariantsStyles[variant][color],
      )}
    >
      {text}
    </div>
  );
}

export default Chip;
