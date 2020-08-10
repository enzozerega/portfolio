import mailgun from "mailgun-js";

const sendEmail = async (name, email, message) => {
  const DOMAIN = process.env.REACT_APP_MAILGUN_DOMAIN;
  const api_key = process.env.REACT_APP_MAILGUN_API_KEY;
  const mg = mailgun({ apiKey: api_key, domain: DOMAIN });
  const data = {
    from: `${name} <${email}>`,
    to: "hello@enzozerega.com, enzerega@gmail.com",
    subject: "Contact Message",
    text: message,
  };
  let result;
  try {
    await mg.messages().send(data);
    result = true;
  } catch {
    result = false;
  }

  return result;
};

export default sendEmail;
