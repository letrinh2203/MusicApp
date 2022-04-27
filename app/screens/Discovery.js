import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Discovery() {

  return (
    <View style={styles.container}>
      <Text>Discovery</Text>
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