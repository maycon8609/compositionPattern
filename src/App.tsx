import { Field } from "./components";

import "./App.css";
import { CloseIcon, ProfileIcon } from "./icons";

function App() {
  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Field.Root tabIndex={1} style={{ width: 366, height: 64 }}>
        <Field.Prefix>
          <ProfileIcon />
        </Field.Prefix>

        <Field.Input />

        <Field.Suffix>
          <CloseIcon />
        </Field.Suffix>
      </Field.Root>
    </div>
  );
}

export default App;
