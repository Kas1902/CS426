/* eslint-disable no-alert */
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import Search from '../../components/Search/Search';
import Header from '../../components/Header/Header';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBuilding,
  faChampagneGlasses,
  faEarth,
  faPlaneDeparture,
} from '@fortawesome/free-solid-svg-icons';

import style from './style';

import globalStyle from '../../assets/styles/globalStyle';
import Booking from '../Booking/Booking';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <StatusBar hidden={true} />
      <View>
        <View style={style.header}>
          <Header title={'Explore the beautiful world'} type={1} />
        </View>
        <View style={style.searchBar}>
          <Search />
        </View>
        <View style={style.bookingContainer}>
          <Header title={'Booking Services'} type={2} />
          <View style={style.servicesContainer}>
            <View style={style.container}>
              <TouchableOpacity
                style={style.image}
                onPress={() => {
                  alert('This function is not available yet');
                }}>
                <FontAwesomeIcon icon={faEarth} size={32} color={'#fff'} />
              </TouchableOpacity>
              <Text style={style.text}>Trips</Text>
            </View>
            <View style={style.container}>
              <TouchableOpacity
                style={style.image}
                onPress={() => {
                  alert('This function is not available yet');
                }}>
                <FontAwesomeIcon icon={faBuilding} size={32} color={'#fff'} />
              </TouchableOpacity>
              <Text style={style.text}>Hotel</Text>
            </View>
            <View style={style.container}>
              <TouchableOpacity
                style={style.image}
                onPress={() => {
                  navigation.navigate(Booking);
                }}>
                <FontAwesomeIcon
                  icon={faPlaneDeparture}
                  size={32}
                  color={'#fff'}
                />
              </TouchableOpacity>
              <Text style={style.text}>Transport</Text>
            </View>
            <View style={style.container}>
              <TouchableOpacity
                style={style.image}
                onPress={() => {
                  alert('This function is not available yet');
                }}>
                <FontAwesomeIcon
                  icon={faChampagneGlasses}
                  size={32}
                  color={'#fff'}
                />
              </TouchableOpacity>
              <Text style={style.text}>Events</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
