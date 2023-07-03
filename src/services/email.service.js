const nodemailer = require('nodemailer');
const { host, port, username, password } = require('../config/email');

class EmailService {
    async sendResetPasswordEmail(recipientEmail, resetToken) {
        // Configurar o transporte de e-mail
        const transporter = nodemailer.createTransport({
            host,
            port,
            auth: {
                user: username,
                pass: password
            }
        });

        try {
            // Enviar o e-mail de recuperação de senha
            await transporter.sendMail({
                from: username,
                to: recipientEmail,
                subject: 'Recuperação de Senha',
                text: `Olá,\n\nVocê solicitou a recuperação de senha. Use o seguinte token para redefinir sua senha: ${resetToken}`
            });

            console.log('E-mail de recuperação de senha enviado para: ' + recipientEmail);
        } catch (error) {
            console.log('Erro ao enviar o e-mail de recuperação de senha: ' + error.message);
        }
    }
}

module.exports = new EmailService();
