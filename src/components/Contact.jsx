import React, { Fragment } from "react";
import Form from "./common/Form";
import { animation } from "./common/Animations";
import sendEmail from "./common/Mail";
import "../style/Contact.scss";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { motion } from "framer-motion";

class Contact extends Form {
  state = {
    form: { name: "", email: "", message: "" },
    errors: {},
    emailStatus: undefined,
  };

  doSubmit = () => {
    const { name, email, message } = this.state.form;
    const promise = sendEmail(name, email, message);
    promise.then((emailStatus) => this.setState({ emailStatus }));
  };

  render() {
    const { emailStatus } = this.state;
    return (
      <Fragment>
        <motion.section
          variants={animation}
          initial="initial"
          animate="animate"
          exit="exit"
          className="contact"
        >
          <article className="contact-intro">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
              hic doloribus omnis pariatur reprehenderit quaerat iusto, veniam
              quasi veritatis esse? Alias consequuntur quo cupiditate architecto
              delectus maxime cum vel. Ullam!
            </p>
          </article>
          <div className="contact-container">
            <h1>Send me a message</h1>
            <form className="contact-form" onSubmit={this.handleSubmit}>
              {this.renderInput("name", "Write your name here", "field-md")}
              {this.renderInput("email", "email@example.com", "field-md")}
              {this.renderTextArea(
                "message",
                "Write your message here",
                "field-lg"
              )}
              {this.renderButton("Send Message")}
            </form>
          </div>
          {emailStatus === true && (
            <div>Your message was sent. I will answer as soon as possible.</div>
          )}
          {emailStatus === false && (
            <div>
              There is a problem with the mail server. Please choose another
              contact option or try again later.
            </div>
          )}
          <div className="social-container">
            <h2>More contact options</h2>
            <FaGithub />
            <MdMail />
            <FaLinkedin />
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
          </div>
        </motion.section>
      </Fragment>
    );
  }
}

export default Contact;
