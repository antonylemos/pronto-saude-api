const EmailValidator = require('email-validator');

class UserValidationUtils {
    static isValidUserRegistrationRequest(request) {
        // Valide os campos obrigatórios (por exemplo, nome, email, senha)
        if (
            !request.name ||
            request.name.trim() === '' ||
            !request.email ||
            request.email.trim() === '' ||
            !request.password ||
            request.password.trim() === ''
        ) {
            return false;
        }

        // Valide o formato do email
        if (!UserValidationUtils.isValidEmail(request.email)) {
            return false;
        }

        // Valide a força da senha
        if (!UserValidationUtils.isStrongPassword(request.password)) {
            return false;
        }

        // Retorna true se todos os campos forem válidos
        return true;
    }

    static isValidEmail(email) {
        return EmailValidator.validate(email);
    }

    static isStrongPassword(password) {
        // Retorne true se a senha for forte, caso contrário, retorne false
        return password.length >= 8;
    }

    static isValidResetToken(enteredToken, savedToken) {
        // Compare o token digitado pelo usuário com o token salvo no banco
        return enteredToken === savedToken;
    }
}

module.exports = UserValidationUtils;
