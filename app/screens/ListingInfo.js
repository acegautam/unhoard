import React from 'react'
import { View } from 'react-native'

import Card from '../components/Card'
import ListingOwner from '../components/ListingOwner'

const ListingInfo = ({ params }) => (
  <View>
    <Card
      title='Succulents'
      subtitle='the rare string of pearls for $20'
      image={require('../assets/jacket.jpg')}
    />
    <ListingOwner
      name='Gautam Mankatti'
      description='9 items'
      image={require('../assets/gautam.jpg')}
    />
  </View>
)

export default ListingInfo
