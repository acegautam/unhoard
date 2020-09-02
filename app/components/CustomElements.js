import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Platform } from '@unimodules/core'

import Colors from '../config/colors'

const AppHeader = ({ children }) => (
  <Text style={styles.header}>{children}</Text>
)

const AppText = ({ children, style }) => (
  <Text style={[styles.text, style]}>{children}</Text>
)
const TitleText = ({ children, style }) => (
  <Text style={[styles.title, style]}>{children}</Text>
)
const SubTitleText = ({ children, style }) => (
  <Text style={[styles.subtitle, style]}>{children}</Text>
)

const AppButton = ({ text, color = 'primary', onPress }) => (
  <TouchableOpacity
    style={[styles.button, { backgroundColor: Colors[color] }]}
    onPress={onPress}
  >
    <Text style={styles.buttonText}>{text}</Text>
  </TouchableOpacity>
)

const fontFamily = Platform.OS === 'android' ? 'Roboto' : 'Avenir'
const styles = StyleSheet.create({
  button: {
    width: '100%',
    backgroundColor: Colors.primary,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginVertical: 10
  },
  buttonText: {
    fontSize: 18,
    fontFamily,
    fontWeight: '700',
    textTransform: 'uppercase',
    color: Colors.white,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    fontSize: 22,
    fontWeight: '700',
    fontFamily,
    marginTop: 10,
    padding: 20
  },
  text: {
    fontSize: 15,
    fontFamily
  },
  title: {
    fontSize: 15,
    fontFamily,
    fontWeight: '700',
    paddingBottom: 10
  },
  subtitle: {
    fontSize: 13,
    fontWeight: '700',
    fontFamily,
    paddingBottom: 10
  }
})

export { AppButton, AppHeader, AppText, SubTitleText, TitleText }
