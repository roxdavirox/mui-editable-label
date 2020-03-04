import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";

const ENTER_KEY_CODE = 13;
const DEFAULT_LABEL_PLACEHOLDER = "Click To Edit";

const EditableLabel = ({ 
  onFocus = () => {}, 
  onBlur = () => {},
  ...props
  }) => {
  const [isEditing, setEditing] = useState(false);
  const [value, setValue] = useState(props.initialValue);
  const inputRef = useRef(null);
  
  const isTextValueValid = () =>
    typeof value !== "undefined" && value.trim().length > 0;

  const handleFocus = () => {
    if (isEditing) {
      onBlur(value);
    } else {
      onFocus(value);
    }
    handleEditState();
  };

  const handleChange = e => setValue(inputRef.current.value);

  const handleKeyDown = e => {
    if (e.keyCode === ENTER_KEY_CODE) {
      handleEnterKey();
    }
  };

  const handleEditState = () => {
    if(!isTextValueValid()) return;
    setEditing(prev => !prev);
  };

  const handleEnterKey = () => {
    handleFocus();
  };
    
  if (isEditing) {
    return (
        <Input
          inputProps={{
            ref: inputRef,
            value
          }}
          onChange={handleChange}
          onBlur={handleFocus}
          onKeyDown={handleKeyDown}
          autoFocus
        />
    );
  }

  const labelText = isTextValueValid()
    ? value
    : props.labelPlaceHolder || DEFAULT_LABEL_PLACEHOLDER;

  return <InputLabel onClick={handleFocus}>{labelText}</InputLabel>;
};

EditableLabel.propTypes = {
  initialValue: PropTypes.string.isRequired,
  emptyEdit: PropTypes.bool,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func
};

export default EditableLabel;
