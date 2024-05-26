const AuthService = require("../services/authService");
const BaseController = require("./baseController");

class AuthController extends BaseController {
  constructor() {
    super();
    this.service = new AuthService();
  }

  login = async (req, res) => {
    try {
      console.log(req.body)
      const { login, password } = req.body;
      const token = await this.service.login(login, password);
      this.resOk(res, token, "Utilisateur connecter avec success");
    } catch (error) {
      this.resKo(res, error);
    }
  };

  register = async (req, res) => {
    try {
      const token = await this.service.register(req.body);
      this.resOk(res, token, "Utilisateur inscrit avec success",201);
    } catch (error) {
      this.resKo(res, error);
    }
  };
}

module.exports = AuthController;
