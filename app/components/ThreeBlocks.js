import React from 'react'
import { View } from 'react-native'

const ThreeBlocks = () => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <View
        style={{
          backgroundColor: '#23b573',
          flexBasis: 100,
          height: 100
        }}
      />
      <View
        style={{
          backgroundColor: 'gold',
          width: 100,
          height: 100,
          top: 20,
          left: 20,
          position: 'relative'
        }}
      />
      <View
        style={{
          backgroundColor: 'tomato',
          width: 100,
          height: 100
        }}
      />
    </View>
  )
}

export default ThreeBlocks
