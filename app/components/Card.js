import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

import { AppText, SubTitleText, TitleText } from '../components/CustomElements'
import Colors from '../config/colors'

const Card = ({ title, subtitle, image }) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={image} style={styles.image} />
      <View style={styles.meta}>
        <TitleText>{title}</TitleText>
        <SubTitleText style={styles.subtitle}>{subtitle}</SubTitleText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Colors.white,
    borderRadius: 15,
    // marginBottom: 20,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: 200
  },
  meta: {
    padding: 15
  },
  subtitle: {
    color: Colors.secondary
  }
})

export default Card
