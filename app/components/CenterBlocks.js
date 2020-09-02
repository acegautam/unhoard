import React from 'react'
import { View } from 'react-native'

const CenterBlocks = () => {
  return (
    <View
      style={{
        backgroundColor: '#fff',

        // grows and takes all of the available "vertical" space
        flex: 1,

        // sets the alignment axis (defauly - column since mobile is usually in portrait mode)
        flexDirection: 'row',

        // primary axis alignment (default - flex-start)
        justifyContent: 'center',

        // secondary axis alignment (default - stretch)
        // this aligns items "per line" (NOT AS A WHOLE GROUP - if wrapped down)
        alignItems: 'center',

        // wrapping (default - no wrap)
        flexWrap: 'wrap',

        // secondary axis (GROUP) alignment
        // this aligns all items as a group
        alignContent: 'center'
      }}
    >
      <View
        style={{
          backgroundColor: '#23b573',

          // sets width / height based on axis orientation
          // width for horizontal (row), height for vertical (column)
          flexBasis: 200,
          // width: 200,

          height: 100
        }}
      />
      <View
        style={{
          backgroundColor: 'gold',
          width: 100,
          height: 200
        }}
      />
      <View
        style={{
          backgroundColor: 'tomato',
          width: 100,
          height: 100
        }}
      />
      <View
        style={{
          backgroundColor: 'silver',
          width: 100,
          height: 100
        }}
      />
      <View
        style={{
          backgroundColor: 'greenyellow',
          width: 100,
          height: 50
        }}
      />
    </View>
  )
}

export default CenterBlocks
