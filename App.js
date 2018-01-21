import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Text } from 'react-native';
import HomeScreen from  './screens/HomeScreen';

const App = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home'
    }
  }
})

export default App