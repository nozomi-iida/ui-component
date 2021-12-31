import React from "react";
import { Meta, Story } from "@storybook/react";
import { BaseButtonProps } from "components/Button/BaseButton/BaseButton.types";
import { UserActionButton as StoryComponent } from ".";
// FIXME: 毎回importするのやめたい
import "@storybook/addon-console";
import { ALIGN, COLOR } from "../BaseButton";
import styles from "./style.module.scss";

export default {
  title: "Components/Button/UserActionButton",
  component: StoryComponent,
  args: {
    color: "normal",
    align: "left",
    children: "UserActionButton",
    disabled: false,
    fullWidth: false,
  },
  argTypes: {
    color: {
      control: { type: "radio", options: COLOR },
    },
    align: {
      control: {
        type: "radio",
        options: ALIGN,
      },
    },
  },
} as Meta<BaseButtonProps>;

export const Default: Story<BaseButtonProps> = (props) => {
  return (
    <div className={styles.smHGutter}>
      <StoryComponent size="sm" {...props} />
      <StoryComponent size="md" {...props} />
      <StoryComponent size="lg" {...props} />
    </div>
  );
};
