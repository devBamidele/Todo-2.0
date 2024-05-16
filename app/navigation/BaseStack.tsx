import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BaseStackParamList } from '@/app/utils/types';
import Colors from '@/app/utils/colors';
import HomeDrawer from './DrawerNavigation';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../feature/auth/Login/LoginScreen';
import SignUpScreen from '../feature/auth/SignUp/SignUpScreen';
import WelcomeScreen from '../feature/welcome/WelcomeScreen';
import { useSelector } from 'react-redux';
import { isLoggedIn } from '../redux/user/slice';

const Stack = createNativeStackNavigator<BaseStackParamList>();

export default function BaseStack() {

  const loggedIn = useSelector(isLoggedIn);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={loggedIn ? 'HomeDrawer' : 'Login'} 
          
          screenOptions={{
            headerShown: false,
            contentStyle:{
              backgroundColor: Colors.white,   
            }
          }}
        >
          <Stack.Screen name='Welcome' component={WelcomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="HomeDrawer" component={HomeDrawer} />

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}