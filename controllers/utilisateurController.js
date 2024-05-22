const UtilisateurService = require("../services/utilisateurService");
const BaseController = require("./baseController");

class UtilisateurController extends BaseController {
  constructor() {
    super();
    this.service = new UtilisateurService();
  }

  getAllProf = async (req, res) => {
    try {
      this.resOk(
        res,
        await this.service.getAllProf(),
        `Liste des toutes les Profs récupérer avec success`
      );
    } catch (error) {
      this.resKo(res, error);
    }
  };

}

module.exports = UtilisateurController;
