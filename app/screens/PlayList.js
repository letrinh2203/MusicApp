import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


export default function PlayList() {
  return (
    <View style={styles.container}>
      <Text>PlayList</Text>
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