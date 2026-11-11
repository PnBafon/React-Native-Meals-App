import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { MEALS } from "../data/dummy-data";

const MealDetailScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;
  const meal = MEALS.find((meal) => meal.id === mealId);
  const {
    title,
    duration,
    complexity,
    affordability,
    imageUrl,
    steps,
    ingredients,
  } = meal;
  return (
    <View>
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
      </View>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.details}>
        <Text style={styles.detailItem}>{duration}</Text>
        <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
        <Text style={styles.detailItem}>{affordability}</Text>
      </View>

      <View>
        <Text>Ingredients</Text>
        {ingredients.map((ingredient) => (
          <Text key={ingredient}>{ingredient}</Text>
        ))}
      </View>

      <View>
        <Text>Steps</Text>
        {steps.map((step) => (
          <Text key={step}>{step}</Text>
        ))}
      </View>
    </View>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  imageContainer: {
    height: '35%', 
    backgroundColor: 'red'
  },
  image: {
    width: "100%",
    height: '100%',
    objectFit: "cover",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
    margin: 8,
    textAlign: "center",
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
