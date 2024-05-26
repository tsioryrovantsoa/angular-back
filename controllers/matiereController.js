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

  getAllMatiereByProfPagination = async (req, res) => {
    try {
      const page = req.query.page || 1;
      const limit = req.query.limit || 10;
      this.resOk(
        res,
        await this.service.getAllCoursesByIdProfPagination(req.params.profId, page, limit),
        `Liste des Matieres récupérer avec success `
      );
    } catch (error) {
      this.resKo(res, error);
    }
  };
}

module.exports = MatiereController;
