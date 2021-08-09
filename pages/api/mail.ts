const mail = require("@sendgrid/mail");
mail.setApiKey(process.env.SENDGRID_API_KEY);

export default function helloAPI(req, res) {
  const body = JSON.parse(req.body);

  const message = `
  FirstName: ${body.firstname}\r\n
  LastName: ${body.lastname}\r\n
  Email: ${body.email}\r\n
  Message: ${body.message}\r\n
  `;

  const data = {
    to: "juanmatusg16@gmail.com",
    from: "juanmatusg16@gmail.com",
    subject: "New Web Form Message!",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };

  mail.send(data).then(() => {
    res.status(200).json({ status: "Ok" });
  });
}
