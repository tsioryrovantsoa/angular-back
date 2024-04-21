let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let assignment = require('./routes/assignments');
let utilisateur = require('./routes/utilisateur');
let classe = require('./routes/classe');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


let mongoose = require('mongoose');
const User = require('./model/utilisateur');
mongoose.Promise = global.Promise;
// mongoose.set('debug', true);
const uri = 'mongodb+srv://tfenoaina:garnacho2004@cluster0.vi1u5wq.mongodb.net/angularAssignments?retryWrites=true&w=majority&appName=Cluster0'
// remplacer toute cette chaine par l'URI de connexion à votre propre base dans le cloud s
// const uri = 'mongodb+srv://mb1:toto@cluster0.lxvcyxy.mongodb.net/assignments?retryWrites=true&w=majority&appName=Cluster0';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
};

mongoose.connect(uri, options)
  .then(() => {
    console.log("Connecté à la base MongoDB assignments dans le cloud !");
    console.log("at URI = " + uri);
    console.log("vérifiez with http://localhost:" + port + "/api/assignments que cela fonctionne")
  },
    err => {
      console.log('Erreur de connexion: ', err);
    });

// Pour accepter les connexions cross-domain (CORS)
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

// Pour les formulaires
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// Obligatoire si déploiement dans le cloud !
let port = process.env.PORT || 8010;

// les routes
const prefix = '/api';

// Middleware pour vérifier le token JWT et le rôle de l'utilisateur
function authenticateToken(role) {
  return function(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) {
      return res.status(401).json({ message: 'Token non fourni' });
    }

    jwt.verify(token, 't8#h@]~nX3B;4Fz!$2d5AqKp9^jGvL', (err, user) => {
      if (err) {
        return res.status(403).json({ message: 'Token invalide' });
      }
      req.user = user;

      // Ajoutez la logique pour vérifier le rôle de l'utilisateur ici
      console.log("tayyyy"+user.login)
      if (user.role !== role) {
        return res.status(403).json({ message: 'Accès refusé : vous n\'avez pas les permissions nécessaires' });
      }

      next();
    });
  };
}


// http://serveur..../assignments
app.route(prefix + '/assignments')
  .get(authenticateToken("admin"),assignment.getAssignments);
  app.route(prefix + '/classes')
  .get(classe.getClasses);

  app.use(express.json());
// Route pour la connexion
// app.post(prefix +'/login', async (req, res) => {
//   try {
//     const { login, password } = req.body;
//     const user = await User.findOne({ login });

//     if (!user) {
//       return res.status(401).json({ message: 'Nom d\'utilisateur ou mot de passe incorrect' });
//     }

//     const passwordMatch = await bcrypt.compare(password, user.password);

//     if (!passwordMatch) {
//       return res.status(401).json({ message: 'Nom d\'utilisateur ou mot de passe incorrect' });
//     }

//     const token = jwt.sign({ login: user.login }, 't8#h@]~nX3B;4Fz!$2d5AqKp9^jGvL', { expiresIn: '1h' });
//     res.json({ token });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });
app.route(prefix + '/login')
.post(utilisateur.login)

// On démarre le serveur
app.listen(port, "0.0.0.0");
console.log('Serveur démarré sur http://localhost:' + port);

module.exports = app;


