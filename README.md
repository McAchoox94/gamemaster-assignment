# Projet d'Attribution de Gamemasters

Ce projet est un exercice pratique pour attribuer des gamemasters à des salles d'évasion en fonction de leur formation. Chaque gamemaster est formé pour certaines salles spécifiques, et notre tâche est de s'assurer que chaque salle a un gamemaster formé qui lui est attribué.

## Structure du projet

- `assignment.js` : Contient la logique principale pour l'attribution des gamemasters aux salles.
- `assignment.test.js` : Contient les tests pour vérifier la bonne exécution de notre logique.
- `index.js` : Fichier principal pour exécuter le projet.
- `package.json` : Fichier de configuration npm avec les scripts et les dépendances.
- `README.md` : Ce fichier expliquant le projet.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé Node.js et npm sur votre machine. Vous pouvez les télécharger et les installer depuis [nodejs.org](https://nodejs.org/).

## Installation

1. Clonez le dépôt ou téléchargez les fichiers du projet.
2. Ouvrez un terminal dans le répertoire du projet et exécutez la commande suivante pour installer les dépendances :

```bash
npm install
```

## Tests

Ce projet utilise Jest pour les tests. Pour exécuter les tests, utilisez la commande suivante :

```bash
npm test
```

Les tests vérifieront que chaque salle a bien un gamemaster formé attribué et que le système gère les cas où aucune solution n'est possible.

## Execution

Pour lancer le projet et voir l'attribution des gamemasters aux salles, utilisez la commande suivante :

```bash
npm start
```

Cela exécutera le fichier `index.js`, qui appelle la fonction d'attribution et affiche le résultat ou une erreur s'il n'y a pas de solution possible.

## Auteur 

Ce projet a été réalisé par `Achraf Boujjou` pour démontrer l'utilisation de TDD (Test Driven Development) et les principes de Clean Code dans un mini-projet.


