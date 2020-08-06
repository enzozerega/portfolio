import React from "react";

const Input = ({ name, label, value, error, onChange, placeholder }) => {
  return (
    <div className="form-group">
      <span>{label}</span>
      <input
        class="form-field"
        value={value}
        onChange={onChange}
        type="text"
        id={name}
        placeholder={placeholder}
      />
      {error && <span>{error}</span>}
    </div>
  );
};

export default Input;
