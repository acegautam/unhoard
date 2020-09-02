import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Styles = ({ params }) => (
  <View style={styles.container}>
    <View style={styles.block}></View>
  </View>
)

export default Styles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  block: {
    backgroundColor: 'dodgerblue',
    width: 100,
    height: 100
  }
})
