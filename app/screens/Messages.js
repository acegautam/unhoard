import React from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import uuid from 'react-uuid'

import Colors from '../config/colors'
import Screen from '../screens/Screen'
import ListingOwner from '../components/ListingOwner'
import ListItemSeparator from '../components/common/ListItemSeparator'

const data = [
  {
    id: uuid(),
    title: 'Hats for sale',
    description: 'variety of caps for sale. Dig in!',
    image: require('../assets/gautam.jpg')
  },
  {
    id: uuid(),
    title: 'Succulents sale',
    description: 'range of succulents to shop from.',
    image: require('../assets/gautam.jpg')
  },
  {
    id: uuid(),
    title: 'Electronics galore',
    description: 'for the electronics nerd - cables, capacitors...',
    image: require('../assets/gautam.jpg')
  }
]

const Messages = () => (
  <Screen style={styles.msgScreen}>
    <FlatList
      data={data}
      keyExtractor={msg => msg.id.toString()}
      renderItem={({ item }) => (
        <ListingOwner
          name={item.title}
          description={item.description}
          image={item.image}
        />
      )}
      ItemSeparatorComponent={ListItemSeparator}
    />
  </Screen>
)

const styles = StyleSheet.create({
  msgScreen: {
    backgroundColor: '#f9f9f9'
  }
})

export default Messages
