import { FC } from "react";

import { InputProps } from "./types";

import { cn } from "../lib/utils";

export const Input: FC<InputProps> = ({className, ...props}) => {
  return (
  <input
    className={cn(
      "border-none bg-gray-50 text-gray-900 w-full my-2 mx-0 focus-within:outline-none placeholder:text-gray-400",
      className
    )}
    {...props}
  />
)
};

export default Input;
