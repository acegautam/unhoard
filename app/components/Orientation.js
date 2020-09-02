import React from 'react'
import {
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  Button,
  Alert
} from 'react-native'
import { useDeviceOrientation } from '@react-native-community/hooks'

const Orientation = () => {
  const { landscape } = useDeviceOrientation()
  console.log('landscape', landscape)

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: '#fff',
          width: '100%',
          height: landscape ? '100%' : '30%'
        }}
      >
        <Text>My Video Player</Text>
      </View>
      <Button
        title='Hit Me'
        onPress={() =>
          Alert.alert('Info', 'Enter name', [{ text: 'Yes' }, { text: 'No' }])
        }
      ></Button>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23b573',
    color: '#fff',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    // justifyContent: 'center'
  }
})

export default Orientation
