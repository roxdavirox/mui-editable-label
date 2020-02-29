import React, { useState } from "react";
import PropTypes from "prop-types";

const ENTER_KEY_CODE = 13;
const DEFAULT_LABEL_PLACEHOLDER = "Click To Edit";

const EditableLabel = props => {
  const [isEditing, setEditing] = useState(false);
  const [value, setValue] = useState(props.value);
  const [inputRef, setInputRef] = useState(null);

  const isTextValueValid = () =>
    typeof value !== "undefined" && value.trim().length > 0;

  const handleFocus = () => {
    if (isEditing) {
      if (typeof props.onFocusOut === "function") {
        props.onFocusOut(value);
      }
    } else {
      if (typeof props.onFocus === "function") {
        props.onFocus(value);
      }
    }

    if (isTextValueValid()) {
      setEditing(prev => !prev);
    } else {
      if (isEditing) {
        setEditing(props.emptyEdit || false);
      } else {
        setEditing(true);
      }
    }
  };

  const handleChange = () => {
    setValue(inputRef.value);
    props.onTextChange(inputRef.value);
  };

  const handleKeyDown = e => {
    if (e.keyCode === ENTER_KEY_CODE) {
      handleEnterKey();
    }
  };

  const handleEnterKey = () => {
    handleFocus();
  };

  if (isEditing) {
    return (
      <div>
        <input
          type="text"
          className={props.inputClassName}
          ref={thisRef => {
            setInputRef(thisRef);
          }}
          value={value}
          onChange={handleChange}
          onBlur={handleFocus}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      </div>
    );
  }

  const labelText = isTextValueValid()
    ? value
    : props.labelPlaceHolder || DEFAULT_LABEL_PLACEHOLDER;

  return (
    <div>
      <label className={props.labelClassName} onClick={handleFocus}>
        {labelText}
      </label>
    </div>
  );
};

EditableLabel.propTypes = {
  value: PropTypes.string.isRequired,
  isEditing: PropTypes.bool,
  emptyEdit: PropTypes.bool,

  labelClassName: PropTypes.string,
  labelFontSize: PropTypes.string,
  labelFontWeight: PropTypes.string,
  labelPlaceHolder: PropTypes.string,

  inputMaxLength: PropTypes.number,
  inputPlaceHolder: PropTypes.string,
  inputTabIndex: PropTypes.number,
  inputWidth: PropTypes.string,
  inputHeight: PropTypes.string,
  inputFontSize: PropTypes.string,
  inputFontWeight: PropTypes.string,
  inputClassName: PropTypes.string,
  inputBorderWidth: PropTypes.string,

  onFocus: PropTypes.func,
  onFocusOut: PropTypes.func
};

export default EditableLabel;
