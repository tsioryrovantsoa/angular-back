const Matiere = require("../model/matiere");
const User = require("../model/utilisateur");
const mongoose = require('mongoose');

class MatiereService {

  getMatiereByProfId = async (profId) => {
    try {
      return await Matiere.find({ prof: profId }).populate({
        path: "prof",
        model: "User",
      });
    } catch (error) {
      throw error;
    }
  };

  getAllMatiere = async() => {
    try {
      return await Matiere.find();
    } catch (error) {
      throw error;
    }
  }

  getAllCoursesByIdProfPagination = async (profId, page = 1, limit = 10) => {
    try {

      console.log("Received Professor ID:", profId);

    // Convertir profId en ObjectId
    const profObjectId = mongoose.Types.ObjectId(profId);
    console.log("Converted Professor ID to ObjectId:", profObjectId);
    
    let filter = { prof: profObjectId };
      let aggregateQuery = Matiere.aggregate([
        { $match: filter },
        {
          $lookup: {
            from: "utilisateur",
            localField: "prof",
            foreignField: "_id",
            as: "professeur",
          },
        },
        { $unwind: "$professeur" },
      ]);
      console.log("Aggregate Query:", aggregateQuery);
  
      const options = {
        page: parseInt(page),
        limit: parseInt(limit),
      };
      const result = await Matiere.aggregatePaginate(aggregateQuery, options);
      return result;
    } catch (error) {
      throw error;
    }
  };
  
  
}



module.exports = MatiereService;
