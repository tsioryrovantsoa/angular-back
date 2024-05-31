# Projet Assignments - Backend - TONY -37 -TSIORY -16

# Introduction

Ce dépôt contient le code backend du projet Assignments. Il gère l'authentification des utilisateurs, les opérations CRUD sur les Assignments, et la communication avec la base de données MongoDB.

# Fonctionnalités

Authentification des utilisateurs : Utilisation de JSON Web Tokens (JWT) pour sécuriser l'accès.

CRUD pour les Assignments : Création, lecture, mise à jour et suppression des Assignments.

Gestion des utilisateurs : Différenciation des rôles admin et non-admin (eleve/prof) pour les actions.

Liste pour les autres modeles : matieres et classes

Stockage des données dans MongoDB : Utilisation de MongoDB pour la persistance des données (deja deployer en ligne pas besoin d'avoir Mongo dans votre ordinateur).


# Prérequis

Node.js et npm installés sur votre machine.

Cloner le dépôt GitHub

Installer les dépendances

> npm install

Lancer le projet

> node server.js

# Détails des Dossiers et Fichiers

controllers/ : Contient les fichiers de logique métier pour l'authentification et les Assignments.

models/ : Contient les schémas Mongoose pour les Assignments et les utilisateurs.

routes/ : Contient les définitions des routes pour les endpoints de l'API.

server.js : : Point d'entrée principal de l'application.

# API Endpoints

# BASE URL

> http://localhost:8010/api/

# *Authentification*

# POST /auth/login - Authentification de l'utilisateur

Requête :

	{
	    "login" : "admin",
	    "password" : "admin"
	}

Reponse :

	{
	    "statue": "ok",
	    "message": "Utilisateur connecter avec success",
	    "data": {
	        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjRiOTFlYzA3MmFlOTNkYjRlZDBmNzMiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTcxNzgwMTAsImV4cCI6MTcxNzE5NjAxMH0.OFbyR34NM6ZVkp7d-oLWRliyS8W53CjY9bmnYHJ8d6c",
	        "role": "admin",
	        "id": "664b91ec072ae93db4ed0f73"
	    }
	}

 # *Assignments*

 # GET /assignments?page=1&limit=4 - liste avec pagination assignments

 Reponse : 

	 {
	    "statue": "ok",
	    "message": "Liste des Assignements récupérer avec success (admin)",
	    "data": {
	        "docs": [
	            {
	                "_id": "664cd55680397c1104ad767a",
	                "nom": "Projet Angular modifier",
	                "dateDeRendu": "2024-05-30T00:00:00.000Z",
	                "rendu": true,
	                "renduauteur": true,
	                "auteur": {
	                    "_id": "664b9260072ae93db4ed0f7f",
	                    "nom": "Tony",
	                    "login": "tony",
	                    "password": "$2b$10$K8JFMx5B7pNoPNBKIOw68u1QmBwgFjqlZE8kAxSjT8aiftJyF1zFC",
	                    "role": "eleve",
	                    "__v": 0
	                },
	                "matiere": {
	                    "_id": "65f713f6de4184ff0d9f59a9",
	                    "nom": "Big Data NoSQL",
	                    "image": "bigdata.webp",
	                    "prof": {
	                        "_id": "664b91cb072ae93db4ed0f6f",
	                        "nom": "Gabriel Mopollo",
	                        "login": "gabmopollo",
	                        "password": "$2b$10$29ChFJx5qSQkcfGStiKh0.cFeykn3vv5p2Vi8sLiuIa9KJe.AFq.q",
	                        "role": "professeur",
	                        "__v": 0,
	                        "image": "mopollo.webp"
	                    }
	                },
	                "note": 19,
	                "remarques": "test",
	                "__v": 0
	            },
	            {
	                "_id": "664ecee46ec74015ac390ace",
	                "nom": "Beatae sunt id moles",
	                "dateDeRendu": "1991-01-23T21:00:00.000Z",
	                "rendu": true,
	                "renduauteur": true,
	                "matiere": {
	                    "_id": "65f713f6de4184ff0d9f59a9",
	                    "nom": "Big Data NoSQL",
	                    "image": "bigdata.webp",
	                    "prof": {
	                        "_id": "664b91cb072ae93db4ed0f6f",
	                        "nom": "Gabriel Mopollo",
	                        "login": "gabmopollo",
	                        "password": "$2b$10$29ChFJx5qSQkcfGStiKh0.cFeykn3vv5p2Vi8sLiuIa9KJe.AFq.q",
	                        "role": "professeur",
	                        "__v": 0,
	                        "image": "mopollo.webp"
	                    }
	                },
	                "note": 18,
	                "auteur": {
	                    "_id": "664b9260072ae93db4ed0f7f",
	                    "nom": "Tony",
	                    "login": "tony",
	                    "password": "$2b$10$K8JFMx5B7pNoPNBKIOw68u1QmBwgFjqlZE8kAxSjT8aiftJyF1zFC",
	                    "role": "eleve",
	                    "__v": 0
	                },
	                "__v": 0,
	                "remarques": "test"
	            },
	            {
	                "_id": "66577c912f93e540ec3bd4fe",
	                "nom": "Projet Big Data",
	                "dateDeRendu": "2024-05-30T00:00:00.000Z",
	                "rendu": true,
	                "renduauteur": true,
	                "matiere": {
	                    "_id": "65f713f6de4184ff0d9f59a9",
	                    "nom": "Big Data NoSQL",
	                    "image": "bigdata.webp",
	                    "prof": {
	                        "_id": "664b91cb072ae93db4ed0f6f",
	                        "nom": "Gabriel Mopollo",
	                        "login": "gabmopollo",
	                        "password": "$2b$10$29ChFJx5qSQkcfGStiKh0.cFeykn3vv5p2Vi8sLiuIa9KJe.AFq.q",
	                        "role": "professeur",
	                        "__v": 0,
	                        "image": "mopollo.webp"
	                    }
	                },
	                "note": 12,
	                "remarques": "test",
	                "auteur": {
	                    "_id": "664b91ad072ae93db4ed0f6c",
	                    "nom": "Tsiory",
	                    "login": "tsiory",
	                    "password": "$2b$10$IvWQoxy3dZngqdiI7mBUaODO15fzfnozyFid9kp0n6ttLgP9MhZW6",
	                    "role": "eleve",
	                    "__v": 0
	                },
	                "__v": 0
	            },
	            {
	                "_id": "66577c912f93e540ec3bd4ff",
	                "nom": "Projet Big Data",
	                "dateDeRendu": "2024-05-30T00:00:00.000Z",
	                "rendu": true,
	                "renduauteur": true,
	                "matiere": {
	                    "_id": "65f713f6de4184ff0d9f59a9",
	                    "nom": "Big Data NoSQL",
	                    "image": "bigdata.webp",
	                    "prof": {
	                        "_id": "664b91cb072ae93db4ed0f6f",
	                        "nom": "Gabriel Mopollo",
	                        "login": "gabmopollo",
	                        "password": "$2b$10$29ChFJx5qSQkcfGStiKh0.cFeykn3vv5p2Vi8sLiuIa9KJe.AFq.q",
	                        "role": "professeur",
	                        "__v": 0,
	                        "image": "mopollo.webp"
	                    }
	                },
	                "note": 9,
	                "remarques": "test",
	                "auteur": {
	                    "_id": "664b9260072ae93db4ed0f7f",
	                    "nom": "Tony",
	                    "login": "tony",
	                    "password": "$2b$10$K8JFMx5B7pNoPNBKIOw68u1QmBwgFjqlZE8kAxSjT8aiftJyF1zFC",
	                    "role": "eleve",
	                    "__v": 0
	                },
	                "__v": 0
	            }
	        ],
	        "total": 1175,
	        "limit": 4,
	        "page": 1,
	        "pages": 294
	    }
	}

 # GET /assignments/664cd55680397c1104ad767a - Fiche Assignments
  Reponse :
	
	 {
	    "statue": "ok",
	    "message": "Fiche d'un assignement récupérer avec success",
	    "data": {
	        "_id": "664cd55680397c1104ad767a",
	        "nom": "Projet Angular modifier",
	        "dateDeRendu": "2024-05-30T00:00:00.000Z",
	        "rendu": true,
	        "renduauteur": true,
	        "auteur": {
	            "_id": "664b9260072ae93db4ed0f7f",
	            "nom": "Tony",
	            "login": "tony",
	            "password": "$2b$10$K8JFMx5B7pNoPNBKIOw68u1QmBwgFjqlZE8kAxSjT8aiftJyF1zFC",
	            "role": "eleve",
	            "__v": 0
	        },
	        "matiere": {
	            "_id": "65f713f6de4184ff0d9f59a9",
	            "nom": "Big Data NoSQL",
	            "image": "bigdata.webp",
	            "prof": {
	                "_id": "664b91cb072ae93db4ed0f6f",
	                "nom": "Gabriel Mopollo",
	                "login": "gabmopollo",
	                "password": "$2b$10$29ChFJx5qSQkcfGStiKh0.cFeykn3vv5p2Vi8sLiuIa9KJe.AFq.q",
	                "role": "professeur",
	                "__v": 0,
	                "image": "mopollo.webp"
	            }
	        },
	        "note": 19,
	        "remarques": "test",
	        "__v": 0
	    }
	}

# POST /assignments/ - Ajout Assignments

Requete :

	{
	    "nom": "Projet Angular",
	    "dateDeRendu": "2024-05-30T00:00:00.000Z",
	    "rendu": false,
	    "renduauteur": false,
	    "auteur":  "664b9260072ae93db4ed0f7f",
	    "matiere": "65f713f6de4184ff0d9f59a9",
	    "note": null,
	    "remarques": null
	}

 # Reponse :
 
	 {
	    "statue": "ok",
	    "message": "Assignement creer avec success",
	    "data": {
	        "_id": "665a36e448ef583f9c273ab4",
	        "nom": "Projet Angular",
	        "dateDeRendu": "2024-05-30T00:00:00.000Z",
	        "rendu": false,
	        "renduauteur": false,
	        "auteur": "664b9260072ae93db4ed0f7f",
	        "matiere": "65f713f6de4184ff0d9f59a9",
	        "note": null,
	        "remarques": null,
	        "__v": 0
	    }
	}

 # UPDATE /assignments/664cd55680397c1104ad767a - Modifier des assignments

 Requete :
	
	 {
	    "nom": "Projet Angular modifier",
	    "dateDeRendu": "2024-05-30T00:00:00.000Z",
	    "rendu": true,
	    "renduauteur": true,
	    "auteur":  "664b9260072ae93db4ed0f7f",
	    "matiere": "65f713f6de4184ff0d9f59a9",
	    "note": 12.5,
	    "remarques": "Remarque"
	}

 Reponse :

	 {
	    "statue": "ok",
	    "message": "Assignement modifier avec success",
	    "data": {
	        "_id": "664cd55680397c1104ad767a",
	        "nom": "Projet Angular modifier",
	        "dateDeRendu": "2024-05-30T00:00:00.000Z",
	        "rendu": true,
	        "renduauteur": true,
	        "auteur": "664b9260072ae93db4ed0f7f",
	        "matiere": "65f713f6de4184ff0d9f59a9",
	        "note": 12.5,
	        "remarques": "Remarque",
	        "__v": 0
	    }
	}

 # DELETE assignments/65f714c7de4184ff0d9f59ad/ - supprimer les assignments 

 Reponse : pas de reponse status 204

 # *MATIERE*
 # GET /matieres/ - LISTE DES MATIERES

 Reponses :

	 {
	    "statue": "ok",
	    "message": "Liste des matieres recuperer avec success",
	    "data": [
	        {
	            "_id": "65f713f6de4184ff0d9f59a9",
	            "nom": "Big Data NoSQL",
	            "image": "bigdata.webp",
	            "prof": "664b91cb072ae93db4ed0f6f"
	        },
	        {
	            "_id": "665393f6fd8d4c9263e2658c",
	            "nom": "Tunning",
	            "image": "tuning.png",
	            "prof": "664b91cb072ae93db4ed0f6f"
	        },
	        {
	            "_id": "66539415fd8d4c9263e2658d",
	            "nom": "Oracle",
	            "image": "oracle.png",
	            "prof": "665a0489a327a04f6fd556d2"
	        },
	        {
	            "_id": "66539424fd8d4c9263e2658e",
	            "nom": "BAse relationnelle",
	            "image": "relationnelle.png",
	            "prof": "665a0565a327a04f6fd556d3"
	        },
	        {
	            "_id": "66539918fd8d4c9263e2658f",
	            "nom": "SQL 3",
	            "image": "sql3.webp",
	            "prof": "665a0565a327a04f6fd556d3"
	        },
	        {
	            "_id": "665a07b2a327a04f6fd556d7",
	            "nom": "Matière 1 de Professeur 1",
	            "image": "matiere1.webp"
	        },
	        {
	            "_id": "665a093fa327a04f6fd556d8",
	            "nom": "Matière 3 de Professeur 2",
	            "image": "matiere3.webp"
	        },
	        {
	            "_id": "665a096da327a04f6fd556d9",
	            "nom": "Matière 4 de Professeur 2",
	            "image": "matiere4.webp"
	        },
	        {
	            "_id": "665a09a1a327a04f6fd556da",
	            "nom": "Matière 1 de Professeur 3",
	            "image": "matiere1.webp"
	        },
	        {
	            "_id": "665a09d4a327a04f6fd556db",
	            "nom": "Matière 2 de Professeur 3",
	            "image": "bigdata.webp"
	        },
	        {
	            "_id": "665a09f9a327a04f6fd556dc",
	            "nom": "Matière 3 de Professeur 3",
	            "image": "matiere3.webp"
	        },
	        {
	            "_id": "665a0a4da327a04f6fd556de",
	            "nom": "Matière 4 de Professeur 3",
	            "image": "matiere4.webp"
	        }
	    ]
	}

 # *CLASSES*

 # GET /classes/ - liste des classes

 Reponses :
	
	 {
	    "statue": "ok",
	    "message": "Liste des classes recuperer avec success",
	    "data": [
	        {
	            "eleves": [
	                {
	                    "_id": "664b91ad072ae93db4ed0f6c",
	                    "nom": "Tsiory",
	                    "login": "tsiory",
	                    "password": "$2b$10$IvWQoxy3dZngqdiI7mBUaODO15fzfnozyFid9kp0n6ttLgP9MhZW6",
	                    "role": "eleve",
	                    "__v": 0
	                },
	                {
	                    "_id": "664b9260072ae93db4ed0f7f",
	                    "nom": "Tony",
	                    "login": "tony",
	                    "password": "$2b$10$K8JFMx5B7pNoPNBKIOw68u1QmBwgFjqlZE8kAxSjT8aiftJyF1zFC",
	                    "role": "eleve",
	                    "__v": 0
	                },
	                {
	                    "_id": "664b98df5e559c14f837673b",
	                    "nom": "Alicia",
	                    "login": "alicia",
	                    "password": "$2b$10$8podmMgN2PT6kW2bPokfE.IsSpdxZ9LGRsMz73FDFioUBRId9d3p6",
	                    "role": "eleve",
	                    "__v": 0
	                }
	            ],
	            "matieres": [
	                {
	                    "_id": "65f713f6de4184ff0d9f59a9",
	                    "nom": "Big Data NoSQL",
	                    "image": "bigdata.webp",
	                    "prof": {
	                        "_id": "664b91cb072ae93db4ed0f6f",
	                        "nom": "Gabriel Mopollo",
	                        "login": "gabmopollo",
	                        "password": "$2b$10$29ChFJx5qSQkcfGStiKh0.cFeykn3vv5p2Vi8sLiuIa9KJe.AFq.q",
	                        "role": "professeur",
	                        "__v": 0,
	                        "image": "mopollo.webp"
	                    }
	                },
	                {
	                    "_id": "665393f6fd8d4c9263e2658c",
	                    "nom": "Tunning",
	                    "image": "tuning.png",
	                    "prof": {
	                        "_id": "664b91cb072ae93db4ed0f6f",
	                        "nom": "Gabriel Mopollo",
	                        "login": "gabmopollo",
	                        "password": "$2b$10$29ChFJx5qSQkcfGStiKh0.cFeykn3vv5p2Vi8sLiuIa9KJe.AFq.q",
	                        "role": "professeur",
	                        "__v": 0,
	                        "image": "mopollo.webp"
	                    }
	                },
	                {
	                    "_id": "66539415fd8d4c9263e2658d",
	                    "nom": "Oracle",
	                    "image": "oracle.png",
	                    "prof": {
	                        "_id": "665a0489a327a04f6fd556d2",
	                        "nom": "Professeur 1",
	                        "login": "prof1",
	                        "password": "$2b$10$8podmMgN2PT6kW2bPokfE.IsSpdxZ9LGRsMz73FDFioUBRId9d3p6",
	                        "role": "professeur",
	                        "__v": 0,
	                        "image": "prof1.webp"
	                    }
	                },
	                {
	                    "_id": "66539424fd8d4c9263e2658e",
	                    "nom": "BAse relationnelle",
	                    "image": "relationnelle.png",
	                    "prof": {
	                        "_id": "665a0565a327a04f6fd556d3",
	                        "nom": "Professeur 3",
	                        "login": "prof3",
	                        "password": "$2b$10$8podmMgN2PT6kW2bPokfE.IsSpdxZ9LGRsMz73FDFioUBRId9d3p6",
	                        "role": "professeur",
	                        "__v": 0,
	                        "image": "prof3.png"
	                    }
	                },
	                {
	                    "_id": "66539918fd8d4c9263e2658f",
	                    "nom": "SQL 3",
	                    "image": "sql3.webp",
	                    "prof": {
	                        "_id": "665a0565a327a04f6fd556d3",
	                        "nom": "Professeur 3",
	                        "login": "prof3",
	                        "password": "$2b$10$8podmMgN2PT6kW2bPokfE.IsSpdxZ9LGRsMz73FDFioUBRId9d3p6",
	                        "role": "professeur",
	                        "__v": 0,
	                        "image": "prof3.png"
	                    }
	                }
	            ],
	            "_id": "65f71459de4184ff0d9f59ab",
	            "nom": "MBDS",
	            "niveau": "Master 1"
	        }
	    ]
	}

 
 
 




