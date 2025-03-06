import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
export default function App() {
  return (
    <View style = {style.viewContainer}>
      <Text style = {style.text}>Hello World!</Text>
    </View>
  )
}

const style = StyleSheet.create({
  viewContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  }
})