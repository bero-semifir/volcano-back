# Volcano API

API REST en [Express](https://expressjs.com/) avec [Mongoose](https://mongoosejs.com/).

Cette API permet d'obtenir des informations sur des volcans, comme leur status, leur position ou la date de leur dernière éruption.

## Installer les dépendances

C'est un projet NodeJS la liste des dépendances est visible dans le [package.json](package.json).

Avec NPM:

`npm install`

## Lancer le projet

Le [package.json](package.json) dispose d'un script `start` qui transpile et lancer le code transpilé. Il permet de lancer le serveur en mode production.

Un script `dev` permet de lancer le projet avec `ts-node-dev`.

Lancer le projet en mode **prod**: `npm start`

Lancer le projet en mode **dev**: `npm run dev`

## Les données

Les modèles des volcans est défini dans [./src/schemas/Volcano.schema.ts](./src/schemas/Volcano.schema.ts).

Le jeu de données est disponible sur gist [https://gist.github.com/bero-semifir/b789af7b65ca1336f7246871065c77bc](https://gist.github.com/bero-semifir/b789af7b65ca1336f7246871065c77bc). Pensez à les ajouter à votre base de données MongoDB.

## Les variables d'environnement

`API_PORT` port de l'API Express

`MONGO_URI` URI du serveur MongoDB

Il est possible de passer par un fichier `.env`
