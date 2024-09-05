import { View, TouchableOpacity, Linking, Text } from 'react-native'
import React from 'react'
import { styles as ELearningStyles} from '../styles/ELearningStyles';
import { styles as ServicesStyles} from '../styles/ServicesStyles';


export default function ELearning() {
  const handlePress = async () => {
    const url = 'https://learning.joandalknowledgexperts.com/'; // Replace with your desired external URL

    // Open the URL using the Linking module
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      console.error("Don't know how to open URI: " + url);
    }
  };
  return (
    <View style={ELearningStyles.container}>
          <View style={ServicesStyles.servicesIntro}>
            <Text style={ServicesStyles.servicesIntroText1}>E-LEARNING</Text>
            <Text style={ServicesStyles.servicesIntroText2}>JO&AL- Knowledge Experts provides courses to help you upskill in your professional career. These courses include Academic and Article Writing Training, Digital Marketing Training and more.</Text>
            <TouchableOpacity style={ELearningStyles.handlePress}  onPress={handlePress}>
               <Text style={ELearningStyles.handlePressText} >Click Here to Open E-Learning</Text>
            </TouchableOpacity>
          </View>

    </View>
  )
}