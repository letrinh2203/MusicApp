import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Personal() {
  return (
    <View style={styles.container}>
      <Text>Personal</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})