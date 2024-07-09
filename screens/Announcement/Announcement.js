import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import style from './style';

const Announcement = () => {
  return (
    <SafeAreaView style={style.container}>
      <StatusBar hidden={true} />
      <Text style={style.text}>There's nothing here</Text>
    </SafeAreaView>
  );
};

export default Announcement;
