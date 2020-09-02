import React from 'react'
import {
  SafeAreaView,
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Image,
  StatusBar
} from 'react-native'
import { Platform } from '@unimodules/core'
import Colors from '../config/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const ViewImage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.ctaIcons, styles.close]}>
        <MaterialCommunityIcons name='close' size={35} color={Colors.white} />
      </View>
      <View style={[styles.ctaIcons, styles.delete]}>
        <MaterialCommunityIcons
          name='trash-can-outline'
          size={35}
          color={Colors.white}
        />
      </View>
      <Image source={require('../assets/chair.jpg')} style={styles.image} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    // justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  ctaBox: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  ctaIcons: {
    position: 'absolute',
    top: 60
  },
  close: {
    left: 30
  },
  delete: {
    right: 30
  },
  image: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%'
  }
})

export default ViewImage
