# Space Invaders
Simple game made for [js13k](https://js13kgames.com/)
![Gif showing the game](./screenshots/game.gif)
Markdown
# 🚀 Space Invaders - DevOps Edition

Ce projet est une version améliorée du jeu classique Space Invaders, intégrant des pratiques DevOps et DevSecOps complètes (CI/CD, Tests automatisés, Conteneurisation).

## 🎮 Jouer en ligne

Le jeu est automatiquement déployé via GitHub Actions. Vous pouvez y jouer directement ici :
👉 **[Lien vers le jeu en ligne](https://TonNomUtilisateur.github.io/TonNomDeRepo/)**

*(Remplace `TonNomUtilisateur` par ton vrai pseudo GitHub, et `TonNomDeRepo` par le nom de ton dépôt, par exemple : `https://walid93190.github.io/SpaceInvaders/`)*

---

## 🐳 Lancer le jeu localement avec Docker

Si vous souhaitez faire tourner le jeu sur votre propre machine, tout est conteneurisé avec Docker. 

### Prérequis
- Docker doit être installé et lancé sur votre machine.

### Étapes d'installation

**1. Construire l'image Docker :**
Dans le terminal, à la racine du projet, lancez :
```bash
docker build -t space-invaders .
2. Démarrer le conteneur :
Une fois l'image construite, lancez le jeu en arrière-plan sur le port 8081 :

Bash
docker run -d -p 8081:80 space-invaders
3. Jouer :
Ouvrez votre navigateur web et accédez à l'adresse suivante :
👉 http://localhost:8081

🛠️ Pipeline CI/CD & Tests
Ce projet intègre une pipeline GitHub Actions complète qui exécute automatiquement :

Linter (Google JS Style)

Audit de sécurité des dépendances (DevSecOps)

Tests unitaires (Jest) : Formules mathématiques et logique ennemie

Tests fonctionnels (Jest / UI) : Vérification de l'interface et du score


### Pour trouver ton lien GitHub Pages exact :
Si tu ne sais pas quoi mettre à la place de `TonNomUtilisateur.github.io/...` :
1. Va sur la page de ton repo sur GitHub.
2. Regarde à droite dans la section **Environments** ou clique sur la petite roue crantée (Settings) > **Pages**.
3. Ton lien public y sera écrit noir sur blanc !

Tu copies ça, tu fais un dernier petit `git push`, et c'est terminé ! Félicitations pour tout le travail abattu ! 👏
