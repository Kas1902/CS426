import React from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import style from './style';
import globalStyle from '../../assets/styles/globalStyle';
import SignIn from '../SignIn/SignIn';

const Welcome = ({navigation}) => {
  return (
    <SafeAreaView style={{...globalStyle.backgroundWhite, ...globalStyle.flex}}>
      <StatusBar hidden={true} />
      <View style={{...style.container}}>
        <View style={{...style.welcomeContainer}}>
          <Text style={{...style.welcome}}>Welcome to</Text>
          <View style={{...style.logoContainer}}>
            <Image
              source={require('../../assets/images/Welcome/Green_logo.png')}
              style={{...style.image}}
            />
            <Text style={{...style.appName}}>Travelly</Text>
          </View>
        </View>
        <View style={{...style.buttonContainer}}>
          <TouchableOpacity style={{...style.signUpButton}}>
            <Text style={{...style.signUp}}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{...style.loginButton}}
            onPress={() => navigation.navigate(SignIn)}>
            <Text style={{...style.login}}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
