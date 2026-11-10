import { Pressable, StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'

const CategoryGridTile = ({title, color}) => {
  return (
    <View style={[styles.gridItem]}>
      <Pressable style={({pressed}) => [styles.button, pressed && styles.buttonPressed]}>
        <View style={[styles.innerContainer, {backgroundColor:color}]}>
            <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default CategoryGridTile

const styles = StyleSheet.create({
    gridItem: {
        flex: 1, 
        margin: 16, 
        height: 150, 
        borderRadius: 8, 
        backgroundColor: 'white',
        elevation: 4, 
        shadowColor: 'black', 
        shadowOpacity: 0.25, 
        shadowOffset: {width:0, height:0}, 
        shadowRadius: 2, 
        overflow: Platform.OS === 'android' && 'hidden' 
    }, 
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        flex: 1, 
        padding: 16, 
         borderRadius: 8, 
        justifyContent: 'center', 
        alignItems: 'center'
    }, 
    title: {
        fontWeight: 'bold', 
        fontSize: 18
    }
})