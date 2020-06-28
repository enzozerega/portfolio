import React, { Fragment } from "react";
import Form from "./Form";
import "../style/Contact.scss";

class Contact extends Form {
  state = {};
  doSubmit = () => {
    console.log("Submitted");
  };

  render() {
    return (
      <Fragment>
        <h1>Contact</h1>
        <form>
          <label for="name">Name</label>
          <input type="text" name="name" />
          <label for="email">Email</label>
          <input type="text" name="email" />
          <label for="message">Message</label>
          <input type="text" name="message" />
        </form>
      </Fragment>
    );
  }
}

export default Contact;
