const Assignment = require("../model/assignment.js");

function getAssignments(req, res) {
  Assignment.find()
    .populate("auteur")
    .populate({
      path: "matiere",
      model: "Matiere",
      populate: {
        path: "prof",
        model: "User",
      },
    })
    .then((assignments) => {
      console.log("Assignments trouvés :", assignments);
      res.send(assignments);
    })
    .catch((err) => {
      console.error("Erreur lors de la recherche des assignments :", err);
    });
}

module.exports = {
  getAssignments,
};
