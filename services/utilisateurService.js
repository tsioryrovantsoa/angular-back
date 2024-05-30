const User = require("../model/utilisateur");
const CustomError = require("../utils/CustomError");

class UtilisateurService {
  

  getAllProf = async () => {
    try {
      const profs = await User.find({ role: 'professeur' });
      if (!profs) {
        throw new CustomError("Profs non trouvé", 404);
      }
      return profs;
    } catch (error) {
      throw error;
    }
  };

  getAllEleve = async () => {
    try {
      const profs = await User.find({ role: 'eleve' });
      if (!profs) {
        throw new CustomError("Eleves non trouvé", 404);
      }
      return profs;
    } catch (error) {
      throw error;
    }
  };

}

module.exports = UtilisateurService;
