const Classe = require("../model/classe.js");

function getClasses(req, res) {
  // Recherche des assignments
  Classe.find()
    .populate("eleves")
    .populate({
      path: "matieres",
      model: "Matiere",
      populate: {
        path: "prof",
        model: "User",
      },
    })
    .then((matieres) => {
      console.log("matieres trouvés :", matieres);
      res.send(matieres);
    })
    .catch((err) => {
      console.error("Erreur lors de la recherche des matieres :", err);
    });
}

module.exports = {
  getClasses,
};
