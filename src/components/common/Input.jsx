import React from "react";

const Input = ({
  name,
  label,
  value,
  error,
  onChange,
  placeholder,
  extraClass,
}) => {
  return (
    <div className={"form-group " + extraClass}>
      <span className="label">{label}</span>
      <input
        className="form-field"
        value={value}
        onChange={onChange}
        type="text"
        id={name}
        placeholder={placeholder}
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default Input;
