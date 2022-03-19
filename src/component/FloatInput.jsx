import React from "react";
import { useState } from "react";

/** FloatInput
 *    Implementation of a input element design pattern, which handles
 *    numbers that may be negative or have decimal precision.
**/
export default function FloatInput(props) {
  const [value, setValue] = useState("");
  const [savedValue, setSavedValue] = useState(0);
  const [error, setError] = useState("");

  const permittedValues = /^\-?[0-9]*?\.?[0-9]*?$/g;

  // Stores a temporary value, allowing float-like strings.
  // Avoids calling `parseFloat` and losing decimal point and
  // negative symbol.
  const handleChange = e => {
    const parsed = permittedValues.exec(e.currentTarget.value);

    if (!parsed) {
      return setError(`Bad value entered: ${e.currentTarget.value}`);
    }
    setValue(e.currentTarget.value);
  };


  const handleBlur = e => {
    if (e.currentTarget.value != savedValue) {
      
      // Only validate and save on change.
      const newValue = parseFloat(e.currentTarget.value);
      if (isNaN(newValue)) {
        return setValue("");
      }

      setSavedValue(e.currentTarget.value);
    }
  };

  return (
    <>
    <input
      type="text"
      value={value}
      placeholder={props.placeholder || "Enter a number and click away"}
      onChange={props.handleChange || handleChange}
      onBlur={props.handleBlur || handleBlur}
    />
    {props.showError
      ? <div>{error}</div>
      : null
    }
    </>
  );
}