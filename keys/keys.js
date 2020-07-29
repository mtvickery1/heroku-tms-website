exports.gmail = {
  user: process.env.EMAIL_ID,
  pass: process.env.EMAIL_PASSWORD,
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  refresh: process.env.REFRESH_TOKEN,
  access: process.env.ACCESS_TOKEN
};
exports.sendGrid = {
  api: process.env.SENDGRID_API_KEY,
  pass: process.env.SENDGRID_PASS
};
exports.mailTrap = {
  user: process.env.MAILTRAP_USER,
  pass: process.env.MAILTRAP_PASS
};
exports.mailGun = {
  domain: process.env.MAILGUN_DOMAIN,
  api: process.env.MAILGUN_KEY,
  smpt: process.env.MAILGUN_SMTP,
  username: process.env.MAILGUN_SMPT_USERNAME
};