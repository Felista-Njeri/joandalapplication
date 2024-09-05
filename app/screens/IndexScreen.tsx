import React, { useEffect, useState } from 'react';
import { ScrollView, View, Image, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/IndexStyles';

import NavigationBar from './NavigationBar';
import Footer from './Footer';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack'

type RootStackParamList = {
      Index: undefined;
      Services: undefined;
      ChatScreen: undefined;
};
type ServicesScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Services'>;

import * as SplashScreen from 'expo-splash-screen';
import {
    useFonts,
    SpaceGrotesk_300Light,
    SpaceGrotesk_400Regular,
    SpaceGrotesk_500Medium,
    SpaceGrotesk_600SemiBold,
    SpaceGrotesk_700Bold,
  } from '@expo-google-fonts/space-grotesk';
 

  
export default function IndexScreen() {

  const navigation = useNavigation<ServicesScreenNavigationProp>();  
  
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

        <NavigationBar/>

        <View style={styles.containerOne}>
            <View style={styles.containerOneTextContents} >
                <Text style ={styles.containerOneTextOne}>A world-class knowledge-based firm empowering people and businesses to create wealth.</Text>
                <Text style ={styles.containerOneTextTwo}>Focused on knowledge creation, acquisition, learning, usage, sharing, integration, exploitation, and protection to achieve economic independence.</Text>
                <TouchableOpacity style={styles.button} /*onPress={() => {  handle press }}*/ >
                     <Text style={styles.text} >About Us</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.containerOneImage} >
                <Image style = {styles.image} source={require("../images/pictureofpeople.png")} />
            </View>
        </View>

        <View style={styles.containerTwo}>
          <View style={styles.twoContentOne}>
            <Text style={styles.twoContentOneTextOne}>WHY CHOOSE US?</Text>
            <Text  style={styles.twoContentOneTextTwo}>We empower people and businesses to use their <Text style={styles.span}>knowledge</Text> to escape the cubicle and create wealth</Text>
            <Text  style={styles.twoContentOneTextThree}>JO&AL- Knowledge Experts is a world-class consulting firm that focuses on a number of disciplines. The main areas include Research Services, Business Consultancy and Management Consultancy. The company also outsources various consultancy services by linking the clients to the best consultants and service providers in their localities. The firm provides individuals and businesses a platform to access jobs and clients ultimately leading to the creation of wealth.</Text>
            <TouchableOpacity style={styles.button2} /*onPress={() => {  handle press }}*/ >
                     <Text style={styles.text} >Our Services</Text>
                </TouchableOpacity>
          </View>

          <View style={styles.twoContentTwo}>

            <View style={styles.twoContentTwoBox}>
              <Image  source={require("../images/serviceicon1.png")} />
              <Text style={styles.twoContentTwoBoxBold}>Research Services</Text>
              <Text style={styles.twoContentTwoBoxRegularText}>Discover the power of informed decisions with our firm's meticulous research services. Harnessing data-driven insights, we empower your business to navigate complexities and seize opportunities in your industry's landscape.</Text>
            </View>

            <View style={styles.twoContentTwoBox}>
            <Image  source={require("../images/serviceicon2.png")} />
            <Text style={styles.twoContentTwoBoxBold}>Business Consultancy</Text>
            <Text style={styles.twoContentTwoBoxRegularText}>Elevate your business to new heights with our bespoke consultancy services. Focused on facilitating growth and efficiency, we design and implement tailored strategies to ensure your business thrives in an ever-evolving corporate environment.</Text>
            </View>

            <View style={styles.twoContentTwoBox}>
            <Image  source={require("../images/serviceicon3.png")} />
            <Text style={styles.twoContentTwoBoxBold}>Management Consultancy</Text>
            <Text style={styles.twoContentTwoBoxRegularText}>Unlocking superior organizational performance, our firm's management consultancy services provide innovative strategies and effective solutions. We are dedicated to transforming your management practices and leading your business towards enduring success.</Text>
            </View>

          </View>

        </View>

        <View style={styles.containerThree}>

          <View style={styles.containerThreeContainerOne} >
            <Text style={styles.threeTextOne}>OUR SERVICES</Text>
            <Text style={styles.threeTextTwo}>The services we offer are <Text style={styles.span2} >specifically</Text> <Text>{'\n'}</Text>tailored to meet your needs</Text>
          </View>

          <View style={styles.containerThreeContainerTwo}>

            <View style={styles.researchContainer} >
              <Text style={styles.serviceNumber}>01</Text>
              <Text style={styles.researchContainerContent1}>Research Services</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Services')}>
                    <Text style={styles.researchContainerContent2}>• Opinion Polls</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Services')}>
                    <Text style={styles.researchContainerContent2}>• Academic Writing Training</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Services')}>
                    <Text style={styles.researchContainerContent2}>• Article Writing Training</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Services')}>
                    <Text style={styles.researchContainerContent2}>• Concept Papers</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Services')}>
                    <Text style={styles.researchContainerContent2}>• Proposal Writing</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Services')}>
                    <Text style={styles.researchContainerContent2}>• Data Mining</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Services')}>
                    <Text style={styles.researchContainerContent2}>• Data Collection</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Services')}>
                    <Text style={styles.researchContainerContent2}>• Data Analysis</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Services')}>
                    <Text style={styles.researchContainerContent2}>• Report Writing</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Services')}>
                    <Text style={styles.researchContainerContent2}>• SPSS Training</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Services')}>
                    <Text style={styles.researchContainerContent2}>• STATA Training</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Services')}>
                    <Text style={styles.researchContainerContent2}>• R Training</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Services')}>
                    <Text style={styles.researchContainerContent2}>• Minitab Training</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Services')}>
                    <Text style={styles.researchContainerContent2}>• Baseline Surveys</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Services')}>
                    <Text style={styles.researchContainerContent2}>• Market Research</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Services')}>
                    <Text style={styles.researchContainerContent2}>• Book Review</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Services')}>
                    <Text style={styles.researchContainerContent2}>• Customer Satisfaction Surveys</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Services')}>
                    <Text style={styles.researchContainerContent2}>• Employee Satisfaction Surveys</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button3} /*onPress={() => {  handle press }}*/ >
                     <Text style={styles.text} >More Details</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.researchContainer}>
            <Text style={styles.serviceNumber}>02</Text>
            <Text style={styles.researchContainerContent1}>Business Consultancy</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Services')}>
                    <Text style={styles.researchContainerContent2}>• Limited Company Formation</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Services')}>
                    <Text style={styles.researchContainerContent2}>• Sole Proprietorship</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Services')}>
                    <Text style={styles.researchContainerContent2}>• Partnerships</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Services')}>
                    <Text style={styles.researchContainerContent2}>• Company Profiles</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Services')}>
                    <Text style={styles.researchContainerContent2}>• Tax Compliance</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Services')}>
                    <Text style={styles.researchContainerContent2}>• Company Dissolution</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Services')}>
                    <Text style={styles.researchContainerContent2}>• Change of Partners</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Services')}>
                    <Text style={styles.researchContainerContent2}>• Digital Marketing Training</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Services')}>
                    <Text style={styles.researchContainerContent2}>• Financial Advisory</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Services')}>
                    <Text style={styles.researchContainerContent2}>• Business Processes Outsourcing</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Services')}>
                    <Text style={styles.researchContainerContent2}>• Mergers and Acquisitions</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Services')}>
                    <Text style={styles.researchContainerContent2}>• Asset Optimization</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Services')}>
                    <Text style={styles.researchContainerContent2}>• Forecasting/Budgeting</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Services')}>
                    <Text style={styles.researchContainerContent2}>• Corporate Branding</Text>
              </TouchableOpacity>


            <TouchableOpacity style={styles.button3} /*onPress={() => {  handle press }}*/ >
                     <Text style={styles.text} >More Details</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.researchContainer}>
            <Text style={styles.serviceNumber}>03</Text>
            <Text style={styles.researchContainerContent1}>Management Consultancy</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Services')}>
                    <Text style={styles.researchContainerContent2}>• Strategic Plans</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Services')}>
                    <Text style={styles.researchContainerContent2}>• Business Plans</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Services')}>
                    <Text style={styles.researchContainerContent2}>• Human Resource Recruitment</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Services')}>
                    <Text style={styles.researchContainerContent2}>• Project Management</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Services')}>
                    <Text style={styles.researchContainerContent2}>• HR Training and Development</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Services')}>
                    <Text style={styles.researchContainerContent2}>• Risk Management</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Services')}>
                    <Text style={styles.researchContainerContent2}>• Leadership and Team Building</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Services')}>
                    <Text style={styles.researchContainerContent2}>• Monitoring and Evaluation</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Services')}>
                    <Text style={styles.researchContainerContent2}>• Community Mobilization</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Services')}>
                    <Text style={styles.researchContainerContent2}>• Industrial Counselling</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Services')}>
                    <Text style={styles.researchContainerContent2}>• Change Management</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Services')}>
                    <Text style={styles.researchContainerContent2}>• Organization Design</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Services')}>
                    <Text style={styles.researchContainerContent2}>• Management Outsourcing</Text>
              </TouchableOpacity>
            <TouchableOpacity style={styles.button3} /*onPress={() => {  handle press }}*/ >
                     <Text style={styles.text} >More Details</Text>
                </TouchableOpacity>
            </View>
          </View>
        </View>


        <View style={styles.containerFour}>

        <View style={styles.containerFourContainerOne} >
            <Text style={styles.fourTextOne}>HAPPY CUSTOMERS</Text>
            <Text style={styles.fourTextTwo}>Don't take our word for it. See what <Text style={styles.span3} >customers</Text> <Text>{"\n"}</Text> are saying about us</Text>
        </View>

        <View style={styles.reviews}>
        <Image style={styles.fiveStar} source={require("../images/5star.png")} />
        <Text style={styles.review1}>"Through the business consultancy services offered by JO&AL, I have been able to incorporate a limited company, brand it from scratch and get clients. I now run a reputable enterprise thanks to JO&AL"</Text>
        <Text style={styles.boldReview}>James Otieno</Text>
        <Text style={styles.boldReview}>CEO</Text>
        </View>

        <View style={styles.reviews}>
        <Image style={styles.fiveStar} source={require("../images/5star.png")} />
        <Text style={styles.review1}>"JO&AL taught me about academic and content writing. I am now self employed and live a comfortable life. Furthermore, I have recruited a few graduates to my team and they can now fend for themselves."</Text>
        <Text style={styles.boldReview}>Catherine Mwanyumba</Text>
        <Text style={styles.boldReview} >Academic Writer</Text>
        </View>

        <View style={styles.reviews}>
        <Image style={styles.fiveStar} source={require("../images/5star.png")} />
        <Text style={styles.review1}>"JO&AL has assisted our company in employee recruitment, conducting employee satisfaction surveys and formulating strategic plans for our organization."</Text>
        <Text style={styles.boldReview}>Alice Njoroge</Text>
        <Text style={styles.boldReview}>HR Manager</Text>
        </View>

        </View>

        <Footer/>



  


            

        </ScrollView>
    );}
}

