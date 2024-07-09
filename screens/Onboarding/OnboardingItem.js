import React from 'react';
import {View, Text, Image, useWindowDimensions} from 'react-native';
import style from './style';

const OnboardingItem = ({item}) => {
  const {width} = useWindowDimensions();

  return (
    <View style={[style.itemContainer, {width}]}>
      <Image
        source={item.image}
        // eslint-disable-next-line react-native/no-inline-styles
        style={[style.image, {width, resizeMode: 'contain'}]}
      />
      <View style={style.descriptionContainer}>
        <Text style={style.description}>{item.description}</Text>
      </View>
    </View>
  );
};

export default OnboardingItem;
