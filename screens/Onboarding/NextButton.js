import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import style from './style';

const NextButton = ({scrollTo}) => {
  return (
    <View style={style.buttonContainer}>
      <TouchableOpacity onPress={scrollTo} style={style.button}>
        <Text style={style.text}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NextButton;
