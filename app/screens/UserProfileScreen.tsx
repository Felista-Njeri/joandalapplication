import React from 'react';
import { View, Text,  } from 'react-native';
import { styles  } from '../styles/UserProfileStyles';
import { styles as ServicesStyles} from '../styles/ServicesStyles';
import { styles as ELearningStyles} from '../styles/ELearningStyles';

import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


export default function UserProfileScreen() {
  return (
    <View style={styles.container}>


          <View style={styles.servicesIntro}>
          <FontAwesome5 name="user-alt" size={24} color="black"/>
          <Text>User Profile</Text>
          </View>
          <View style={styles.servicesIntro}>
            <Ionicons name="notifications" size={24} color="black" />
            <Text>User Profile</Text>
          </View>
          <View style={styles.servicesIntro}>
          <MaterialIcons name="message" size={24} color="black" />
          <Text>Messages</Text>
          </View>
          <View style={styles.servicesIntro}>
          <FontAwesome5 name="servicestack" size={24} color="black" />
          <Text>Services</Text>
          </View>
          <View style={styles.servicesIntro}>
          <MaterialIcons name="help" size={24} color="black" />
          <Text>Help</Text>
          </View>

    </View>
  )
}