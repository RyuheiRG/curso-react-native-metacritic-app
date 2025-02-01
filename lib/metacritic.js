import gamesData from "../API/games.json";

export function getLatestGames() {
  return new Promise((resolve) => {
    resolve(gamesData);
  });
}

export function getGameDetails(id) {
  return new Promise((resolve, reject) => {
    const game = gamesData.find((g) => g.id === id);
    if (game) {
      resolve(game);
    } else {
      reject(new Error("Juego no encontrado"));
    }
  });
}
