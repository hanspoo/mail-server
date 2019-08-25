#!/usr/bin/node

const dotenv = require("dotenv");
dotenv.config();

var express = require("express");
var nodemailer = require("nodemailer");
var app = express();
var cors = require("cors");

var bodyParser = require("body-parser");
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

const from = process.env.FROM;
const to = process.env.TO;
const host = process.env.HOST;
const user = process.env.USER;
const pass = process.env.PASS;
const origin = process.env.ORIGIN;

var corsOptions = {
	origin,
	optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

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

app.get("/", function(req, res) {
	res.send("Hello World!");
});

app.post("/sendmail", cors(corsOptions), function(req, res) {
	const text = `
    nombre: ${req.body.nombre}
    email: ${req.body.email}
    message: ${req.body.message}
  `;
	const options = Object.assign({}, mailOptions, {
		text
	});
	transport.sendMail(options, function(err, info) {
		if (err) console.log(err);
		else console.log(info);
	});
	res.send("Correo enviado");
});

app.listen(process.env.HTTP_PORT, function() {
	console.log("Example app listening on port 7000!");
});
