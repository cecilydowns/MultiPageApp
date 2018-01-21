import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Text } from 'react-native';
import HomeScreen from  './screens/HomeScreen';
import FirstContentScreen from  './screens/FirstContentScreen';


const App = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home'
    }
  },
  First: {
    screen: FirstContentScreen,
    navigationOptions: {
      headerTitle: 'First page'
    }
  }
})

export default App