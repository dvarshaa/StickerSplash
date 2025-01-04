import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const about = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>about</Text>
    </View>
  )
}

export default about

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#25292e'
    },
    text: {
        color: '#fff'
    }
});