import React, { Fragment } from "react";
import Form from "./common/Form";
import "../style/Contact.scss";
import Input from "./common/Input";

class Contact extends Form {
  state = {
    form: { name: "", email: "", message: "" },
  };

  doSubmit = () => {
    console.log("Submitted");
  };

  render() {
    const { form } = this.state;
    return (
      <Fragment>
        <h1>Contact</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="name"
            label="Name"
            onChange={this.handleChange}
            value={form.name}
          />
          <Input
            name="email"
            label="Email"
            onChange={this.handleChange}
            value={form.email}
          />
          <Input
            name="message"
            label="Message"
            onChange={this.handleChange}
            value={form.message}
          />
          <button>Send Message</button>
        </form>
      </Fragment>
    );
  }
}

export default Contact;
