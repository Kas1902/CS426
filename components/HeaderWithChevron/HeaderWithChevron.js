import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import Header from '../../components/Header/Header';
import PropTypes from 'prop-types';

import style from './style';

const HeaderWithChevron = ({title, navigation}) => {
  return (
    <View style={style.headerContainer}>
      <TouchableOpacity
        style={style.chevron}
        onPress={() => {
          navigation.goBack();
        }}>
        <FontAwesomeIcon icon={faChevronLeft} size={20} color="#000" />
      </TouchableOpacity>
      <View style={style.text}>
        <Header title={title} type={3} />
      </View>
    </View>
  );
};

HeaderWithChevron.propTypes = {
  title: PropTypes.string.isRequired,
};

export default HeaderWithChevron;
