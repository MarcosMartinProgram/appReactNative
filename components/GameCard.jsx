import { View, StyleSheet, Text, Image } from "react-native";
import { useRef, useEffect } from "react";
import { Animated } from "react-native-web";
import { Score } from "./Score";

export function GameCard({ game }) {
  return (
    <View
      className="flex-row bg-slate-500/10 p-4 rounded-xl gap-4 mb-10"
      key={game.slug}
    >
      <Image source={{ uri: game.image }} style={styles.image} />
      <View>
        <Text className="mb-1" style={styles.title}>
          {game.title}
        </Text>
        <Score score={game.score} maxScore={100} />
        <Text style={styles.description}>
          {game.description.slice(0, 100)}...
        </Text>
      </View>
    </View>
  );
}

export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      delay: index * 800,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 42,
    alignItems: "center",
  },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fff",
  },
  description: {
    fontSize: 16,
    color: "#eee",
    textAlign: "justify",
    padding: 10,
  },
  score: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    marginTop: 10,
  },
});
export default GameCard;
