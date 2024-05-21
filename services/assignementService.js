const Assignment = require("../model/assignment");
const CustomError = require("../utils/CustomError");

class AssignementService {
  getAll = async () => {
    try {
      return await Assignment.find()
        .populate("auteur")
        .populate({
          path: "matiere",
          model: "Matiere",
          populate: {
            path: "prof",
            model: "User",
          },
        });
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
}

module.exports = AssignementService;
