import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MEALS } from '../data/dummy-data'
import MealItem from '../components/MealItem'

const MealsOverviewScreen = ({route}) => {
    const catId = route.params.categoryId
    const displayedMeals = MEALS.filter((mealItem)=> {
        return mealItem.categoryIds.indexOf(catId) >= 0

    })

    function renderMealItem(itemData){
        return <MealItem title={itemData.item.title} />
    }
  return (
    <View>
      <Text>Meals Overview Screen - {catId} </Text>
      <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={renderMealItem} />
    </View>
  )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({})