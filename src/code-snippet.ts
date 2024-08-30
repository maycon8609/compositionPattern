export const simpleInput = `
import { Field } from "./components";

export function App() {
  return (
    <Field.Root tabIndex={1} className="w-80 h-16 mx-auto">
      <Field.Input />
    </Field.Root>
  )
}
`

export const inputWithPrefix = `
import { User } from "lucide-react";

import { Field } from "./components";

export function App() {
  return (
    <Field.Root tabIndex={1} className="w-80 h-16 mx-auto">
      <Field.Prefix className="hover:cursor-pointer">
        <User className="text-gray-600" size={48} />
      </Field.Prefix>

      <Field.Input />
    </Field.Root>
  )
}
`

export const inputWithSuffix = `
import { CircleX } from "lucide-react";

import { Field } from "./components";

export function App() {
  return (
    <Field.Root tabIndex={1} className="w-80 h-16 mx-auto">
      <Field.Input />

      <Field.Suffix className="hover:cursor-pointer">
        <CircleX className="text-gray-600" size={48} />
      </Field.Suffix>
    </Field.Root>
  )
}
`

export const inputWithPrefixandSuffix = `
import { CircleX, User } from "lucide-react";

import { Field } from "./components";

export function App() {
  return (
    <Field.Root tabIndex={1} className="w-80 h-16 mx-auto">
      <Field.Prefix className="hover:cursor-pointer">
        <User className="text-gray-600" size={48} />
      </Field.Prefix>

      <Field.Input />

      <Field.Suffix className="hover:cursor-pointer">
        <CircleX className="text-gray-600" size={48} />
      </Field.Suffix>
    </Field.Root>
  )
}
`