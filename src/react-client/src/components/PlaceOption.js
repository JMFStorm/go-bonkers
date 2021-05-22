import React from "react";
import { useDispatch } from "react-redux";

import { addTag, removeTag } from "../redux/searchActions";

const PlaceOption = ({ option }) => {
  const dispatch = useDispatch();

  // Checkbox toggle
  const toggleTag = (event) => {
    event.target.checked ? dispatch(addTag(event.target.value)) : dispatch(removeTag(event.target.value));
  };

  return (
    <div>
      <input
        className="input"
        type="checkbox"
        id={option.value}
        name={option.value}
        value={option.value}
        checked={option.checked}
        onChange={(event) => toggleTag(event)}
      />
      <label htmlFor={option.value}>{option.label}</label>
    </div>
  );
};

export default PlaceOption;
