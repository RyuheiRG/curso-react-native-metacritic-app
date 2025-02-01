import { ActivityIndicator, FlatList } from "react-native";
import { useState, useEffect } from "react";
import { getLatestGames } from "../lib/metacritic";
import { AnimatedGameCard } from "./GameCard";
import { Screen } from "./Screen";

export function Main() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games || []);
    });
  }, []);

  return (
    <Screen className="bg-black">
      {games.length === 0 ? (
        <ActivityIndicator color={"red"} size={"large"} />
      ) : (
        <FlatList
          data={games}
          keyExtractor={(game) => game.id}
          renderItem={({ item, index }) => (
            <AnimatedGameCard game={item} index={index} />
          )}
        />
      )}
    </Screen>
  );
}
