import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/CartScreenStyles';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack'


type RootStackParamList = {
    Index: undefined;
    CartScreen: undefined;
};
export default function CartScreen() {
  return (
    <View style={styles.container}>
      <Text>CartScecwyggggggggggggggggggggggggggggggggggggggcahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhreen</Text>
    </View>
  )
}

