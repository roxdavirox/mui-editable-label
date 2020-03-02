import React, { useState } from 'react'
import { render } from 'react-dom'

import MuiEditableLabel from '../../src'

function Demo() {
  const [text, setText] = useState("Click here to edit.");

  return (
    <div>
      <h1>mui-editable-label Demo</h1>
      <MuiEditableLabel
        value={text}
        onChange={e => setText(e.target.value)}
        onFocus={t => console.log("focus", t)}
        onFocusOut={t => console.log("focus out", t)}
      />
    </div>
  );
}

render(<Demo/>, document.getElementById('#demo'))
