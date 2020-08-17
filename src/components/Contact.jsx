import React, { Fragment } from "react";
import Form from "./common/Form";
import { animation } from "./common/Animations";
import sendEmail from "./common/Mail";
import "../style/Contact.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdHappy, IoMdSad } from "react-icons/io";
import { MdMail } from "react-icons/md";
import { motion } from "framer-motion";

class Contact extends Form {
  state = {
    form: { name: "", email: "", message: "" },
    errors: {},
    emailStatus: undefined,
    hideClass: "",
  };

  doSubmit = () => {
    const { name, email, message } = this.state.form;
    const promise = sendEmail(name, email, message);
    promise.then((emailStatus) =>
      this.setState({ emailStatus, hideClass: "hidden" })
    );
  };

  render() {
    const { emailStatus, hideClass } = this.state;
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
              Feel free to contact me if you want to know more about me. You can
              reach out to me through different platforms. Choose the one that
              suits you best.
            </p>
          </article>
          <div className="contact-container">
            <h1>Contact me</h1>
            <form
              className={"contact-form " + hideClass}
              onSubmit={this.handleSubmit}
            >
              {this.renderInput("name", "Write your name here", "field-md")}
              {this.renderInput("email", "email@example.com", "field-md")}
              {this.renderTextArea(
                "message",
                "Write your message here",
                "field-lg"
              )}
              {this.renderButton("Send Message")}
            </form>
            {emailStatus === true && (
              <div className="email-response">
                <p>
                  Your message was sent. Thanks for writing to me. I will answer
                  as soon as possible.
                </p>
                <IoMdHappy />
              </div>
            )}
            {emailStatus === false && (
              <div className="email-response">
                <p>
                  There is a problem with the mail server. Please choose another
                  contact option or try again later.
                </p>
                <IoMdSad />
              </div>
            )}
          </div>
          <div className="social-container">
            <h2>More contact options</h2>
            <div className="social-links">
              <a href="mailto:hello@enzozerega.com">
                <MdMail /> hello@enzozerega.com
              </a>
              <a href="https://linkedin.com/in/enzo-zerega" target="_blank">
                <FaLinkedin /> linkedin.com/in/enzo-zerega
              </a>
              <a href="https://github.com/enzozerega" target="_blank">
                <FaGithub /> github.com/enzozerega
              </a>
            </div>
          </div>
        </motion.section>
      </Fragment>
    );
  }
}

export default Contact;
