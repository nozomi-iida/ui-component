import React, { FC } from "react";
import classNames from "classnames";
import styles from "./style.module.scss";
import { BaseButtonProps } from "./BaseButton.types";

export const COLOR = ["normal", "primary", "secondary", "danger"];

export const ALIGN = ["left", "center", "right"];

// TODO: loading状態を実装
export const BaseButton: FC<BaseButtonProps> = ({
  children,
  color = "normal",
  size = "md",
  align = "left",
  linkTo,
  icon,
  fullWidth,
  onClick,
  className,
  disabled = false,
  loading = false,
  type = "button",
  ...props
}) => {
  return (
    <button
      data-size={size}
      data-color={color}
      data-align={align}
      className={classNames(styles.button, className, {
        [styles.disabled]: disabled || loading,
        [styles.iconOnly]: !children,
        [styles.block]: align !== "left",
        [styles.fullWidth]: fullWidth,
      })}
      disabled={disabled || loading}
      onClick={onClick}
      type={type}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
};
