import { useEffect, useRef } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Animated,
  Platform,
  Pressable,
} from "react-native";
import { Score } from "./Score";
import { Link } from "expo-router";
import { styled } from "nativewind";

const StyledPressable = styled(Pressable);

export const GameCard = ({ game }) => {
  return (
    <Link href={`/${game.id}`} asChild>
      <StyledPressable className="active:opacity-70 border border-black active:border-white/50 mb-2  bg-slate-500/10 p-4 rounded-xl">
        <View key={game.id} className="flex-row gap-4">
          <Image source={{ uri: game.thumbnail }} style={styles.image} />
          <View className="flex-shrink">
            <Text className="mb-1" style={styles.title}>
              {game.title}
            </Text>
            <Score score={game.metacritic_score} maxScore={100} />
            <Text className="flex-shrink" style={styles.description}>
              {game.short_description}
            </Text>
          </View>
        </View>
      </StyledPressable>
    </Link>
  );
};

export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      delay: index * 250,
      useNativeDriver: Platform.OS !== "web",
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  fontColor: {
    color: "#fff",
  },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  title: {
    color: "green",
    fontSize: 24,
  },
  description: {
    color: "white",
    fontSize: 18,
  },
  platform: {
    color: "grey",
  },
  releasedate: {
    color: "orange",
  },
  metacriticScore: {
    color: "yellow",
    fontSize: 15,
  },
});
