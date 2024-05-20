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
        "Liste des Assignements faite avec success"
      );
    } catch (error) {
      console.log(error);
      this.resKo(res, error);
    }
  };
}

module.exports = AssignementController;
