"use cient"
import { memo } from "react"
import styles from "./index.module.css"
import clsx from "clsx"
import { IMask, IMaskInput } from "react-imask"

type Props = {
  title?: string
  placeholder?: string
  value: string
  changeValue: (value: string) => void
  type?: "number" | "string" | "date" | "password"
  isRequired?: boolean
}

export const Input = memo((props: Props) => {
  const dateValidate = {
    dd: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 31,
    },
    mm: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 12,
    },
    yyyy: {
      mask: IMask.MaskedRange,
      from: 1900,
      to: new Date().getFullYear(),
    },
  }

  return (
    <div className={styles.inputContainer}>
      {props.title !== undefined ? (
        <p
          className={clsx(
            styles.field,
            props.isRequired ? "required-field" : "",
          )}
        >
          {props.title}
        </p>
      ) : null}
      <IMaskInput
        className={styles.input}
        placeholder={props.placeholder}
        onAccept={props.changeValue}
        value={props.value}
        mask={
          props.type === "date"
            ? "yyyy-mm-dd"
            : props.type === "number"
              ? "0".repeat(100)
              : "*".repeat(100)
        }
        blocks={dateValidate}
        overwrite={false}
        displayChar={props.type === "password" ? "*" : undefined}
      ></IMaskInput>
    </div>
  )
})
Input.displayName = "Input"
