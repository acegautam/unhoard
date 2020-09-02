import React from 'react'
import { View, StyleSheet, Text, SafeAreaView } from 'react-native'

import Sandbox from './app/screens/Sandbox'
import WelcomeScreen from './app/screens/Welcome'
import ViewImageScreen from './app/screens/ViewImage'
import ListingInfoScreen from './app/screens/ListingInfo'
import MessagesScreen from './app/screens/Messages'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Sandbox /> */}
      <MessagesScreen />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
