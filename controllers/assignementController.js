const AssignementService = require("../services/assignementService");
const BaseController = require("./baseController");

class AssignementController extends BaseController {
  constructor() {
    super();
    this.service = new AssignementService();
  }

  getAllAssignements = async (req, res) => {
    try {
      this.resOk(
        res,
        await this.service.getAll(),
        "Liste des Assignements récupérer avec success"
      );
    } catch (error) {
      this.resKo(res, error);
    }
  };

  getAssignementById = async (req, res) => {
    try {
      this.resOk(
        res,
        await this.service.getById(req.params.id),
        "Fiche d'un assignement récupérer avec success"
      );
    } catch (error) {
      this.resKo(res, error);
    }
  };
}

module.exports = AssignementController;
