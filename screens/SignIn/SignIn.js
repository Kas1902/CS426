import React from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  View,
  Text,
  TextInput,
} from 'react-native';
import style from './style';
import Home from '../Home/Home';

const SignIn = ({navigation}) => {
  return (
    <SafeAreaView>
      <StatusBar hidden={true} />
      <View>
        <TouchableOpacity
          style={{...style.chevron}}
          onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/images/Chevron.png')} />
        </TouchableOpacity>
        <View style={{...style.welcomeContainer}}>
          <Text style={{...style.welcomeBack}}>Welcome back!</Text>
          <Text style={{...style.text}}>Sign in and let’s get going</Text>
        </View>
        <View style={{...style.signInContainer}}>
          <TextInput
            style={{...style.emailInput}}
            placeholder="Email"
            keyboardType="email-address"
            autoFocus={true}
          />
          <TextInput
            style={{...style.passwordInput}}
            placeholder="Password"
            secureTextEntry={true}
          />
          <TouchableOpacity
            style={{...style.signInButton}}
            onPress={() => navigation.navigate(Home)}>
            <Text style={{...style.signIn}}>Sign In</Text>
          </TouchableOpacity>
          <View style={{...style.otherOptionsContainer}}>
            <View style={{...style.signUpContainer}}>
              <Text style={{...style.new}}>New?</Text>
              <Text style={{...style.signUp}}>Sign up</Text>
            </View>
            <Text style={{...style.forgot}}>Forgot password?</Text>
          </View>
        </View>
        <View style={{...style.alternativeSignInContainer}}>
          <View style={{...style.divider}}>
            <View style={{...style.lineBorder}} />
            <Text style={{...style.or}}>or</Text>
            <View style={{...style.lineBorder}} />
          </View>
          <View style={{...style.socialLogInContainer}}>
            <TouchableOpacity style={{...style.socialButton}}>
              <Image
                resizeMode="contain"
                style={{...style.image}}
                source={require('../../assets/images/SignIn/Facebook.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{...style.socialButton}}>
              <Image
                resizeMode="contain"
                style={{...style.image}}
                source={require('../../assets/images/SignIn/Google.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{...style.socialButton}}>
              <Image
                resizeMode="contain"
                style={{...style.image}}
                source={require('../../assets/images/SignIn/Apple.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
