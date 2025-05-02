import {
  chipColorVariantsStyles,
  chipsGeneralStyles,
  chipsSizeStyles,
} from "@/constant/chipStyles";
import { EN_ChipVariant, EN_ColorVariant, EN_Size } from "@/types/enums";
import { IN_chipProps } from "@/types/interfaces";
import clsx from "clsx";

function Chip({
  variant = EN_ChipVariant.FLAT,
  size = EN_Size.MEDIUM,
  text,
  color = EN_ColorVariant.PRIMARY,
}: IN_chipProps) {
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
