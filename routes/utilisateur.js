const User = require("../model/utilisateur.js");
const Classe = require("../model/utilisateur.js");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


  async function login(req, res) {
  // Recherche des assignments
  try {
    const { login, password } = req.body;
    const user = await User.findOne({ login });

    if (!user) {
      return res.status(401).json({ message: 'Nom d\'utilisateur ou mot de passe incorrect' });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Nom d\'utilisateur ou mot de passe incorrect' });
    }

    const token = jwt.sign({ login: user.login,role:user.role}, 't8#h@]~nX3B;4Fz!$2d5AqKp9^jGvL', { expiresIn: '1h' });
    res.json({ role: user.role, nom: user.nom, token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
    login,
};
