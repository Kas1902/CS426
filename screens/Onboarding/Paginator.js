import React from 'react';
import {View, Animated, useWindowDimensions} from 'react-native';
import style from './style';

const Paginator = ({data, scrollX}) => {
  const {width} = useWindowDimensions();
  return (
    <View style={style.dotContainer}>
      {data.map((_, index) => {
        const inputRange = [
          (index - 1) * width,
          index * width,
          (index + 1) * width,
        ];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 30, 10],
          extrapolate: 'clamp',
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            key={index.toString()}
            style={[style.dot, {width: dotWidth, opacity}]}
          />
        );
      })}
    </View>
  );
};

export default Paginator;
