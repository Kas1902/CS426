import React from 'react';
import {Image, SafeAreaView, Text, View, StatusBar} from 'react-native';
import style from './style';
import globalStyle from '../../assets/styles/globalStyle';

const Splash = () => {
  return (
    <SafeAreaView style={{...globalStyle.backgroundGreen, ...globalStyle.flex}}>
      <StatusBar hidden={true} />
      <View style={{...style.container}}>
        <View style={{...style.logoContainer}}>
          <Image
            resizeMode="contain"
            style={{...style.image}}
            source={require('../../assets/images/Splash/White_logo.png')}
          />
          <Text style={{...style.appName}}>Travelly</Text>
        </View>
        <View style={{...style.loadingBarContainer}}>
          <Image
            resizeMode="contain"
            style={{...style.loadingBar}}
            source={require('../../assets/images/Splash/LoadingBar.png')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Splash;
