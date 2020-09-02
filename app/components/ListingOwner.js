import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

import { AppText } from '../components/CustomElements'
import Colors from '../config/colors'

const ListingOwner = ({ name, description, image }) => (
  <View style={styles.listingBox}>
    <Image style={styles.image} source={image} />
    <View>
      <AppText style={styles.name}>{name}</AppText>
      <AppText style={styles.count}>{description}</AppText>
    </View>
  </View>
)

const styles = StyleSheet.create({
  listingBox: {
    flex: 1,
    flexDirection: 'row',
    padding: 15,
    marginLeft: 20,
    marginTop: 10
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10
  },
  name: {
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 3
  },
  count: {
    fontSize: 14,
    color: Colors.grey
  }
})

export default ListingOwner
