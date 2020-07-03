import { Component } from "react";

class Form extends Component {
  state = {
    form: { name: "", email: "", message: "" },
    errors: {},
  };

  allLetters = (input) => {
    const allowedLetters = /^[a-zA-Z\u00C0-\u00ff\-,'´ ]+$/;
    console.log(input.match(allowedLetters));
    if (input.match(allowedLetters)) return true;
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
    else
      switch (id) {
        case "name":
          if (!this.allLetters(obj[id]))
            errors[id] = `The ${
              id[0].toUpperCase() + id.slice(1)
            } field contains invalid characters`;
          else if (obj[id].length >= 50)
            errors[id] = `The ${
              id[0].toUpperCase() + id.slice(1)
            } field cannot be larger than 50 characters`;
          break;
        default:
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
}

export default Form;
