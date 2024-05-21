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
        await this.service.getAll(req.user),
        `Liste des Assignements récupérer avec success (${req.user.role})`
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

  createAssignment = async (req, res) => {
    try {
      this.resOk(
        res,
        await this.service.create(req.body),
        "Assignement creer avec success",
        201
      );
    } catch (error) {
      this.resKo(res, error);
    }
  };

  updateAssignment = async (req, res) => {
    try {
      this.resOk(
        res,
        await this.service.update(req.params.id, req.body),
        "Assignement modifier avec success"
      );
    } catch (error) {
      this.resKo(res, error);
    }
  };

  deleteAssignment = async (req, res) => {
    try {
      this.resOk(
        res,
        await this.service.delete(req.params.id),
        "Assignement supprimer avec success",
        204
      );
    } catch (error) {
      this.resKo(res, error);
    }
  };
}

module.exports = AssignementController;
