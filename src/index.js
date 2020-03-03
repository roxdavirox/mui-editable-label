import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";

const ENTER_KEY_CODE = 13;
const DEFAULT_LABEL_PLACEHOLDER = "Click To Edit";

const EditableLabel = ({ 
  onChange = () => {}, 
  onFocus = () => {}, 
  onFocusOut = () => {},
  ...props
  }) => {
  const [isEditing, setEditing] = useState(false);
  const [value, setValue] = useState(props.value);
  const inputRef = useRef(null);
  
  const isTextValueValid = () =>
    typeof value !== "undefined" && value.trim().length > 0;

  const handleFocus = () => {
    const fn = isEditing ? onFocusOut : onFocus;
    fn(value);
    handleEditState();
  };

  const handleChange = e => {
    setValue(inputRef.current.value);
    onChange(e);
  };

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
            ref:inputRef,
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
  value: PropTypes.string.isRequired,
  emptyEdit: PropTypes.bool,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onFocusOut: PropTypes.func
};

export default EditableLabel;
