import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebaseConfig';
import { getAuth } from 'firebase/auth';

import CartScreen from './app/screens/CartScreen';
import ServicesScreen from './app/screens/ServicesScreen';
import LoginScreen from './app/screens/LoginScreen';
import RegistrationScreen from './app/screens/RegistrationScreen';
import ChatScreen from './app/screens/ChatScreen';
import ELearning from './app/screens/ELearning';
import IndexScreen from './app/screens/IndexScreen';
import UserProfileScreen from './app/screens/UserProfileScreen';
import BottomTabNavigator from './app/screens/BottomTabNavigator';


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Use Firebase services as needed
const auth = getAuth(app);

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} options= {{headerShown: false}} />
      <Stack.Screen name="IndexScreen" component={IndexScreen} options= {{headerShown: false}} />
      <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} options= {{headerShown: false}} />
      <Stack.Screen name="ServicesScreen" component={ServicesScreen} options= {{headerShown: false}}/>
      <Stack.Screen name="LoginScreen" component={LoginScreen} options= {{headerShown: false}}/>
      <Stack.Screen name="ChatScreen" component={ChatScreen} options= {{headerShown: false}}/>
      <Stack.Screen name="ELearning" component={ELearning} options= {{headerShown: false}}/>
      <Stack.Screen name="CartScreen" component={CartScreen} options= {{headerShown: false}}/>
      <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} options= {{headerShown: false}}/>
    </Stack.Navigator>
    </NavigationContainer>


  );
}

