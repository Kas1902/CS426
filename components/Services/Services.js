import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import style from './style';

const Services = props => {
  return (
    <View style={style.container}>
      <TouchableOpacity
        style={style.image}
        opPress={() => alert('The function is not available yet.')}>
        <Image source={props.image} />
      </TouchableOpacity>
      <Text style={style.text}>{props.title}</Text>
    </View>
  );
};

Services.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.any.isRequired,
  onPress: PropTypes.func,
};

export default Services;
