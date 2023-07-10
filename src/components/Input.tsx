import { FC } from "react";

import { InputProps } from "./types";

import "./Input.css";

export const Input: FC<InputProps> = (props) => {
  return <input {...props} />
};

export default Input;
