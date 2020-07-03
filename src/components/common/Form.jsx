import React, { Component } from "react";
import Input from "./Input";

class Form extends Component {
  state = {
    form: { name: "", email: "", message: "" },
    errors: {},
  };

  validName = (input) => {
    const allowedLetters = /^[a-zA-Z\u00C0-\u00ff\-,'´ ]+$/;
    if (input.match(allowedLetters)) return true;
    else return false;
  };

  validEmail = (input) => {
    const condition = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (condition.test(String(input).toLocaleLowerCase().trim())) {
      return true;
    }
    return false;
  };

  validate = () => {
    const { form } = this.state;
    const errors = {};
    for (const field in form) {
      const error = this.validateProperty({ id: field, value: form[field] });
      if (error) errors[field] = error;
    }
    return errors ? Object.keys(errors).length > 0 : null;
  };

  validateProperty = ({ id, value }) => {
    const errors = {};
    const obj = { [id]: value };
    if (obj[id].trim() === "")
      errors[id] = `The ${id[0].toUpperCase() + id.slice(1)} field is required`;
    else
      switch (id) {
        case "name":
          if (!this.validName(obj[id]))
            errors[id] = `The ${
              id[0].toUpperCase() + id.slice(1)
            } field contains invalid characters`;
          else if (obj[id].length >= 50)
            errors[id] = `The ${
              id[0].toUpperCase() + id.slice(1)
            } field cannot be larger than 50 characters`;
          break;
        case "email":
          if (!this.validEmail(obj[id]))
            errors[id] = `The ${
              id[0].toUpperCase() + id.slice(1)
            } field must contain a valid email adress`;
          break;
        case "message":
          if (obj[id].length >= 5000)
            errors[id] = `The ${
              id[0].toUpperCase() + id.slice(1)
            } field cannot be larger than 5000 characters`;
          break;
        default:
          break;
      }
    return errors ? errors[id] : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.id] = errorMessage;
    else delete errors[input.id];

    const form = { ...this.state.form };
    form[input.id] = input.value;
    this.setState({ form, errors });
  };

  renderButton = (label) => {
    return <button disabled={this.validate()}>{label}</button>;
  };

  renderInput = (key) => {
    const { form, errors } = this.state;
    return (
      <Input
        name={key}
        label={key[0].toUpperCase() + key.slice(1)}
        onChange={this.handleChange}
        value={form[key]}
        error={errors[key]}
      />
    );
  };
}

export default Form;
