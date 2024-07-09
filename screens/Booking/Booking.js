import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';

import style from './style';
import Header from '../../components/Header/Header';
import {FlatList} from 'react-native-gesture-handler';
import items from './items';

const Booking = () => {
  return (
    <SafeAreaView style={style.container}>
      <StatusBar hidden={true} />
      <View>
        <Header title={'Booking'} type={1} />
        <FlatList data={items} renderItem={({item}) => item} />
      </View>
    </SafeAreaView>
  );
};

export default Booking;
