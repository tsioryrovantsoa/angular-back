const ClasseService = require("../services/classeService");
const BaseController = require("./baseController");

class ClasseController extends BaseController {
  constructor() {
    super();
    this.service = new ClasseService();
  }

  getAllClasse = async (req, res) => {
    try {
      this.resOk(
        res,
        await this.service.getAll(),
        "Liste des classes recuperer avec success"
      );
    } catch (error) {
      this.resKo(res, error);
    }
  };

  getClassesByMatiereId = async (req, res) => {
    try {
      this.resOk(
        res,
        await this.service.getClassesByMatiereId(req.params.matiereId),
        "Liste des classes du matiere recuperer avec success"
      );
    } catch (error) {
      this.resKo(res, error);
    }
  };
}

module.exports = ClasseController;
