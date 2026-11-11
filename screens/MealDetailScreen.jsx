import { StyleSheet, Text, View, Image, ScrollView, Button } from "react-native";
import {useEffect, useLayoutEffect} from "react";
import { MEALS } from "../data/dummy-data";
import List from "../components/List";
import IconButton from "../components/IconButton";

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

  useLayoutEffect(()=>{
    navigation.setOptions ({
        headerRight: ()=>{return <IconButton />}
    })
  }, [])
  return (
    <ScrollView style={{ marginBottom: 24 }}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
      </View>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.details}>
        <Text style={styles.detailItem}>{duration}</Text>
        <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
        <Text style={styles.detailItem}>{affordability}</Text>
      </View>

      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>Ingredients</Text>
      </View>
      <List data={ingredients} />

      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>Steps</Text>
      </View>
      <List data={steps} />
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  imageContainer: {
    height: "35%",
    backgroundColor: "red",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
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
    color: "white",
  },
  subTitleContainer: {
    borderBottomWidth: 2,
    borderColor: "#f7e99f",
    marginHorizontal: 24,
    marginVertical: 8,
    padding: 6,
  },
  subTitle: {
    color: "#f7e99f",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
