import { FC } from "react";

import { InputPrefixProps } from "./types";

export const InputPrefix: FC<InputPrefixProps> = ({ children, ...props }) => (
  <div {...props}>{children}</div>
);
