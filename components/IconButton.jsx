import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const IconButton = () => {
  return (
    <Pressable>
        <Ionicons name="star" size={24} color="white" />
    </Pressable>
  )
}

export default IconButton

const styles = StyleSheet.create({})