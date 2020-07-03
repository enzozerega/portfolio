import React, { Fragment } from "react";
import Form from "./common/Form";
import "../style/Contact.scss";

class Contact extends Form {
  state = {
    form: { name: "", email: "", message: "" },
    errors: {},
  };

  doSubmit = () => {
    console.log("Submitted");
  };

  render() {
    return (
      <Fragment>
        <h1>Contact</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name")}
          {this.renderInput("email")}
          {this.renderInput("message")}
          {this.renderButton("Send Message")}
        </form>
      </Fragment>
    );
  }
}

export default Contact;
