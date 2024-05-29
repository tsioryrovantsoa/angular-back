const Assignment = require("../model/assignment");
const Matiere = require("../model/matiere");
const Classe = require("../model/classe");
const CustomError = require("../utils/CustomError");
const mongoose = require('mongoose');

class AssignementService {
  getAll = async (user, page = 1, limit = 10) => {
    try {
      let filter = {};

      if (user.role === "eleve") {
        const id_user = mongoose.Types.ObjectId(user.userId);
        filter.auteur = id_user;
      } else if (user.role === "professeur") {
        const matieres = await Matiere.find({ prof: user.userId });
        const matiereIds = matieres.map((matiere) => matiere._id);
        filter.matiere = { $in: matiereIds };
      }

      let aggregateQuery = Assignment.aggregate([
        { $match: filter },
        {
          $lookup: {
            from: "utilisateur",
            localField: "auteur",
            foreignField: "_id",
            as: "auteur",
          },
        },
        { $unwind: "$auteur" },
        {
          $lookup: {
            from: "matiere",
            localField: "matiere",
            foreignField: "_id",
            as: "matiere",
          },
        },
        { $unwind: "$matiere" },
        {
          $lookup: {
            from: "utilisateur",
            localField: "matiere.prof",
            foreignField: "_id",
            as: "matiere.prof",
          },
        },
        { $unwind: "$matiere.prof" },
      ]);

      const options = {
        page: parseInt(page),
        limit: parseInt(limit),
      };

      const result = await Assignment.aggregatePaginate(
        aggregateQuery,
        options
      );
      return result;
    } catch (error) {
      throw error;
    }
  };

  getById = async (id) => {
    try {
      const assignement = await Assignment.findById(id)
        .populate("auteur")
        .populate({
          path: "matiere",
          model: "Matiere",
          populate: {
            path: "prof",
            model: "User",
          },
        });
      if (!assignement) {
        throw new CustomError("Assignement non trouvé", 404);
      }
      return assignement;
    } catch (error) {
      throw error;
    }
  };

  create = async (data) => {
    try {
      const assign = new Assignment(data);
      return await assign.save();
    } catch (error) {
      throw error;
    }
  };

  createAssignmentAdmin = async (classeId, data) => {
    try {
      const classe = await Classe.findById(classeId).populate("eleves");
      if (!classe) {
        throw new CustomError("Classe non trouvée", 400);
      }

      const eleves = classe.eleves;
      if (!eleves.length) {
        throw new CustomError("Aucun élève trouvé dans cette classe", 400);
      }

      const assignments = eleves.map((eleve) => ({
        ...data,
        auteur: eleve._id,
      }));

      return await Assignment.insertMany(assignments);
    } catch (error) {
      throw error;
    }
  };

  update = async (id, data) => {
    try {
      const assign = await Assignment.findByIdAndUpdate(id, data, {
        new: true,
      });
      if (!assign) {
        throw new CustomError("Assignment non trouver", 404);
      }
      return assign;
    } catch (error) {
      throw error;
    }
  };

  delete = async (id) => {
    try {
      const assign = await Assignment.findByIdAndRemove(id);
      if (!assign) {
        throw new CustomError("Assignment non trouver", 404);
      }
    } catch (error) {
      throw error;
    }
  };

  noterAssignment = async (id, data) => {
    try {
      const { note, remarques } = data;
      const assignment = await Assignment.findById(id);

      if (!assignment) {
        throw new CustomError("Assignment non trouver", 404);
      }
      if (assignment.note !== null) {
        throw new CustomError("Assignment deja noter", 400);
      }

      assignment.note = note;
      assignment.remarques = remarques;
      assignment.rendu = true;
      assignment.renduauteur = true;

      return await assignment.save();
    } catch (error) {
      throw error;
    }
  };
}

module.exports = AssignementService;
