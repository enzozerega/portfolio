import React, { Fragment } from "react";
import Form from "./common/Form";
import "../style/Contact.scss";
import Input from "./common/Input";

class Contact extends Form {
  state = {
    form: { name: "", email: "", message: "" },
    errors: {},
  };

  // schema = {
  //   name: Joi.string()
  //     .max(20)
  //     .required()
  //     .label("You have to provide a valid name"),
  //   email: Joi.string().email({ minDomainSegments: 2 }).required(),
  //   message: Joi.string().max(500).required(),
  // };

  doSubmit = () => {
    console.log("Submitted");
  };

  render() {
    const { form, errors } = this.state;
    return (
      <Fragment>
        <h1>Contact</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="name"
            label="Name"
            onChange={this.handleChange}
            value={form.name}
            error={errors.name}
          />
          <Input
            name="email"
            label="Email"
            onChange={this.handleChange}
            value={form.email}
            error={errors.email}
          />
          <Input
            name="message"
            label="Message"
            onChange={this.handleChange}
            value={form.message}
            error={errors.message}
          />
          <button disabled={this.validate()}>Send Message</button>
        </form>
      </Fragment>
    );
  }
}

export default Contact;
