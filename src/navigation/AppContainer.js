import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginComponent from '../component/loginScreeen/LoginComponent';
import HomeScreen from '../component/homeScreen/HomeComponent';
import AuthComponent from '../component/auth/AuthComponent';

const Stack = createStackNavigator();

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth" headerMode="none">
        <Stack.Screen name="Auth" component={AuthComponent} />
        <Stack.Screen name="Login" component={LoginComponent} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
