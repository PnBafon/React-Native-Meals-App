import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { MEALS } from "../data/dummy-data";

const MealDetailScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;
  const meal = MEALS.find((meal) => meal.id === mealId);
  const { title, duration, complexity, affordability, imageUrl } = meal;
  return (
    <View style={{ flex: 1 }}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text>{title}</Text>

      <View style={styles.details}>
        <Text style={styles.detailItem}>{duration}</Text>
        <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
        <Text style={styles.detailItem}>{affordability}</Text>
      </View>

      <View>
        <Text>Ingredients</Text>
      </View>

      <View>
        <Text>Steps</Text>
      </View>
    </View>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 400,
    objectFit: "contain",
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
  },
  detailItem: {
    marginHorizontal: 4,
  },
});
