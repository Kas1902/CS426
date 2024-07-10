/* eslint-disable no-alert */
import React, {useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import HeaderWithChevron from '../../components/HeaderWithChevron/HeaderWithChevron';
import InputWithLabel from '../../components/InputWithLabel/InputWithLabel';

import style from './style';
import globalStyle from '../../assets/styles/globalStyle';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBaby,
  faBus,
  faDog,
  faPlane,
  faRightLeft,
  faShip,
  faSuitcaseRolling,
  faTrain,
  faUserAlt,
} from '@fortawesome/free-solid-svg-icons';
import Header from '../../components/Header/Header';

const TransportBooking = ({navigation}) => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [selectedClass, setSelectedClass] = useState('Economy');
  const [selectedTransport, setSelectedTransport] = useState('Flight');
  const [passenger, setPassenger] = useState(1);

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
          <View style={style.detailInputContainer}>
            <View style={style.inputContainer}>
              <FontAwesomeIcon icon={faUserAlt} size={24} color={'#089083'} />
              <TextInput
                style={style.input}
                keyboardType="numeric"
                value={passenger}
                onChangeText={value => {
                  setPassenger(value);
                }}
              />
            </View>
            <View style={style.inputContainer}>
              <FontAwesomeIcon icon={faBaby} size={24} color={'#089083'} />
              <TextInput style={style.input} keyboardType="numeric" />
            </View>
            <View style={style.inputContainer}>
              <FontAwesomeIcon icon={faDog} size={24} color={'#089083'} />
              <TextInput style={style.input} keyboardType="numeric" />
            </View>
            <View style={style.inputContainer}>
              <FontAwesomeIcon
                icon={faSuitcaseRolling}
                size={24}
                color={'#089083'}
              />
              <TextInput style={style.input} keyboardType="numeric" />
            </View>
          </View>
        </View>

        <View style={style.header2}>
          <Header title="Class" type={4} />
          <View style={style.classContainer}>
            <Pressable
              style={[
                style.button,
                selectedClass === 'Economy'
                  ? style.selectedButton
                  : style.unSelectedButton,
              ]}
              onPress={() => {
                setSelectedClass('Economy');
              }}>
              <Text
                style={[
                  style.buttonText,
                  selectedClass === 'Economy'
                    ? style.selectedButtonText
                    : style.unSelectedButtonText,
                ]}>
                Economy
              </Text>
            </Pressable>
            <Pressable
              style={[
                style.button,
                selectedClass === 'Business'
                  ? style.selectedButton
                  : style.unSelectedButton,
              ]}
              onPress={() => {
                setSelectedClass('Business');
              }}>
              <Text
                style={[
                  style.buttonText,
                  selectedClass === 'Business'
                    ? style.selectedButtonText
                    : style.unSelectedButtonText,
                ]}>
                Business
              </Text>
            </Pressable>
          </View>
        </View>

        <View style={style.header2}>
          <Header title="Transport" type={4} />
          <View style={style.classContainer}>
            <Pressable
              style={[
                style.transportButton,
                selectedTransport === 'Flight'
                  ? style.selectedButton
                  : style.unSelectedButton,
              ]}
              onPress={() => {
                setSelectedTransport('Flight');
              }}>
              <FontAwesomeIcon
                icon={faPlane}
                size={24}
                color={selectedTransport === 'Flight' ? '#FFF' : '#089083'}
              />
            </Pressable>
            <Pressable
              style={[
                style.transportButton,
                selectedTransport === 'Ship'
                  ? style.selectedButton
                  : style.unSelectedButton,
              ]}
              onPress={() => {
                setSelectedTransport('Ship');
              }}>
              <FontAwesomeIcon
                icon={faShip}
                size={24}
                color={selectedTransport === 'Ship' ? '#FFF' : '#089083'}
              />
            </Pressable>
            <Pressable
              style={[
                style.transportButton,
                selectedTransport === 'Train'
                  ? style.selectedButton
                  : style.unSelectedButton,
              ]}
              onPress={() => {
                setSelectedTransport('Train');
              }}>
              <FontAwesomeIcon
                icon={faTrain}
                size={24}
                color={selectedTransport === 'Train' ? '#FFF' : '#089083'}
              />
            </Pressable>
            <Pressable
              style={[
                style.transportButton,
                selectedTransport === 'Bus'
                  ? style.selectedButton
                  : style.unSelectedButton,
              ]}
              onPress={() => {
                setSelectedTransport('Bus');
              }}>
              <FontAwesomeIcon
                icon={faBus}
                size={24}
                color={selectedTransport === 'Bus' ? '#FFF' : '#089083'}
              />
            </Pressable>
          </View>
        </View>

        <TouchableOpacity
          style={style.searchButton}
          onPress={() => {
            passenger > 0
              ? selectedTransport === 'Flight'
                ? navigation.navigate('TransportFlight')
                : alert('Coming Soon!')
              : alert('Number of passengers must be greater than zero!');
          }}>
          <Text style={style.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TransportBooking;
