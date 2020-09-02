import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import Colors from '../config/colors'
import { AppText, AppHeader } from '../components/CustomElements'
import Card from '../components/Card'

const Sandbox = ({ params }) => (
  //   <View style={styles.container}>
  //     <AntDesign name='export' size={80} color={Colors.green} />
  //     <AppHeader>UnHoard!</AppHeader>
  //     <AppText>Stuff out, Money In.</AppText>
  //   </View>
  <View style={styles.container}>
    <Card
      title='Succulents'
      subtitle='the rare string of pearls for $20'
      image={require('../assets/jacket.jpg')}
    />
  </View>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f4f4',
    padding: 20,
    paddingTop: 100
    // flex: 1
    // justifyContent: 'center',
    // alignItems: 'center'
  }
})
export default Sandbox
