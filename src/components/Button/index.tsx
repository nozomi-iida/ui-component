import React from 'react'
import { ButtonProps } from "./Button.types";
import styles from "./style.module.scss"

export const Button : React.FC<ButtonProps> = ({}) => (
        <button className={styles.button}>Hoge</button>
)
