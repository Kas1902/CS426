/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, Image, SafeAreaView, StatusBar, View} from 'react-native';
import HeaderWithChevron from '../../components/HeaderWithChevron/HeaderWithChevron';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';
import globalStyle from '../../assets/styles/globalStyle';

const TransportBoardingPass = ({navigation}) => {
  const items = [
    {
      id: 1,
      image: require('../../assets/images/Flights/ticket1.png'),
    },
    {
      id: 2,
      image: require('../../assets/images/Flights/ticket2.png'),
    },
  ];

  return (
    <SafeAreaView style={(globalStyle.backgroundWhite, globalStyle.flex)}>
      <StatusBar hidden={true} />
      <View
        style={{
          marginTop: verticalScale(20),
          marginHorizontal: horizontalScale(16),
        }}>
        <HeaderWithChevron title="Boarding Pass" navigation={navigation} />
        <View style={{alignItems: 'center', marginTop: verticalScale(16)}}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={items}
            renderItem={({item}) => (
              <View style={{marginBottom: verticalScale(16)}}>
                <Image source={item.image} />
              </View>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TransportBoardingPass;
