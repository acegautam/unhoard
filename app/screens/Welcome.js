import React from 'react'
import { View, StyleSheet, ImageBackground, Text, Image } from 'react-native'

import { AppButton, TitleText } from '../components/CustomElements'
import Card from '../components/Card'
import { Platform } from '@unimodules/core'

const WelcomeScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      blurRadius={Platform.OS === 'android' ? 2 : 5}
      style={styles.bgImage}
    >
      <View style={styles.logoBox}>
        <Image
          source={require('../assets/logo-red.png')}
          style={styles.logoImage}
        />
        <TitleText>Unhoard your home!</TitleText>
      </View>
      <View style={styles.ctaBox}>
        <AppButton text='Login' onPress={e => handlePress(e, 'login')} />
        <AppButton
          color='secondary'
          text='Register'
          onPress={e => handlePress(e, 'register')}
        />
      </View>
    </ImageBackground>
  )
}

const handlePress = (e, action) => {
  console.log(action, 'called')
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  ctaBox: {
    width: '100%',
    padding: 20
  },
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  logoBox: {
    marginTop: 100,
    alignItems: 'center',
    position: 'absolute',
    top: 50
  },
  logoImage: {
    width: 100,
    height: 100
  }
})

export default WelcomeScreen
