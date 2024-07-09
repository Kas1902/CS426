import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import style from './style';

const TransportBooking = () => {
  return (
    <SafeAreaView style={style.container}>
      <StatusBar hidden={true} />
    </SafeAreaView>
  );
};

export default TransportBooking;
