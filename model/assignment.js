const mongoose = require('mongoose');
mongoose.set('debug', true);
const Schema = mongoose.Schema;
const utilisateur = require('../model/utilisateur.js');
const matiere = require('../model/matiere.js');

const assignmentSchema = new Schema({
  nom: String,
  dateDeRendu: Date,
  rendu: Boolean,
  auteur: { type: Schema.Types.ObjectId, ref: 'User' }, // Référence à un élève
  matiere: { type: Schema.Types.ObjectId, ref: 'Matiere' },
  note: Number,
  remarques: String
},{ collection: 'assignment' });

const Assignment = mongoose.model('Assignment', assignmentSchema);

module.exports = Assignment;
