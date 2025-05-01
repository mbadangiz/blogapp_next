import { ButtonHTMLAttributes, InputHTMLAttributes, ReactNode } from "react";
import { T_Size, T_ButtonVariant, T_ColorVariant } from "./types";

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
  size?: T_Size;
}

export interface IN_Category {
  _id: string;
  title: string;
  englishTitle: string;
  description: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IN_InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}
