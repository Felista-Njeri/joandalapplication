// BottomTabNavigator.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


import IndexScreen from './IndexScreen';
import ServicesScreen from './ServicesScreen';
import ChatScreen from './ChatScreen';
import ELearning from './ELearning';
import UserProfileScreen from './UserProfileScreen';


const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: StyleSheet.create({
    container: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    backgroundColor: "#ffff"
  },
}).container,
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions} >
      <Tab.Screen
        name="Home"
        component={IndexScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return(
              <View style={{alignItems: "center", justifyContent: "center"}}>
              <Entypo name="home" size={24} color={focused ? "#16247d" : "#111"} />
              <Text style={{fontSize: 12, color: "#16247d"}}>Home</Text>
              </View>
            )
            },
        }}
      />
      <Tab.Screen
        name="Services"
        component={ServicesScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return(
              <View style={{alignItems: "center", justifyContent: "center"}}>
              <FontAwesome5 name="servicestack" size={24} color={focused ? "#16247d" : "#111"} />
              <Text style={{fontSize: 12, color: "#16247d"}}>Services</Text>
              </View>
            )
            },
        }}
      />
      <Tab.Screen
        name="Messages"
        component={ChatScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return(
              <View style={{alignItems: "center", justifyContent: "center"}}>
              <MaterialIcons name="message" size={24} color={focused ? "#16247d" : "#111"} />
              <Text style={{fontSize: 12, color: "#16247d"}}>Messages</Text>
              </View>
            )
            },
        }}
      />
      <Tab.Screen
        name="ELearning"
        component={ELearning}
        options={{
          tabBarIcon: ({ focused }) => {
            return(
              <View style={{alignItems: "center", justifyContent: "center"}}>
              <AntDesign name="book" size={24} color={focused ? "#16247d" : "#111"} />
              <Text style={{fontSize: 12, color: "#16247d"}}>E-Learning</Text>
              </View>
            )
            },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={UserProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return(
              <View style={{alignItems: "center", justifyContent: "center"}}>
              <FontAwesome5 name="user-alt" size={24} color={focused ? "#16247d" : "#111"} />
              <Text style={{fontSize: 12, color: "#16247d"}}>Profile</Text>
              </View>
            )  
            },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
