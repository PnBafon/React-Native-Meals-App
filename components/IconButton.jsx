import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { Ionicons } from '@expo/vector-icons'
import  { FavortiesContext } from '../store/context/favorites-context'

const IconButton = () => {
  const favoriteMealContext = useContext(FavortiesContext)
  function headerButtonPressHandler (){

  }
  return (
    <Pressable>
        <Ionicons name="star" size={24} color="white" />
    </Pressable>
  )
}

export default IconButton

const styles = StyleSheet.create({})