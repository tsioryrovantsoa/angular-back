let express = require("express");
let app = express();
let bodyParser = require("body-parser");
const morgan = require("morgan");
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./utils/swaggerDefinition');
const assignementRoute = require("./routes/assignementRoute");
const classeRoute = require("./routes/classeRoute");
const authRoute = require("./routes/authRoute");

let mongoose = require("mongoose");
mongoose.Promise = global.Promise;
// mongoose.set('debug', true);

const uri =
  "mongodb+srv://tfenoaina:garnacho2004@cluster0.vi1u5wq.mongodb.net/angularAssignments?retryWrites=true&w=majority&appName=Cluster0";
// remplacer toute cette chaine par l'URI de connexion à votre propre base dans le cloud s
// const uri = 'mongodb+srv://mb1:toto@cluster0.lxvcyxy.mongodb.net/assignments?retryWrites=true&w=majority&appName=Cluster0';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

mongoose.connect(uri, options).then(
  () => {
    console.log("Connecté à la base MongoDB assignments dans le cloud !");
    console.log("at URI = " + uri);
    console.log(
      "vérifiez with http://localhost:" +
        port +
        "/api/assignments que cela fonctionne"
    );
  },
  (err) => {
    console.log("Erreur de connexion: ", err);
  }
);

app.use(morgan("dev"));

// Pour accepter les connexions cross-domain (CORS)
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

// Pour les formulaires
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Obligatoire si déploiement dans le cloud !
let port = process.env.PORT || 8010;

// les routes
const prefix = "/api";

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// http://serveur..../assignments
app.use(prefix + "/assignments", assignementRoute);
app.use(prefix + "/classes", classeRoute);
app.use(prefix + "/auth",authRoute);

app.use((req, res, next) => {
  res.status(404).send({ statue: "ko", message: "Route introuvable" });
});

// On démarre le serveur
app.listen(port, "0.0.0.0");
console.log("Serveur démarré sur http://localhost:" + port);

module.exports = app;
