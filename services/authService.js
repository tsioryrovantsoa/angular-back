const User = require("../model/utilisateur");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const SECRET_KEY = "angular_mbds";

class AuthService {
  login = async (login, password) => {
    try {
      const user = await User.findOne({ login });
      if (!user) {
        throw new Error("Identifiants incorrects");
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        throw new Error("Identifiants incorrects");
      }

      const token = jwt.sign(
        { userId: user._id, role: user.role },
        SECRET_KEY,
        { expiresIn: "1h" }
      );

      return token;
    } catch (error) {
      throw error;
    }
  };

  register = async (data) => {
    try {
      const { nom, login, password, role } = data;

      const existingUser = await User.findOne({ login });
      if (existingUser) {
        throw new Error("Utilisateur déjà existant");
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new User({
        nom,
        login,
        password: hashedPassword,
        role,
      });

      return await newUser.save();
    } catch (error) {
      throw error;
    }
  };
}

module.exports = AuthService;
