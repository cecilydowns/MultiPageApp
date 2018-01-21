import React from 'react'
import { Text, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => (
    <View>
        <Text>Hello from the home screen!</Text>
        <Button onPress={() => navigation.navigate('First')} title="Click me!" />
    </View>
  )
  
export default HomeScreen