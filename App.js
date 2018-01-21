import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Text } from 'react-native';

const HomeScreen = () => (
  <Text>Hello from the home screen!</Text>
)

const App = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home'
    }
  }
})

export default App