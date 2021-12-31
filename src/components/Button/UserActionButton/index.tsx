import React, { FC } from "react";
import classNames from "classnames";
import { BaseButtonProps } from "../BaseButton/BaseButton.types";
import { BaseButton } from "../BaseButton";
import styles from "./style.module.scss";

export const colorArray = ["abc"];

export const UserActionButton: FC<BaseButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <BaseButton
      {...props}
      className={classNames(styles.userActionButton, className)}
    >
      {children}
    </BaseButton>
  );
};
