// RegistrationScreen.tsx
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, TextInput, Image, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import { styles } from '../styles/RegistrationStyles';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, AuthError } from 'firebase/auth';

import { StackNavigationProp } from '@react-navigation/stack'


type RootStackParamList = {
  IndexScreen: undefined;
  RegistrationScreen: undefined;
};

type IndexScreenNavigationProp = StackNavigationProp<RootStackParamList, 'IndexScreen'>;
type RegistrationScreenNavigationProp = StackNavigationProp<RootStackParamList, 'RegistrationScreen'>;

const RegistrationScreen = () => { 
  const navigation = useNavigation<IndexScreenNavigationProp>();  
  const registernavigation = useNavigation<RegistrationScreenNavigationProp>();  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSignUp = async () => {
    try {
      // Obtain the Auth interface
      const auth = getAuth();

      // Use createUserWithEmailAndPassword from Auth interface
      const userCredentials = await createUserWithEmailAndPassword(auth, email, password);

      // Access user information from userCredentials
      const user = userCredentials.user;

      console.log(user.email);
      Alert.alert('Registration Successful', 'You can now log in!');
      navigation.navigate('IndexScreen');

    } catch (error: any) {
      const authError = error as AuthError;
      Alert.alert('Registration Failed', authError.message);
    }
  };

  const handleLogin = async () => {
    try {
      // Obtain the Auth interface
      const auth = getAuth();

      // Use signInWithEmailAndPassword from Auth interface
      await signInWithEmailAndPassword(auth, email, password);

      Alert.alert('Login Successful', 'Welcome back!');
      navigation.navigate('IndexScreen');
      // Navigate to another screen if needed
    } catch (error: any) {
      // Explicitly specify the type of error
      const authError = error as AuthError;
      Alert.alert('Login Failed', authError.message);
    }
  };


  return (
    <View style={styles.register}>
      <Image style={styles.imageLogo} source = {require("../images/logo.png")}/>

     <View style={styles.registerBox}>
      <SafeAreaView style={styles.form}>
        <Text style={styles.title}>Log in</Text>
      <TextInput style={styles.textInputOne}
        placeholder="Enter Email"
        value={email}
        autoFocus={true}
        keyboardType="email-address"
        inputMode="email"
        autoCapitalize="none"
        textContentType="emailAddress"
        onChangeText={text => setEmail(text)}
      />
      <TextInput style={styles.textInputOne}
        placeholder="Enter Password"
        autoCapitalize="none"
        autoCorrect={false}
        textContentType="password"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.text} >Log in</Text>
        </TouchableOpacity>
        <View style={styles.alreadyhaveaccount}>
          <Text style={styles.text2} >Don't have an account? </Text>
          <TouchableOpacity onPress={() => registernavigation.navigate("RegistrationScreen")}>
            <Text style={styles.text3} >Sign Up</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
     
    

     </View>

    </View>
  );
};

export default RegistrationScreen;
