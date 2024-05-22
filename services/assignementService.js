const Assignment = require("../model/assignment");
const Matiere = require("../model/matiere");
const CustomError = require("../utils/CustomError");

class AssignementService {
  getAll = async (user,page = 1, limit = 10) => {
    try {
      let filter = {};

      if (user.role === "eleve") {
        filter.auteur = user.userId;
      } else if (user.role === "professeur") {
        const matieres = await Matiere.find({ prof: user.userId.toString() });
        const matiereIds = matieres.map((matiere) => matiere.id);
        filter.matiere = { $in: matiereIds };
      }

      let aggregateQuery = Assignment.aggregate([
        { $match: filter },
        {
          $lookup: {
            from: 'utilisateur',
            localField: 'auteur',
            foreignField: '_id',
            as: 'auteur'
          }
        },
        { $unwind: '$auteur' },
        {
          $lookup: {
            from: 'matiere',
            localField: 'matiere',
            foreignField: '_id',
            as: 'matiere'
          }
        },
        { $unwind: '$matiere' },
        {
          $lookup: {
            from: 'utilisateur',
            localField: 'matiere.prof',
            foreignField: '_id',
            as: 'matiere.prof'
          }
        },
        { $unwind: '$matiere.prof' }
      ]);
  
      const options = {
        page: parseInt(page),
        limit: parseInt(limit)
      };
  
      const result = await Assignment.aggregatePaginate(aggregateQuery, options);
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
}

module.exports = AssignementService;
