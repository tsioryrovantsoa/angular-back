const Assignment = require("../model/assignment");

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
      return await Assignment.findById(id)
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
}

module.exports = AssignementService;
