const Classe = require("../model/classe");

class ClasseService {
  getAll = async () => {
    try {
      return await Classe.find()
        .populate("eleves")
        .populate({
          path: "matieres",
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

module.exports = ClasseService;
