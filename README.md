# tic-tac-toe-grid-complexity

J'ai besoin que tu écrive un algorithme en python en partant d'une base de code existante. Dans un premier temp, je vais te fournir l'énoncé du jeux. Ensuite la base de code. Je veux que tu code sans me donner d'explications.
Voici l'énoncé :

 	Objectif
Nous ajoutons un nouveau degré de complexité : le jeu se joue maintenant sur une grille de tic-tac-toe où chaque case est un tic-tac-toe classique. L'objectif est d'aligner 3 marques sur la grille de tic-tac-toe principale en gagnant sur les grilles plus petites.
 	Règles
Lorsqu'un joueur joue sur une petite grille, il décide également de là où pourra jouer le prochain joueur : par exemple, si un joueur joue sur la case située en bas à gauche de l'une des petites grilles, alors le prochain joueur devra jouer sur la petite grille située en bas à gauche de la grille principale.

Si un joueur est envoyé sur une grille déjà gagnée, ou complète, alors le joueur est autorisé à jouer sur n'importe quelle case vide.

Le code source de ce jeu est disponible sur GitHub. Vous aussi, vous pouvez créer votre jeu à l'aide du CodinGame SDK !

 
Conditions de victoire
Vous avez gagné sur 3 grilles de tic-tac-toe alignées. Si aucun joueur n'arrive à aligner 3 marques, le joueur ayant gagné le plus de petites grilles gagne.
 	Entrées du jeu
Entrées pour un tour de jeu
Ligne 1: 2 entiers séparés par un espace opponentRow et opponentCol, les coordonnées jouées par l'adversaire au tour précédent (-1 -1 pour le tout premier tour).
Ligne 2: le nombre d'actions valides pour ce tour de jeu, validActionCount.
Les validActionCount lignes suivantes: 2 entiers séparés par un espace row et col, les coordonnées où vous pouvez jouer.
Sortie pour un tour de jeu
Ligne 1: 2 entiers séparés par un espace row et col.

Voici le code :

import sys
import math

# Auto-generated code below aims at helping you parse
# the standard input according to the problem statement.


# game loop
while True:
    opponent_row, opponent_col = [int(i) for i in input().split()]
    valid_action_count = int(input())
    for i in range(valid_action_count):
        row, col = [int(j) for j in input().split()]

    # Write an action using print
    # To debug: print("Debug messages...", file=sys.stderr, flush=True)

    print("0 0")
ChatGPT

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/tic-tac-toe-grid-complexity.git
cd tic-tac-toe-grid-complexity
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
