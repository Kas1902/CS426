import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';

import style from './style';
import Header from '../../components/Header/Header';
import {FlatList} from 'react-native-gesture-handler';
import getItems from './items';
import BookingItem from './BookingItem';
import {useNavigation} from '@react-navigation/native';

const Booking = () => {
  const [items, setItems] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const itemsData = await getItems(navigation);
        console.log('Fetched items:', itemsData); // Log fetched data for debugging
        setItems(itemsData);
      } catch (error) {
        console.error('Error fetching items:', error); // Log any errors during fetch
      }
    };

    fetchData();
  }, [navigation]);

  console.log('Items state:', items);

  return (
    <SafeAreaView style={style.container}>
      <StatusBar hidden={true} />
      <View style={style.container}>
        <View style={style.headerContainer}>
          <Header title={'Booking'} type={3} />
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={items}
          renderItem={({item}) => <BookingItem item={item} />}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default Booking;
