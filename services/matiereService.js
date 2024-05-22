const Matiere = require("../model/matiere");

class MatiereService {
  getMatiereByProfId = async (profId) => {
    try {
      return await Matiere.find({ prof: profId }).populate({
        path: "prof",
        model: "User",
      });
    } catch (error) {
      throw error;
    }
  };
}

module.exports = MatiereService;
