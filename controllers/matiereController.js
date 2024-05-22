const MatiereService = require("../services/matiereService");
const BaseController = require("./baseController");

class MatiereController extends BaseController {
  constructor() {
    super();
    this.service = new MatiereService();
  }

  getAllMatiereByProf = async (req, res) => {
    try {
      this.resOk(
        res,
        await this.service.getMatiereByProfId(req.params.profId),
        "Liste des matieres du prof recuperer avec success"
      );
    } catch (error) {
      this.resKo(res, error);
    }
  };
}

module.exports = MatiereController;
