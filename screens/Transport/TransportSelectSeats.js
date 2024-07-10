/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import HeaderWithChevron from '../../components/HeaderWithChevron/HeaderWithChevron';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import {getFontFamily} from '../../assets/fonts/helper';

const TransportSelectSeats = ({navigation}) => {
  const [selectNumber, setSelectNumber] = useState(2);
  return (
    <SafeAreaView>
      <StatusBar hidden={true} />
      <View
        style={{
          marginTop: verticalScale(32),
          marginHorizontal: horizontalScale(16),
        }}>
        <HeaderWithChevron title="Select Seats" navigation={navigation} />
        <Text
          style={{
            marginTop: verticalScale(16),
            fontSize: scaleFontSize(16),
            color: '#050505',
            fontFamily: getFontFamily('Poppins', 400),
          }}>
          Traveller
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <Pressable
            style={
              selectNumber === 1 && {
                marginRight: horizontalScale(8),
                width: horizontalScale(40),
                height: verticalScale(40),
                borderRadius: horizontalScale(10),
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: verticalScale(10),
                paddingHorizontal: horizontalScale(15),
                backgroundColor: '#FFDDA2',
              }
            }
            onPress={() => setSelectNumber(1)}>
            <Text
              style={{
                color: '#050505',
                fontSize: scaleFontSize(14),
                fontFamily: getFontFamily('Poppins', 600),
              }}>
              1
            </Text>
          </Pressable>
          <Pressable
            style={
              selectNumber === 2 && {
                width: horizontalScale(40),
                height: verticalScale(40),
                borderRadius: horizontalScale(10),
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: verticalScale(10),
                paddingHorizontal: horizontalScale(15),
                backgroundColor: '#FFDDA2',
              }
            }
            onPress={() => setSelectNumber(2)}>
            <Text
              style={{
                color: '#050505',
                fontSize: scaleFontSize(14),
                fontFamily: getFontFamily('Poppins', 600),
              }}>
              2
            </Text>
          </Pressable>
          <Pressable
            style={
              selectNumber === 3 && {
                width: horizontalScale(40),
                height: verticalScale(40),
                borderRadius: horizontalScale(10),
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: verticalScale(10),
                paddingHorizontal: horizontalScale(15),
                backgroundColor: '#FFDDA2',
              }
            }
            onPress={() => setSelectNumber(3)}>
            <Text
              style={{
                color: '#050505',
                fontSize: scaleFontSize(14),
                fontFamily: getFontFamily('Poppins', 600),
              }}>
              3
            </Text>
          </Pressable>
          <Pressable
            style={
              selectNumber === 4 && {
                width: horizontalScale(40),
                height: verticalScale(40),
                borderRadius: horizontalScale(10),
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: verticalScale(10),
                paddingHorizontal: horizontalScale(15),
                backgroundColor: '#FFDDA2',
              }
            }
            onPress={() => setSelectNumber(4)}>
            <Text
              style={{
                color: '#050505',
                fontSize: scaleFontSize(14),
                fontFamily: getFontFamily('Poppins', 600),
              }}>
              4
            </Text>
          </Pressable>
          <Pressable
            style={
              selectNumber === 5 && {
                width: horizontalScale(40),
                height: verticalScale(40),
                borderRadius: horizontalScale(10),
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: verticalScale(10),
                paddingHorizontal: horizontalScale(15),
                backgroundColor: '#FFDDA2',
              }
            }
            onPress={() => setSelectNumber(5)}>
            <Text
              style={{
                color: '#050505',
                fontSize: scaleFontSize(14),
                fontFamily: getFontFamily('Poppins', 600),
              }}>
              5
            </Text>
          </Pressable>
        </View>
        <View
          style={{
            marginTop: verticalScale(16),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                width: horizontalScale(20),
                height: verticalScale(20),
                backgroundColor: '#FEA36B',
                borderRadius: horizontalScale(5),
              }}
            />
            <Text
              style={{
                marginLeft: horizontalScale(8),
                color: '#050505',
                fontSize: scaleFontSize(14),
                fontFamily: getFontFamily('Poppins', 400),
              }}>
              Selected
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                width: horizontalScale(20),
                height: verticalScale(20),
                backgroundColor: '#089083',
                borderRadius: horizontalScale(5),
              }}
            />
            <Text
              style={{
                marginLeft: horizontalScale(8),
                color: '#050505',
                fontSize: scaleFontSize(14),
                fontFamily: getFontFamily('Poppins', 400),
              }}>
              Booked
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                width: horizontalScale(20),
                height: verticalScale(20),
                backgroundColor: '#B7DFDB',
                borderRadius: horizontalScale(5),
              }}
            />
            <Text
              style={{
                marginLeft: horizontalScale(8),
                color: '#050505',
                fontSize: scaleFontSize(14),
                fontFamily: getFontFamily('Poppins', 400),
              }}>
              Available
            </Text>
          </View>
        </View>
        <View style={{marginTop: verticalScale(16), alignItems: 'center'}}>
          <ScrollView>
            <Image source={require('../../assets/images/Flights/Seats.png')} />
          </ScrollView>
        </View>
      </View>
      <View
        style={{
          borderRadius: horizontalScale(20),
          position: 'absolute',
          top: '85%',
          width: '100%',
          backgroundColor: 'white',
          height: '50%',
          zIndex: 1,
        }}>
        <View
          style={{
            marginHorizontal: horizontalScale(16),
            marginTop: verticalScale(16),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: scaleFontSize(14),
              fontFamily: getFontFamily('Poppins', 500),
              color: '#01635D',
            }}>
            Your seats
          </Text>
          <Text
            style={{
              fontSize: scaleFontSize(14),
              fontFamily: getFontFamily('Poppins', 600),
              color: '#050505',
            }}>
            Traveller 1/Seat 2A
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: horizontalScale(16),
            marginTop: verticalScale(16),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: scaleFontSize(14),
              fontFamily: getFontFamily('Poppins', 500),
              color: '#01635D',
            }}>
            Total price
          </Text>
          <Text
            style={{
              fontSize: scaleFontSize(14),
              fontFamily: getFontFamily('Poppins', 600),
              color: '#050505',
            }}>
            $100.00
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('BookingNavigator', {screen: 'BoardingPass'});
          }}>
          <View
            style={{
              marginTop: verticalScale(16),
              marginHorizontal: horizontalScale(16),
              backgroundColor: '#FEA36B',
              paddingVertical: verticalScale(9),
              borderRadius: horizontalScale(25),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: scaleFontSize(18),
                fontFamily: getFontFamily('Poppins', 700),
                color: 'white',
              }}>
              Continue
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TransportSelectSeats;
