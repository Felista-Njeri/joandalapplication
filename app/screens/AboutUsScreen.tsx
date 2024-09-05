import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { styles } from '../styles/AboutUsStyles';

import NavigationBar from './NavigationBar';
import Footer from './Footer';

import {
  useFonts,
  SpaceGrotesk_300Light,
  SpaceGrotesk_400Regular,
  SpaceGrotesk_500Medium,
  SpaceGrotesk_600SemiBold,
  SpaceGrotesk_700Bold,
} from '@expo-google-fonts/space-grotesk';

export default function AboutUsScreen() {

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
      <View style={styles.aboutUsContainer}>
        <View style={styles.aboutUs1}>
            <Text style={styles.aboutUsHeading}>ABOUT US</Text>
            <Text style={styles.aboutUsText}>JO&AL - Knowledge Experts is a world-class knowledge-based firm empowering people and businesses to create wealth. Our company is a remarkable consulting firm that focuses on a number of disciplines. The main areas include Research Services, Business Consultancy and Management Consultancy</Text>
        </View>
        <View style={styles.aboutUs1}>
            <Text style={styles.aboutUsOtherHeadings}>WHO WE ARE</Text>
            <Text style={styles.aboutUsText}>JO&AL-Knowledge Experts is a knowledge-based company whose clarion call is to “help people and businesses get out of the cubicle and create wealth”. The company has combined different methods of making money to create effective resources for beginners and experts.The focus is to conform to the global changes brought about by information technology. JO&AL-Knowledge Experts’ commodity of trade is “Knowledge”. We are a reflection of a transformation that is taking place in our national and global society. Currently, learning is continuously being redefined for formal and lifelong learners in both public and private sectors. Consequently, we deal with affiliates, advertisers, agencies, and entrepreneurs. Our private fora coach individuals interested in leveraging their careers for business.</Text>
        </View>
        <View style={styles.aboutUs1}>
            <Text style={styles.aboutUsOtherHeadings}>OUR JOURNEY</Text>
            <Text style={styles.aboutUsText}>JO&AL- Knowledge Experts was initiated by the director who took initiative to use the knowledge he acquired when he was given “power to read and to do” to generate income. The company started as a research firm that help individuals and businesses stay focused in their goals. The firm currently has a team of professionals in different fields.</Text>
        </View>
        <View style={styles.aboutUs1}>
            <Text style={styles.aboutUsOtherHeadings}>MISSION AND VISION</Text>
            <Text style={styles.aboutUsText}><Text style={styles.aboutUsBoldTexts}>Our Mission:</Text> To empower people and businesses to use their knowledge to escape the cubicle and create wealth.</Text>
            <Text style={styles.aboutUsText}><Text style={styles.aboutUsBoldTexts}>Our Vision:</Text> A world-class knowledge-based firm empowering people and businesses to create wealth.</Text>
        </View>
        <View style={styles.aboutUs1}>
            <Text style={styles.aboutUsOtherHeadings}>OUR CORE VALUES</Text>
            <Text style={styles.aboutUsText}><Text style={styles.aboutUsBoldTexts}>Integrity</Text> is at the heart of our practice entailing honesty, fairness, trust, mutual respect, consistency, accountability, and transparency in dealings with our clients and team.</Text>
            <Text style={styles.aboutUsText}><Text style={styles.aboutUsBoldTexts}>Creativity</Text> will give us competitive edge in innovation and research by providing affordable solutions to our clients using information technology.</Text>
            <Text style={styles.aboutUsText}><Text style={styles.aboutUsBoldTexts}>Excellence</Text> is the standard of our efforts in providing services that exceed expectations in every endeavor and practice.</Text>
            <Text style={styles.aboutUsText}><Text style={styles.aboutUsBoldTexts}>Commitment</Text> is our characteristic trait in dealing and conducting business with our clients.</Text>
            <Text style={styles.aboutUsText}><Text style={styles.aboutUsBoldTexts}>Teamwork</Text> is our strength, which lies in creating synergies that help us work and coordinate with our global networks.</Text>
            <Text style={styles.aboutUsText}><Text style={styles.aboutUsBoldTexts}>Enterpreneurship</Text> is our mindset to escape the cubicle and empower people and businesses to create wealth.</Text>
            <Text style={styles.aboutUsText}><Text style={styles.aboutUsBoldTexts}>Flexibility</Text> is key since our products and services will adjust to changing global circumstances.</Text>
        </View>
        <View style={styles.aboutUs1}>
            <Text style={styles.aboutUsOtherHeadings}>OUR STRATEGIC FOCUS</Text>
            <Text style={styles.aboutUsText}>JO&AL-Knowledge Experts is focused on knowledge creation, acquisition, learning, use, sharing, integration, exploitation, and protection to achieve economic independence. It is learning organization that focusses on developing over time, and creating opportunities for motivating learners to create and acquire wealth. We expect our clients to continually become learners as they use our products. This aspect entails a radicle change in their thinking to escape the cubicle and use their learning experience for profit. Therefore, we focus on skill development and job creation.</Text>
        </View>
      </View>

      <Footer/>
     
    </ScrollView>
  );}
}