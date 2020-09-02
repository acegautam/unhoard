import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

import Colors from '../../config/colors'

const ListItemSeparator = ({ params }) => <View style={styles.separator} />

const styles = StyleSheet.create({
  separator: {
    alignSelf: 'center',
    width: '90%',
    height: 1,
    backgroundColor: Colors.grey2
  }
})

export default ListItemSeparator
