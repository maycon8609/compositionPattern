import { FC } from "react"

import { InputRootProps } from "./types"

import { cn } from "../lib/utils"

export const InputRoot: FC<InputRootProps> = ({ className, ...props}) => {
  return (
  <div 
    className={cn(
      "flex content-between p-2 bg-gray-50 rounded-md  focus-within:outline-2 focus-within:outline-gray-500 focus-within:outline-offset-2",
      className
    )}
    {...props}
  />
)
}