import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import style from './style';
import Search from '../../components/Search/Search';
import globalStyle from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';
import Services from '../../components/Services/Services';
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
            <Services
              title={'Trips'}
              image={require('../../assets/images/Home/trip.png')}
              onPress={() => {
                alert('The function is not available yet.');
              }}
            />
            <Services
              title={'Hotel'}
              image={require('../../assets/images/Home/hotel.png')}
            />
            <Services
              title={'Transport'}
              image={require('../../assets/images/Home/transport.png')}
              onPress={() => {
                navigation.navigate(Booking);
              }}
            />
            <Services
              title={'Events'}
              image={require('../../assets/images/Home/event.png')}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
