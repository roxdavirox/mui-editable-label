import React, { useState } from 'react'
import { render } from 'react-dom'

import MuiEditableLabel from '../../src'

function Demo() {
  const [text, setText] = useState("Click here to edit.");

  return (
    <div>
      <h1>mui-editable-label Demo</h1>
      <MuiEditableLabel
        initialValue={text}
        onFocus={value => console.log("on focus: ", value)}
        onBlur={value => {
          console.log('on blur: ', value);
          setText(value);
        }}
      />
    </div>
  );
}

render(<Demo/>, document.querySelector('#demo'))
