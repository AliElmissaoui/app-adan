### Formation
Le projet app-adhan est conçu pour fournir aux utilisateurs des horaires de prière précis en fonction de leur géolocalisation. L'application utilise l'API Aladhan pour récupérer les horaires de prière et propose des fonctionnalités telles qu'un sélecteur de dates, une sélection automatique de la prochaine prière, et des formats de date localisés (par exemple, Hijri, Français).

### Installation
Clonez le dépôt :

### bash
Copy code

git clone https://github.com/AliElmissaoui/app-adhan/tree/main


cd app-adhan

### Installez les dépendances :

npm install
### Lancez l'application :


npm start
L'application fonctionnera en mode développement.
Ouvrez http://localhost:3000 pour la voir dans votre navigateur.

### Fonctionnalités
Affichage des Horaires de Prière : Affiche les horaires de prière en fonction de la géolocalisation de l'utilisateur.
Sélection de Date : Naviguez entre les horaires de prière à l’aide d’un sélecteur de dates.
Localisation : Prise en charge des formats de date en arabe et en français.
Mise en Cache des Données : Stocke les données de l'API dans localStorage pour optimiser les performances et les met à jour toutes les 24 heures.
Scripts Disponibles
Dans le répertoire du projet, vous pouvez exécuter :

npm start
Lance l'application en mode développement.
Ouvrez http://localhost:3000 pour la voir dans votre navigateur.

