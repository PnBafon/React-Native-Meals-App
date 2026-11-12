import { StyleSheet, View, FlatList } from "react-native";
import React from "react";
import MealItem from "./MealItem";
import { useNavigation } from "@react-navigation/native";

const MealsList = ({ items }) => {
  const navigation = useNavigation();

  function navigationHandler(mealId) {
    navigation.navigate("MealDetail", { mealId });
  }
  
  function renderMealItem(itemData) {
    const { title, imageUrl, affordability, complexity, duration, id } =
      itemData.item;

    const mealItemProps = {
      title,
      imageUrl,
      affordability,
      complexity,
      duration,
      id,
    };
    return <MealItem {...mealItemProps} onPress={navigationHandler} />;
  }
  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({});
