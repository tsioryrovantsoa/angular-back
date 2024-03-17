const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const matiereSchema = new Schema({
  nom: String,
  image: String,
  prof: { type: Schema.Types.ObjectId, ref: "utilisateur" },
},{ collection: 'matiere' });

const Matiere = mongoose.model("Matiere", matiereSchema);

module.exports = Matiere;
