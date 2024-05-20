const User = require("../model/utilisateur.js");
const Classe = require("../model/utilisateur.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = 'angular_mbds';

async function login(req, res) {
  try {
    const { login, password } = req.body;

    // Trouver l'utilisateur par login
    const user = await User.findOne({ login });
    if (!user) {
      return res.status(400).json({ message: "Identifiants incorrects" });
    }

    // Vérifier le mot de passe
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Identifiants incorrects" });
    }

    // Générer un token JWT
    const token = jwt.sign({ userId: user._id, role: user.role }, SECRET_KEY, {
      expiresIn: "1h",
    });

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Erreur du serveur" });
  }
}

async function register(req, res) {
  try {
    const { nom, login, password, role } = req.body;

    const existingUser = await User.findOne({ login });
    if (existingUser) {
      return res.status(400).json({ message: "Utilisateur déjà existant" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      nom,
      login,
      password: hashedPassword,
      role,
    });

    await newUser.save();

    res.status(201).json({ message: "Utilisateur créé avec succès" });
  } catch (error) {
    res.status(500).json({ message: "Erreur du serveur" });
  }
}

module.exports = {
  login,
  register,
};
