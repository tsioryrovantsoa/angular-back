const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const aggregatePaginate = require('mongoose-aggregate-paginate');

const matiereSchema = new Schema({
  nom: String,
  image: String,
  prof: { type: Schema.Types.ObjectId, ref: "utilisateur" },
},{ collection: 'matiere' });

matiereSchema.plugin(aggregatePaginate);
const Matiere = mongoose.model("Matiere", matiereSchema);


module.exports = Matiere;
