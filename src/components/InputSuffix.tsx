import { FC } from "react";

import { InputSuffixProps } from "./types";

export const InputSuffix: FC<InputSuffixProps> = ({ children, ...props }) => (
  <div {...props}>{children}</div>
);
