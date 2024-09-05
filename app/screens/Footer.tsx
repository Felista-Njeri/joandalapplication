import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'

import { styles } from '../styles/FooterStyles';

export default function Footer() {
  return (
    <ScrollView>
              <View style={styles.containerFive}>
            <View style={styles.containerFiveContainerOne}>
                  <View style={styles.logoDiv}>
                  <Image style={styles.footerLogo} source={require("../images/logo.png")} />
                  <View style={styles.footerIcons}>
                  <Image source={require("../images/igicon.png")} />
                  <Image source={require("../images/linkedinicon.png")} />
                  <Image source={require("../images/whatsappicon.png")} />
                  <Image source={require("../images/facebookicon.png")} />
                  <Image source={require("../images/xicon.png")} />
                  <Image source={require("../images/tiktokicon.png")} />  
                  </View>
                  </View>

                  <View style={styles.playStoreDiv}>
                  <Image source={require("../images/playstoreicon.png")} />
                  <Image source={require("../images/uparrowicon.png")} />
                  </View>
            </View>

            <View style={styles.containerFiveContainerTwo}>
                  <View style={styles.footerContainer}>
                        <Text  style={styles.footerDetails}>E-Learning</Text>
                        <Text style={styles.footerDetails}>Learn new skills such as:</Text>
                        <Text style={styles.footerDetails}>Academic Writing</Text>
                        <Text style={styles.footerDetails}>Data Analysis</Text>
                  </View>
                  <View style={styles.footerContainer}>
                        <Text style={styles.footerDetails}>Our Contacts</Text>
                        <Text style={styles.footerDetails}>0202100950</Text>
                        <Text style={styles.footerDetails}>0717422527</Text>
                        <Text style={styles.footerDetails}>0717422527</Text>
                        <Text style={styles.footerDetails}>Email Us</Text> 
                  </View>
                  <View style={styles.footerContainer}>
                        <Text style={styles.footerDetails}>Privacy Policy</Text>
                        <Text style={styles.footerDetails}>Cookies Policy</Text>
                        <Text style={styles.footerDetails}>Disclaimer</Text>
                        <Text style={styles.footerDetails}>Returns Policy</Text>
                        <Text style={styles.footerDetails}>Terms and Conditions</Text>
                        <Text style={styles.footerDetails}>End-User Licence Agreement</Text>
                  </View>
            </View>
            <Text style={styles.footerTextOne}>Copyright © 2023 JO&AL</Text>
            <Text style={styles.footerTextOne}>This Website uses cookies to enhance user experience. Using it means that you agree to the Cookies Policy</Text>

        </View>

    </ScrollView>
  )
}