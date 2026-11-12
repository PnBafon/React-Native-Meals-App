import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { FavortiesContext } from "../store/context/favorites-context";
import MealsList from "../components/MealsList";
import { MEALS } from "../data/dummy-data";
const FavoriteScreen = () => {
  const favoriteCtx = useContext(FavortiesContext);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteCtx.ids.includes(meal.id),
  );

  console.log(favoriteMeals, favoriteCtx.ids);

  if (favoriteMeals.length <= 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You have no Favorites</Text>
      </View>
    );
  }
  return <MealsList items={favoriteMeals} />;
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 24,
  },
});
