/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import style from './style';
import HeaderWithChevron from '../../components/HeaderWithChevron/HeaderWithChevron';
import globalStyle from '../../assets/styles/globalStyle';
import {FlatList} from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSliders} from '@fortawesome/free-solid-svg-icons';
import {getFontFamily} from '../../assets/fonts/helper';

const TransportFlight = ({navigation}) => {
  const items = [
    {
      id: 1,
      image: require('../../assets/images/Flights/flight.png'),
    },
    {
      id: 2,
      image: require('../../assets/images/Flights/flight.png'),
    },
    {
      id: 3,
      image: require('../../assets/images/Flights/flight.png'),
    },
    {
      id: 4,
      image: require('../../assets/images/Flights/flight.png'),
    },
  ];

  const date = [
    {weekday: 'SU', date: new Date()},
    {weekday: 'MO', date: new Date()},
    {weekday: 'TU', date: new Date()},
    {weekday: 'WE', date: new Date()},
    {weekday: 'TH', date: new Date()},
    {weekday: 'FR', date: new Date()},
    {weekday: 'SA', date: new Date()},
  ];

  return (
    <SafeAreaView style={(globalStyle.backgroundWhite, globalStyle.flex)}>
      <StatusBar hidden={true} />
      <View style={style.container}>
        <HeaderWithChevron title={'Flights'} navigation={navigation} />

        <View style={style.picker}>
          <View style={style.pickerItem}>
            {date.map((item, dateIndex) => {
              return (
                <TouchableWithoutFeedback key={dateIndex}>
                  <View style={style.item}>
                    <Text style={style.dateText}>{item.weekday}</Text>
                    <Text style={style.dateText}>{item.date.getDate()}</Text>
                  </View>
                </TouchableWithoutFeedback>
              );
            })}
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 16,
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: getFontFamily('Poppins', 400),
            }}>
            {items.length} flights available
          </Text>
          <TouchableOpacity
            style={{backgroundColor: '#FEA36B', padding: 8, borderRadius: 12}}
            onPress={() => navigation.navigate('TransportFilter')}>
            <FontAwesomeIcon icon={faSliders} color="#FFF" />
          </TouchableOpacity>
        </View>
        <View style={style.ticketContainer}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={items}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('TransportSelectSeats');
                  }}>
                  <Image
                    resizeMode={'contain'}
                    source={item.image}
                    style={style.ticketImage}
                  />
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TransportFlight;
