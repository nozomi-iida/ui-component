import { ReactNode } from "react";
import { ALIGN, COLOR } from "components/Button/BaseButton/index";

export type Size = "sm" | "md" | "lg";

export type BaseButtonProps = JSX.IntrinsicElements["button"] & {
  color?: typeof COLOR[number];
  size?: Size;
  linkTo?: string;
  icon?: ReactNode;
  fullWidth?: boolean;
  align?: typeof ALIGN[number];
  loading?: boolean;
};
