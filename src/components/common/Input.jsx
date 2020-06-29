import React, { Fragment } from "react";

const Input = ({ name, label, value, onChange }) => {
  return (
    <Fragment>
      <label htmlFor={name}>{label}</label>
      <input value={value} onChange={onChange} type="text" id={name} />
    </Fragment>
  );
};

export default Input;
