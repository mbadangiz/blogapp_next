import { ButtonHTMLAttributes, ReactNode } from "react";
import { T_ButtonSize, T_ButtonVariant, T_ColorVariant } from "./types";

export interface IN_NavItem {
  id: number;
  title: string;
  path: string;
}

export interface IN_ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variants?: T_ButtonVariant;
  color?: T_ColorVariant;
  size?: T_ButtonSize;
}
