const express = require('express');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
const { User } = require('../models/user.model');
const TokenUtils = require('../utils/Token.utils');
const EmailService = require('../services/email.service');

const router = express.Router();
const userRepository = new UserRepository();
const emailService = new EmailService();

router.post('/login', [
    body('email').isEmail().withMessage('Email inválido'),
    body('password').notEmpty().withMessage('Senha é obrigatória')
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        const user = await userRepository.findByEmail(email);
        if (!user || !bcrypt.compareSync(password, user.password)) {
            return res.status(400).json({ message: 'Credenciais inválidas' });
        }

        const sessionToken = TokenUtils.generateToken();
        const sessionDurationSeconds = 3600;
        const expiresAt = new Date(Date.now() + sessionDurationSeconds * 1000);

        res.cookie('sessionToken', sessionToken, {
            maxAge: sessionDurationSeconds * 1000,
            path: '/',
            httpOnly: true
        });

        res.json({
            message: 'Login realizado com sucesso',
            token: sessionToken
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro no servidor' });
    }
});

router.post('/logout', (req, res) => {
    const cookies = req.cookies;

    if (cookies) {
        Object.keys(cookies).forEach(cookieName => {
            res.clearCookie(cookieName, {
                path: '/'
            });
        });
    }

    res.json({ message: 'Logout realizado com sucesso' });
});

router.post('/register', [
    body('name').notEmpty().withMessage('Nome é obrigatório'),
    body('email').isEmail().withMessage('Email inválido'),
    body('password').isLength({ min: 8 }).withMessage('A senha deve ter pelo menos 8 caracteres')
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
        if (await userRepository.findByEmail(email)) {
            return res.status(400).json({ message: 'Email já está em uso' });
        }

        const hashedPassword = bcrypt.hashSync(password, 10);
        const newUser = new User(name, email, hashedPassword);

        await userRepository.save(newUser);

        res.json({ message: 'Usuário registrado com sucesso' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro no servidor' });
    }
});

router.post('/forgot-password', async (req, res) => {
    const { email } = req.body;

    try {
        const user = await userRepository.findByEmail(email);
        if (!user) {
            return res.status(400).json({ message: 'Email não encontrado' });
        }

        const resetToken = TokenUtils.generateToken();
        user.setResetToken(resetToken);
        await userRepository.save(user);

        emailService.sendResetPasswordEmail(user.getEmail(), resetToken);

        res.json({ message: 'Email de recuperação de senha enviado' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro no servidor' });
    }
});

router.post('/reset-password', async (req, res) => {
    const { token, newPassword } = req.body;

    try {
        const user = await userRepository.findByResetToken(token);
        if (!user || user.getResetToken() !== token) {
            return res.status(400).json({ message: 'Token inválido' });
        }

        user.setPassword(newPassword);
        user.setResetToken(null);
        await userRepository.save(user);

        res.json({ message: 'Senha redefinida com sucesso' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro no servidor' });
    }
});

module.exports = router;
