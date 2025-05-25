# Blink tac toe

## Overview
This project is a React-based web application built using JavaScript. It features a game where players interact with emojis, adhering to specific rules and mechanics.

## Tech Stack
- **React**: For building the user interface.
- **JavaScript**: For implementing the game logic and interactivity.

## Emoji Categories
The game includes a variety of emoji categories, such as:
- Animals
- Vehicles

## Game Mechanics
### Vanishing Rule
The game implements a "vanishing" rule where each player can hold a maximum of 3 emojis at a time. If a player adds a new emoji beyond this limit, the oldest emoji is removed (FIFO - First In, First Out logic). This rule is enforced using a queue-like data structure in the game logic.

## How to Run
You clould Visit [Webapp](https://blink-tac-toe-rust.vercel.app/) or clone it to local machine.
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the development server with `npm start`.

Enjoy the game!
