/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef} from 'react';
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
import Swiper from 'react-native-swiper';
import moment from 'moment';
import {scaleFontSize} from '../../assets/styles/scaling';

const TransportFlight = ({navigation}) => {
  const today = new Date().toISOString().split('T')[0];
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

  const swiper = useRef();
  const [value, setValue] = useState(new Date());
  const [week, setWeek] = useState(0);
  const weeks = React.useMemo(() => {
    const start = moment().add(week, 'weeks').startOf('week');
    return [-1, 0, 1].map(adj => {
      return Array.from({length: 7}).map((_, index) => {
        const date = moment(start).add(adj, 'week').add(index, 'day');
        return {
          weekday: date.format('ddd'),
          date: date.toDate(),
        };
      });
    });
  }, [week]);
  const compare = value.toISOString().split('T')[0];

  return (
    <SafeAreaView style={(globalStyle.backgroundWhite, globalStyle.flex)}>
      <StatusBar hidden={true} />
      <View style={style.container}>
        <HeaderWithChevron title={'Flights'} navigation={navigation} />

        <View
          style={{
            marginTop: 16,
            maxHeight: 74,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Swiper
            index={1}
            ref={swiper}
            loop={false}
            showsPagination={false}
            onIndexChanged={ind => {
              if (ind === 1) {
                return;
              }
              setTimeout(() => {
                const newIndex = ind - 1;
                const newWeek = week + newIndex;
                setWeek(newWeek);
                setValue(moment(value).add(newIndex, 'week').toDate());
                swiper.current.scrollTo(1, false);
              }, 100);
            }}>
            {weeks.map((dates, index) => (
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  paddingHorizontal: 12,
                }}
                key={index}>
                {dates.map((item, dateIndex) => {
                  const isActive =
                    value.toDateString() === item.date.toDateString();
                  return (
                    <TouchableWithoutFeedback
                      key={dateIndex}
                      onPress={() => {
                        setValue(item.date);
                      }}>
                      <View
                        style={[
                          {
                            flex: 1,
                            height: 50,
                            marginHorizontal: 4,
                            paddingVertical: 6,
                            paddingHorizontal: 4,
                            borderRadius: 15,
                            borderColor: '#e3e3e3',
                            flexDirection: 'column',
                            alignItems: 'center',
                          },
                          isActive && {
                            backgroundColor: '#FFDDA2',
                          },
                        ]}>
                        <Text
                          style={[
                            {
                              fontSize: scaleFontSize(12),
                              fontFamily: getFontFamily('Poppins', 400),
                              color: '#050505',
                            },
                          ]}>
                          {item.weekday}
                        </Text>
                        <Text
                          style={[
                            {
                              fontSize: scaleFontSize(14),
                              fontFamily: getFontFamily('Poppins', 600),
                              color: '#050505',
                            },
                          ]}>
                          {item.date.getDate()}
                        </Text>
                      </View>
                    </TouchableWithoutFeedback>
                  );
                })}
              </View>
            ))}
          </Swiper>
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
            {today === compare ? items.length : 0} flights available
          </Text>
          <TouchableOpacity
            style={{backgroundColor: '#FEA36B', padding: 8, borderRadius: 12}}
            onPress={() => navigation.navigate('TransportFilter')}>
            <FontAwesomeIcon icon={faSliders} color="#FFF" />
          </TouchableOpacity>
        </View>
        <View style={style.ticketContainer}>
          {today === compare && (
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
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TransportFlight;
