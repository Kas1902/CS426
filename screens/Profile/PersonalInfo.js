import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import HeaderWithChevron from '../../components/HeaderWithChevron/HeaderWithChevron';
import style from './style';
import {useNavigation} from '@react-navigation/native';

const PersonalInfo = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={style.container}>
      <StatusBar hidden={true} />
      <HeaderWithChevron
        title={'Personal Information'}
        navigation={navigation}
      />
    </SafeAreaView>
  );
};

export default PersonalInfo;
