import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';

import style from './style';
import Header from '../../components/Header/Header';

const Booking = () => {
  return (
    <SafeAreaView style={style.container}>
      <StatusBar hidden={true} />
      <View>
        <Header title={'Booking'} type={1} />
      </View>
    </SafeAreaView>
  );
};

export default Booking;
