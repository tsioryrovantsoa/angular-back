const User = require("../model/utilisateur");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const CustomError = require("../utils/CustomError");

const SECRET_KEY = "angular_mbds";

class AuthService {
  login = async (login, password) => {
    try {
      const user = await User.findOne({ login });
      if (!user) {
        throw new CustomError("Identifiants incorrects",400);
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        throw new CustomError("Identifiants incorrects",400);
      }

      const token = jwt.sign(
        { userId: user._id, role: user.role },
        SECRET_KEY,
        { expiresIn: "5h" }
      );

      return {"token":token,"role":user.role,"id":user._id};
    } catch (error) {
      throw error;
    }
  };

  register = async (data) => {
    try {
      const { nom, login, password, role } = data;

      const existingUser = await User.findOne({ login });
      if (existingUser) {
        throw new CustomError("Utilisateur déjà existant",400);
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
