import { FC } from "react"

import { InputRootProps } from "./types"

import "./InputRoot.css"

export const InputRoot: FC<InputRootProps> = (props) => {
  return <div className="input-root" {...props} />
}