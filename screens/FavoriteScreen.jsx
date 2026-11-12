import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'

const FavoriteScreen = () => {
  const favoriteCtx = useContext()
  return (
    <View>
      <Text>Favorite Screen</Text>
    </View>
  )
}

export default FavoriteScreen

const styles = StyleSheet.create({})