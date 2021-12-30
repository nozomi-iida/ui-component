import React, { FC } from "react";
import classNames from "classnames";
import { ButtonProps } from "./Button.types";
import styles from "./style.module.scss";

export const Button: FC<ButtonProps> = ({
  type = "button",
  className,
  children,
  ...props
}) => (
  <button
    type={type}
    className={classNames(styles.button, className)}
    {...props}
  >
    {children}
  </button>
);
