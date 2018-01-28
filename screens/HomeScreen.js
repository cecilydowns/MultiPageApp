import React from 'react'
import { Text, View, Button } from 'react-native';
import HomeButton from '../components/HomeButton'


const HomeScreen = ({ navigation }) => (
    <View>
        <Text>Hello from the home screen!</Text>
        <HomeButton onPress={() => navigation.navigate('First')} title="Click me!" />
    </View>
  )
  
export default HomeScreen