import React, {useState} from 'react';
import {SafeAreaView, StatusBar, TouchableOpacity, View} from 'react-native';
import HeaderWithChevron from '../../components/HeaderWithChevron/HeaderWithChevron';
import InputWithLabel from '../../components/InputWithLabel/InputWithLabel';

import style from './style';
import globalStyle from '../../assets/styles/globalStyle';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faRightLeft} from '@fortawesome/free-solid-svg-icons';
import Header from '../../components/Header/Header';

const TransportBooking = ({navigation}) => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const switchInput = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  return (
    <SafeAreaView style={(globalStyle.backgroundWhite, globalStyle.flex)}>
      <StatusBar hidden={true} />
      <View style={style.container}>
        <HeaderWithChevron
          title={'Transport Booking'}
          navigation={navigation}
        />

        <View style={style.placeContainer}>
          <InputWithLabel label="From" initialValue={from} onChange={setFrom} />
          <View style={style.toInput}>
            <InputWithLabel label="To" initialValue={to} onChange={setTo} />
          </View>
          <TouchableOpacity style={style.switchButton} onPress={switchInput}>
            <FontAwesomeIcon icon={faRightLeft} size={24} color={'#FFF'} />
          </TouchableOpacity>
          <View style={style.datePickerContainer}>
            <View style={style.datePicker}>
              <InputWithLabel label="Departure" />
            </View>
            <View style={style.datePicker}>
              <InputWithLabel label="Return" />
            </View>
          </View>
        </View>

        <View style={style.header2}>
          <Header title="Passenger Details" type={4} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TransportBooking;
