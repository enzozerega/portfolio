import React, { Fragment } from "react";

const Input = ({ name, label, value, error, onChange }) => {
  return (
    <Fragment>
      <label htmlFor={name}>{label}</label>
      <input value={value} onChange={onChange} type="text" id={name} />
      {error && <span>{error}</span>}
    </Fragment>
  );
};

export default Input;
