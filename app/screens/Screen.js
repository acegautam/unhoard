import React from 'react'
import { Text, SafeAreaView, StyleSheet } from 'react-native'
import Constants from 'expo-constants'

const Screen = ({ children, style }) => (
  <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>
)

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight
  }
})

export default Screen
