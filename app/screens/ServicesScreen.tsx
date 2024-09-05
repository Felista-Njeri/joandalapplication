import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/ServicesStyles';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, SpaceGrotesk_300Light, SpaceGrotesk_400Regular, SpaceGrotesk_500Medium, SpaceGrotesk_600SemiBold, SpaceGrotesk_700Bold } from '@expo-google-fonts/space-grotesk';
 
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import CartScreen from './CartScreen';

type RootStackParamList = {
      Index: undefined;
      CartScreen: undefined;
};
type CartScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CartScreen'>;

  const images = [
    {
      id: "0",
      name: "zero",
    },
    {
      id: "1",
      name: "one",
    },
    {
      id: "2",
      name: "two",
    },
    {
      id: "3",
      name: "three",
    },
    
  ];
   
export default function IndexScreen() {
  
  const [cart, setCart] = useState([]);
  console.log("Cart Items", cart);
  const navigation = useNavigation<CartScreenNavigationProp>();  

  const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
      async function prepare() {
        try {
          // Keep the splash screen visible while we fetch resources
          await SplashScreen.preventAutoHideAsync();
  
          // Load fonts and perform any other operations you need to do here
  
          // When our operation is complete, set appIsReady to true
          setAppIsReady(true);
        } catch (e) {
          console.warn(e);
        }
      }
  
      prepare();
    }, []);
  
    useEffect(() => {
      if (appIsReady) {
        // Once app is ready, hide the splash screen
        SplashScreen.hideAsync();
      }
    }, [appIsReady]);
  
    let [fontsLoaded] = useFonts({
        SpaceGrotesk_300Light,
        SpaceGrotesk_400Regular,
        SpaceGrotesk_500Medium,
        SpaceGrotesk_600SemiBold,
        SpaceGrotesk_700Bold,
      });

    
      if (!fontsLoaded || !appIsReady) {
        return null ;
      } else {
    

    return (
        <ScrollView>
          <NavigationBar />

          <View style={styles.servicesBody}>

          <View style={styles.servicesIntro}>
            <Text style={styles.servicesIntroText1}>OUR SERVICES</Text>
            <Text style={styles.servicesIntroText2}>JO&AL- Knowledge Experts provides services that revolve around research, business consultancy, and management consultancy. These services focus on helping clients adopt and make informed decisions in the dynamic business world. The company has a team of experts/consultants in the mentioned fields who are ready to work with clients to achieve their objectives.</Text>
          </View>
          <Text>{"\n"}</Text>

          <Text style={styles.researchText}>RESEARCH SERVICES</Text>

          {images.map((item) =>
          <View>
                    <View style={styles.servicesBox}>
                    <Text style={styles.serviceName}>Opinion Polls</Text>
                    <Text style={styles.serviceDescription}>JO&AL-Knowledge Experts conducts surveys on public opinion concerning various issues in society. The polls cover politics, economic environments, and issues related to environmental sustainability. This service is ideal for non-governmental organizations, focus groups, media institutions, and other political players.</Text>
                    <TouchableOpacity  onPress={ () => { setCart([...cart, item]) }} >
                             <Text style={styles.getQuote}>Get Quote</Text>
                        </TouchableOpacity>
                  </View>
        
                  <View style={styles.servicesBox}>
                    <Text style={styles.serviceName}>Academic Writing Training - $299</Text>
                    <Text style={styles.serviceDescription}>JO&AL-Knowledge Experts offers customized training on academic writing. The training is conducted face-to-face and online, depending on clients’ preferences. This service is meant to help clients understand how to write good academic papers using different formats, such as APA, MLA, Harvard, Vancouver, and Chicago, among others. Academic writing training is ideal for researchers, and undergraduate and postgraduate students.</Text>
                    <TouchableOpacity   >
                             <Text style={styles.getQuote}>Add to Cart</Text>
                        </TouchableOpacity>
                  </View>
            </View>
          )}



          </View>

          <Footer />
        </ScrollView>
    );}
}

