import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import MealsList from "../components/MealsList";

const MealsOverviewScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId,
    )?.title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

 

  function renderMealItem(itemData) {
    const { title, imageUrl, affordability, complexity, duration, id } =
      itemData.item;

    const mealItemProps = {
      title,
      imageUrl,
      affordability,
      complexity,
      duration,
      id
    };
    return <MealItem {...mealItemProps} onPress={navigationHandler} />;
  }
  return (
    <MealsList items={displayedMeals}/>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({});
