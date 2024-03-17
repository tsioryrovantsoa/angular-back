const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const utilisateur = require('../model/utilisateur.js');
const matiere = require('../model/matiere.js');

const classeSchema = new Schema({
  nom: String,
  niveau: String,
  eleves: [{ type: Schema.Types.ObjectId, ref: 'User' }], // Référence à des élèves
  matieres: [{ type: Schema.Types.ObjectId, ref: 'Matiere' }] // Référence aux matières enseignées
},{ collection: 'classe' });

const Classe = mongoose.model('Classe', classeSchema);

module.exports = Classe;
