const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rolesEnum = ["admin", "eleve", "professeur"];

const userSchema = new Schema({
  nom: String,
  login: String,
  password: String,
  image: String,
  role: { type: String, enum: rolesEnum }, // Utilisation d'un Enum pour le rôle
},{ collection: 'utilisateur' });

const User = mongoose.model("User", userSchema);

module.exports = User;
