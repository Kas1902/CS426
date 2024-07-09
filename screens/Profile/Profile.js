/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-alert */
import React from 'react';
import {SafeAreaView, StatusBar, View, Image, Pressable} from 'react-native';
import Header from '../../components/Header/Header';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faClock,
  faCreditCard,
  faHeart,
  faUser,
} from '@fortawesome/free-regular-svg-icons';
import {faGears} from '@fortawesome/free-solid-svg-icons/faGears';
import {useNavigation} from '@react-navigation/native';

import style from './style';

const Account = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <StatusBar hidden={true} />
      <View style={style.headerContainer}>
        <Header title={'Account'} type={3} />
      </View>
      <View style={style.image}>
        <Image source={require('../../assets/images/Profile/Avatar.png')} />
      </View>
      <View style={{alignItems: 'center'}}>
        <Header title={'Hưng Tô'} type={2} />
      </View>
      <View style={style.profile}>
        <Pressable
          style={style.button}
          onPress={() => {
            navigation.navigate('PersonalInfo');
          }}>
          <FontAwesomeIcon icon={faUser} size={24} color={'#FEA36B'} />
          <Header title={'Personal Information'} type={5} />
        </Pressable>
        <Pressable
          style={style.button}
          onPress={() => {
            alert('This function is not available yet');
          }}>
          <FontAwesomeIcon icon={faCreditCard} size={24} color={'#FEA36B'} />
          <Header title={'Payment and cards'} type={5} />
        </Pressable>
        <Pressable
          style={style.button}
          onPress={() => {
            alert('This function is not available yet');
          }}>
          <FontAwesomeIcon icon={faHeart} size={24} color={'#FEA36B'} />
          <Header title={'Saved'} type={5} />
        </Pressable>
        <Pressable
          style={style.button}
          onPress={() => {
            alert('This function is not available yet');
          }}>
          <FontAwesomeIcon icon={faClock} size={24} color={'#FEA36B'} />
          <Header title={'Booking history'} type={5} />
        </Pressable>
        <Pressable
          style={style.button}
          onPress={() => {
            alert('This function is not available yet');
          }}>
          <FontAwesomeIcon icon={faGears} size={24} color={'#FEA36B'} />
          <Header title={'Settings'} type={5} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Account;
