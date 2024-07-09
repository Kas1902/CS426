import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import style from './style';

const BookingItem = ({item}) => {
  return (
    <View style={style.itemContainer}>
      <TouchableOpacity onPress={item.onPress}>
        <Image resizeMode={'contain'} source={item.image} />
      </TouchableOpacity>
    </View>
  );
};

export default BookingItem;
