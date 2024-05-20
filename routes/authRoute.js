const express = require('express');
const AuthController = require('../controllers/authController');
const app = express.Router();

const controller = new AuthController();

/**
 * @openapi
 * /auth/login:
 *   post:
 *     summary: Connexion de l'utilisateur
 *     description: Connectez-vous avec les identifiants fournis.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: L'email de l'utilisateur
 *               password:
 *                 type: string
 *                 description: Le mot de passe de l'utilisateur
 *             required:
 *               - email
 *               - password
 *     responses:
 *       '200':
 *         description: Connexion réussie, jeton d'authentification généré
 *       '400':
 *         description: Mauvaise requête - Données manquantes ou mal formées
 *       '401':
 *         description: Non autorisé - Email ou mot de passe incorrect
 */
app.post('/login',controller.login);

/**
 * @openapi
 * /auth/register:
 *   post:
 *     summary: Inscription de l'utilisateur
 *     description: Inscrivez-vous avec les informations requises.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: L'email de l'utilisateur
 *               password:
 *                 type: string
 *                 description: Le mot de passe de l'utilisateur
 *             required:
 *               - email
 *               - password
 *     responses:
 *       '200':
 *         description: Inscription réussie, utilisateur créé
 *       '400':
 *         description: Mauvaise requête - Données manquantes ou mal formées
 *       '409':
 *         description: Conflit - L'utilisateur avec cet email existe déjà
 */
app.post('/register',controller.register);

module.exports = app;