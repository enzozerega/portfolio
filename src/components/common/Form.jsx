import { Component } from "react";

class Form extends Component {
  state = {
    form: { name: "", email: "", message: "" },
    errors: {},
  };

  allLetters = (input) => {
    const allowedLetters = /^[A-Za-z]+$/;
    if (input.value.match(allowedLetters)) return true;
    else return false;
  };
  validate = () => {
    const { form } = this.state;
    const errors = {};
    for (const field in form) {
      const error = this.validateProperty({ id: field, value: form[field] });
      errors[field] = error;
    }

    return errors;
  };

  validateProperty = ({ id, value }) => {
    const errors = {};
    const obj = { [id]: value };
    if (obj[id].trim() === "")
      errors[id] = `The ${id[0].toUpperCase() + id.slice(1)} field is required`;
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
}

export default Form;
