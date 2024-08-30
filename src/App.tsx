import "./App.css";

import { CircleX, Copy, User } from "lucide-react";

import { Field } from "./components";

import { simpleInput, inputWithPrefix, inputWithSuffix, inputWithPrefixandSuffix } from "./code-snippet";


function App() {
  const handleCopy = (data: string) => {
    navigator.clipboard
      .writeText(data)
      .then(() => console.log("Texto copiado para a área de transferência!"))
      .catch((err) => console.error("Falha ao copiar o texto: ", err));
  };

  return (
    <div className="flex flex-col w-full h-screen items-center justify-center bg-gray-800 gap-5">
      <div>
        <div className="flex justify-between px-2 pb-1">
          <h1 className="text-xl font-bold text-gray-100">Simple Input</h1>
          <Copy
            className="text-gray-100 hover:cursor-pointer"
            onClick={() => handleCopy(simpleInput)}
          />
        </div>

        <Field.Root tabIndex={1} className="w-80 h-16 mx-auto">
          <Field.Input />
        </Field.Root>
      </div>

      <div>
        <div className="flex justify-between px-2 pb-1">
          <h1 className="text-xl font-bold text-gray-100">Input with Prefix</h1>
          <Copy
            className="text-gray-100 hover:cursor-pointer"
            onClick={() => handleCopy(inputWithPrefix)}
          />
        </div>

        <Field.Root tabIndex={1} className="w-80 h-16 mx-auto">
          <Field.Prefix className="hover:cursor-pointer">
            <User className="text-gray-600" size={48} />
          </Field.Prefix>

          <Field.Input />
        </Field.Root>
      </div>

      <div>
        <div className="flex justify-between px-2 pb-1">
          <h1 className="text-xl font-bold text-gray-100">Input with Suffix</h1>
          <Copy
            className="text-gray-100 hover:cursor-pointer"
            onClick={() => handleCopy(inputWithSuffix)}
          />
        </div>

        <Field.Root tabIndex={1} className="w-80 h-16 mx-auto">
          <Field.Input />

          <Field.Suffix className="hover:cursor-pointer">
            <CircleX className="text-gray-600" size={48} />
          </Field.Suffix>
        </Field.Root>
      </div>

      <div>
        <div className="flex justify-between px-2 pb-1">
          <h1 className="text-xl font-bold text-gray-100">
            Input with Prefix and Suffix
          </h1>
          <Copy
            className="text-gray-100 hover:cursor-pointer"
            onClick={() => handleCopy(inputWithPrefixandSuffix)}

          />
        </div>

        <Field.Root tabIndex={1} className="w-80 h-16 mx-auto">
          <Field.Prefix className="hover:cursor-pointer">
            <User className="text-gray-600" size={48} />
          </Field.Prefix>

          <Field.Input />

          <Field.Suffix className="hover:cursor-pointer">
            <CircleX className="text-gray-600" size={48} />
          </Field.Suffix>
        </Field.Root>
      </div>
    </div>
  );
}

export default App;