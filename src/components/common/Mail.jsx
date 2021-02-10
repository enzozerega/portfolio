import Mailgun from "mailgun.js";
import formData from "form-data";

const sendEmail = async (name, email, message) => {
  const mailgun = new Mailgun(formData);
  const mg = mailgun.client({
    username: "api",
    key: process.env.REACT_APP_MAILGUN_API_KEY,
  });
  let result;
  try {
    await mg.messages
      .create(process.env.REACT_APP_MAILGUN_DOMAIN, {
        from: `${name} <${email}>`,
        to: ["hello@enzozerega.com"],
        subject: "Message from contact form at enzozerega.com",
        text: message,
      })
      .then((msg) => console.log(msg)) // logs response data
      .catch((err) => console.log(err)); // logs any error
    result = true;
  } catch {
    result = false;
  }

  return result;
};

export default sendEmail;
