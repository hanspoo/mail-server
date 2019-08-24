const dotenv = require("dotenv");
dotenv.config();

var nodemailer = require("nodemailer");

const from = process.env.FROM;
const to = process.env.TO;
const host = process.env.HOST;
const user = process.env.USER;
const pass = process.env.PASS;

const mailOptions = {
	from,
	to,
	subject: "Formulario de contacto" // Subject line
};

const transport = nodemailer.createTransport({
	host,
	port: 587,
	secure: false, // use TLS
	auth: {
		user,
		pass
	},
	tls: {
		// do not fail on invalid certs
		rejectUnauthorized: false
	}
});

const options = Object.assign({}, mailOptions, {
	html: "Cuerpo del correo"
});
transport.sendMail(options, function(err, info) {
	if (err) console.log(err);
	else console.log(info);
});
