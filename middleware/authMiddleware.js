const jwt = require("jsonwebtoken");
const SECRET_KEY = "angular_mbds"; // Assurez-vous de stocker cela de manière sécurisée, par exemple dans les variables d'environnement

const verifyToken = (req, res, next) => {
  const authHeader  = req.headers["authorization"];
  if (!authHeader ) {
    return res.status(403).json({ message: "Token manquant" });
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(403).json({ message: "Token manquant" });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Token invalide" });
  }
};

const checkRole = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: "Accès interdit" });
    }
    next();
  };
};

module.exports = {
  verifyToken,
  checkRole,
};
