import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MEALS } from '../data/dummy-data'

const MealsOverviewScreen = ({route}) => {
    const catId = route.params.categoryId
  return (
    <View>
      <Text>Meals Overview Screen - {catId} </Text>
    </View>
  )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({})