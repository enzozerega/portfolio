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
        <section>
          <h2>Send me a message</h2>
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("name")}
            {this.renderInput("email")}
            {this.renderInput("message")}
            {this.renderButton("Send Message")}
          </form>
        </section>
        <section>
          <h2>Other contact options</h2>
        </section>
      </Fragment>
    );
  }
}

export default Contact;
