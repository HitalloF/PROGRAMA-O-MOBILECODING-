import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/index';
import DetailsScreen from '../screens/About/Details';
import LoginScreen from '../screens/login/index';
import SingUp from '../screens/SignUp/index'
import About from '../screens/About/index';
import Inicial from '../screens/Inicial/index'
import Equipe from '../screens/Equipe/index'
import Speed from '../screens/speed/index'
import MagnetometerScreen from '../screens/Magnetômetro/index'
const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen name="details" component={DetailsScreen} />
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="about" component={About} />
      <Stack.Screen name="signup" component={SingUp} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="inicial" component={Inicial} />
      <Stack.Screen name="equipe" component={Equipe} />
      <Stack.Screen name="speed" component={Speed} />
      <Stack.Screen name="magnetometro" component={MagnetometerScreen} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
