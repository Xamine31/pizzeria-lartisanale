# Pizzeria L’Artisanale — site web

Site vitrine responsive (PC, tablette et mobile), prêt pour **GitHub Pages**. Aucun serveur, compte ou dépendance npm n'est nécessaire.

## Publier sur GitHub Pages

1. Créer un dépôt GitHub (par exemple `pizzeria-lartisanale`).
2. Ajouter **tous les fichiers** de ce dossier à la racine du dépôt, y compris le dossier `assets`.
3. Aller dans **Settings → Pages**.
4. Dans **Build and deployment**, sélectionner **Deploy from a branch**, branche **main**, dossier **/(root)**, puis **Save**.
5. Le site sera disponible à `https://VOTRE-PSEUDO.github.io/pizzeria-lartisanale/`.

Pour prévisualiser, ouvrir `index.html` dans un navigateur.

## Fichiers

- `index.html` : structure et textes
- `styles.css` : couleurs, animations, design et responsive
- `script.js` : menu de pizzas, filtres et interactions
- `assets/menu-original.jpg` : photo du menu fournie
- `assets/pizza-artisanale.svg` : illustration de pizza originale (fonctionne hors ligne)
- `assets/favicon.svg` : icône de l'onglet

## Informations à vérifier avant publication

- Adresse : 33 boulevard de Saint-Loup, 13010 Marseille.
- Horaires relevés sur la fiche Top Pizzeria : mardi à dimanche 18h–22h, lundi fermé ; **à confirmer**.
- Prix et ingrédients repris au mieux de la photo du menu. Vérifier chaque ligne, certaines mentions sont très petites.
- L'offre « 3 pizzas achetées = 1 soda 1,5 L offert » figure sur la photo.
- Aucun numéro de téléphone n'a été inventé et aucun faux système de commande n'a été ajouté.

Sources :
- https://maps.app.goo.gl/G8UmLvWUZPcLYAsS8
- https://top-pizzeria.fr/annuaire/f/pizzeria-l-artisanale

Pour modifier la carte, éditer le tableau `pizzas` dans `script.js`.
