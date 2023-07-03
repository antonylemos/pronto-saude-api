const { v4: uuidv4 } = require('uuid');

class TokenUtils {
    static generateResetToken() {
        // Gere um token único usando a função uuidv4 do módulo uuid
        const token = uuidv4();

        // Retorne o token gerado
        return token;
    }
}

module.exports = TokenUtils;
