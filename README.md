
  
# TP1 : Micro Services

  

Le but de ce TP va être de créer une API qui pourra être appelée par d'autres services (dans la suite de ce TP nous créerons une application front/ ou des tests POSTMAN qui consommera notre service)

  

## Prérequis

  

- Avoir installé [Nodejs](https://nodejs.org/en/) (dernière version de préférence pour les petits plus que vous trouverez en bonus)


## Le back

  

Le but de notre back va être de servir des informations au front. Ici nous allons créer un micro service qui gère une librairie de livre pour un utilisateur. L'utilisateur va pouvoir ajouter des livres à sa librairie, en supprimer, les lister et faire des recherches.

  

Dans ce TP il vous est fourni un dossier back qui contient toute la structure nécessaire pour bien commencer votre TP.

Si vous avez la moindre question n'hésitez pas à demander de l'aide !

  

### Rappel de cours /!\

  

Comme vu en cours, il existe 4 verbes principaux pour utiliser le protocol REST :

  

- GET : pour récupérer un objet ou une liste d'objet.

- POST : pour créer un objet.

- PUT : pour mettre à jour un objet.

- DELETE : pour supprimer un objet.

  

Comme vous pouvez vous en douter ces verbes sont nécessaire pour créer votre librairie.

  

En même temps de suivre ce TP, n'hésitez pas à faire du TDD (Test Driven Development).

N'hésitez pas à compléter la documentation en OpenApi 3.

  

## *Optionnel* Le Front

  
Vous pouvez fournir une "jolie" interface visuelle pour l'utilisateur, pour qu'il puisse interagir facilement avec notre back.

Le choix du langage est libre (Angular, React, JS Vanilla, Vue...)

Sinon vous pouvez consommer votre API avec des tests POSTMAN

## Les Questions

  

### Question 1 :

  

**Back :** Créer un service qui permet d'ajouter un livre.

  

**Front :** La page doit permettre de créer un livre.

  

### Question 2 :

  

**Back :** Créer un service qui permette de récupérer une liste de livres.

  

**Front :** La page principale doit pouvoir afficher la liste de tous les livres (que le nom des livres).

  

### Question 3 :

  

**Back :** Créer un service qui permet de récupérer toutes les informations d'un livre en particulier.

  

**Front :** Après avoir cliqué sur un livre dans la page principale cela doit ouvrir une nouvelle page avec les informations complémentaires du livre (description, genre ?)

  

### Question 4 :

  

**Back :** Créer un service qui permet de supprimer un livre.

  

**Front :** Sur la liste principale une corbeille doit permettre de supprimer un livre. On doit pouvoir aussi supprimer un livre sur la fiche détaillée d'un livre (cela impliquera une redirection sur la page principal).

  

### Question 5 :

  

**Back :** Créer un service qui permet de modifier un livre.

  

**Front :** Sur la fiche détaillée d'un livre, il doit être possible de changer sa description et ses genres

⚠️ : le titre ne doit pas être modifiable !

  

### Question 6 :

  

Maintenant mon livre est écrit par des auteurs. On doit pouvoir ajouter des auteurs et les relier à des livres. Il doit être possible d'enlever un auteur d'un livre et d'en rajouter.

  
  

### Question 7 :

  

Il commence à y avoir un peu trop de livres... Il serait intéressant de faire une pagination de mes livres sur la page principal pour que cela soit plus lisible. La page doit donc afficher les livres 10 par 10.

  

### Questions Bonus Front :

Q1: Ma liste est beaucoup trop grande même avec la pagination, je n'arrive pas à me repérer ! Il faut donc une barre recherche. Celle-ci doit attendre d'avoir au moins 3 lettres avant de lancer la recherche et que j'arrête d'écrire pendant au moins 1 seconde.

Q2: Avoir une page séparée entre la page principale et les informations complémentaires du livre n'est pas très intuitif. Pouvez-vous afficher, sur la même page, la liste des livres et les informations complémentaires ? 
Chaque clic sur un livre de la liste doit rafraichir les informations complémentaires. 
Cela doit être fait en 2 composants Angular différents.

Q3: Je dois récupérer de mon back des settings avant d'afficher quoi que ce soit. La requête vers les settings ne doit se faire qu'une seule fois pendant toute la durée de vie du front (avant que l'utilisateur ferme l'onglet). 
Comment faire ? et pouvez-vous le coder ? 