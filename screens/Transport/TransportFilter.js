/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import HeaderWithChevron from '../../components/HeaderWithChevron/HeaderWithChevron';
import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import Header from '../../components/Header/Header';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import RangeSlider from '../../components/RangeSlider/RangeSlide';
import InputWithLabel from '../../components/InputWithLabel/InputWithLabel';
import {RadioButton} from 'react-native-paper';
import {getFontFamily} from '../../assets/fonts/helper';

const TransportFilter = ({navigation}) => {
  const [selectedTimeDeparture, setSelectedTimeDeparture] =
    useState('6AM - 12PM');
  const [selectedTimeArrival, setSelectedTimeArrival] = useState('6AM - 12PM');
  const MIN_DEFAULT = 10;
  const MAX_DEFAULT = 500;
  const [minValue, setMinValue] = useState(MIN_DEFAULT);
  const [maxValue, setMaxValue] = useState(MAX_DEFAULT);
  const [radioValue, setRadioValue] = useState('Arrival time');

  const timeRange = [
    {
      id: 1,
      time: '12AM - 6AM',
    },
    {
      id: 2,
      time: '6AM - 12PM',
    },
    {
      id: 3,
      time: '12PM - 6PM',
    },
    {
      id: 4,
      time: '6PM - 12AM',
    },
  ];

  return (
    <SafeAreaView style={(globalStyle.backgroundWhite, globalStyle.flex)}>
      <StatusBar hidden={true} />
      <View style={style.container}>
        <HeaderWithChevron title={'Filters'} navigation={navigation} />
        <View style={{marginTop: horizontalScale(16)}}>
          <Header title={'Departure'} type={4} />
          <FlatList
            style={{marginTop: horizontalScale(16)}}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={timeRange}
            renderItem={({item}) => (
              <Pressable
                style={[
                  style.button,
                  selectedTimeDeparture === item.time
                    ? style.selectedButton
                    : style.unSelectedButton,
                ]}
                onPress={() => setSelectedTimeDeparture(item.time)}>
                <Text
                  style={[
                    selectedTimeDeparture === item.time
                      ? style.selectedButtonText
                      : style.unSelectedButtonText,
                  ]}>
                  {item.time}
                </Text>
              </Pressable>
            )}
          />
          <View style={{marginTop: horizontalScale(20)}}>
            <Header title={'Arrival'} type={4} />
            <FlatList
              style={{marginTop: horizontalScale(16)}}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={timeRange}
              renderItem={({item}) => (
                <Pressable
                  style={[
                    style.button,
                    selectedTimeArrival === item.time
                      ? style.selectedButton
                      : style.unSelectedButton,
                  ]}
                  onPress={() => setSelectedTimeArrival(item.time)}>
                  <Text
                    style={[
                      selectedTimeArrival === item.time
                        ? style.selectedButtonText
                        : style.unSelectedButtonText,
                    ]}>
                    {item.time}
                  </Text>
                </Pressable>
              )}
            />
          </View>
        </View>
        <View style={{marginTop: horizontalScale(20)}}>
          <Header title={'Price'} type={4} />
          <GestureHandlerRootView style={{flex: 1, marginTop: 24}}>
            <RangeSlider
              sliderWidth={330}
              min={MIN_DEFAULT}
              max={MAX_DEFAULT}
              step={10}
              onValueChange={range => {
                setMinValue(range.min);
                setMaxValue(range.max);
              }}
            />
          </GestureHandlerRootView>
          <View
            style={{
              marginTop: 24,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{width: '48%'}}>
              <InputWithLabel
                label={'From'}
                initialValue={minValue.toString()}
              />
            </View>
            <View style={{width: '48%'}}>
              <InputWithLabel label={'To'} initialValue={maxValue.toString()} />
            </View>
          </View>
        </View>
        <View style={{marginTop: horizontalScale(20)}}>
          <Header title={'Sort by'} type={4} />
          <View style={{marginTop: horizontalScale(8)}}>
            <RadioButton.Group value={radioValue} onValueChange={setRadioValue}>
              <View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <RadioButton
                    color="#01635D"
                    uncheckedColor="#49454f"
                    value="Arrival time"
                  />
                  <Text
                    style={{
                      fontSize: scaleFontSize(14),
                      fontFamily: getFontFamily('Poppins', 400),
                    }}>
                    Arrival time
                  </Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <RadioButton
                    color="#01635D"
                    uncheckedColor="#49454f"
                    value="Departure time"
                  />
                  <Text
                    style={{
                      fontSize: scaleFontSize(14),
                      fontFamily: getFontFamily('Poppins', 400),
                    }}>
                    Departure time
                  </Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <RadioButton
                    color="#01635D"
                    uncheckedColor="#49454f"
                    value="Price"
                  />
                  <Text
                    style={{
                      fontSize: scaleFontSize(14),
                      fontFamily: getFontFamily('Poppins', 400),
                    }}>
                    Price
                  </Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <RadioButton
                    color="#01635D"
                    uncheckedColor="#49454f"
                    value="Lowest fare"
                  />
                  <Text
                    style={{
                      fontSize: scaleFontSize(14),
                      fontFamily: getFontFamily('Poppins', 400),
                    }}>
                    Lowest fare
                  </Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <RadioButton
                    color="#01635D"
                    uncheckedColor="#49454f"
                    value="Duration"
                  />
                  <Text
                    style={{
                      fontSize: scaleFontSize(14),
                      fontFamily: getFontFamily('Poppins', 400),
                    }}>
                    Duration
                  </Text>
                </View>
              </View>
            </RadioButton.Group>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: verticalScale(10),
          }}>
          <TouchableOpacity
            style={{
              width: '48%',
              paddingVertical: verticalScale(14),
              backgroundColor: '#FFF',
              borderRadius: horizontalScale(20),
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: '#FEA36B',
                fontFamily: getFontFamily('Poppins', 700),
                fontSize: scaleFontSize(18),
              }}>
              Reset
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '48%',
              paddingVertical: verticalScale(14),
              backgroundColor: '#FEA36B',
              borderRadius: horizontalScale(20),
            }}
            onPress={() => {
              navigation.goBack();
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: '#FFF',
                fontFamily: getFontFamily('Poppins', 700),
                fontSize: scaleFontSize(18),
              }}>
              Done
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TransportFilter;
