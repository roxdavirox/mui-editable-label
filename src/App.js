import React, { useState } from "react";
import Edit from "./EditableLabel";

export default function App() {
  const [text, setText] = useState("Hello edit");
  console.log("text", text);
  return (
    <div className="App">
      <Edit
        value={text}
        onTextChange={v => setText(v)}
        onFocus={t => console.log("focus", t)}
        onFocusOut={t => console.log("focus out", t)}
      />
    </div>
  );
}
