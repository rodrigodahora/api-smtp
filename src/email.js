const nodemailer = require('nodemailer');

    const transportador = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "9e0724f08fb0a8",
            pass: "25131aad28726f"
        }
    });

    module.exports = transportador;



