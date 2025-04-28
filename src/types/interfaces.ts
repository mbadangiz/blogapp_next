import { ReactNode } from "react";

export interface IN_NavItem {
  id: number;
  title: string;
  path: string;
  icons?: ReactNode;
}
