import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { Ionicons } from '@expo/vector-icons'
import  { FavortiesContext } from '../store/context/favorites-context'

const IconButton = ({icon, onPress}) => {
  const favoriteMealContext = useContext(FavortiesContext)

  return (
    <Pressable onPress={onPress}>
        <Ionicons name={icon} size={24} color="white" />
    </Pressable>
  )
}

export default IconButton

const styles = StyleSheet.create({})