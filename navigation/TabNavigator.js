/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeNavigator from './HomeNavigator';
import BookingNavigator from './BookingNavigator';
import AnnouncementNavigator from './AnnouncementNavigator';
import ProfileNavigator from './ProfileNavigator';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBell,
  faHome,
  faTicket,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import RowComponent from '../components/RowComponent';

import style from './style';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => {
        return {
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 60,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            justifyContent: 'space-between',
            alignItems: 'center',
          },
          tabBarIcon: ({focused}) => {
            if (route.name === 'HomeNavigator') {
              return (
                <RowComponent
                  styles={{
                    alignItems: 'center',
                    borderRadius: 10,
                    backgroundColor: focused ? '#FFDDA2' : '#FFF',
                  }}>
                  <FontAwesomeIcon icon={faHome} size={20} />
                  {focused && <Text style={style.tabLabel}>Home</Text>}
                </RowComponent>
              );
            } else if (route.name === 'BookingNavigator') {
              return (
                <RowComponent
                  styles={{
                    alignItems: 'center',
                    borderRadius: 10,
                    backgroundColor: focused ? '#FFDDA2' : '#FFF',
                  }}>
                  <FontAwesomeIcon icon={faTicket} size={20} />
                  {focused && <Text style={style.tabLabel}>Booking</Text>}
                </RowComponent>
              );
            } else if (route.name === 'AnnouncementNavigator') {
              return (
                <RowComponent
                  styles={{
                    alignItems: 'center',
                    borderRadius: 10,
                    backgroundColor: focused ? '#FFDDA2' : '#FFF',
                  }}>
                  <FontAwesomeIcon icon={faBell} size={20} />
                  {focused && <Text style={style.tabLabel}>News</Text>}
                </RowComponent>
              );
            } else if (route.name === 'ProfileNavigator') {
              return (
                <RowComponent
                  styles={{
                    alignItems: 'center',
                    borderRadius: 10,
                    backgroundColor: focused ? '#FFDDA2' : '#FFF',
                  }}>
                  <FontAwesomeIcon icon={faUser} size={20} />
                  {focused && <Text style={style.tabLabel}>Account</Text>}
                </RowComponent>
              );
            }
          },
        };
      }}>
      <Tab.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={{headerTitle: 'Home'}}
      />
      <Tab.Screen
        name="BookingNavigator"
        component={BookingNavigator}
        options={{headerTitle: 'Booking'}}
      />
      <Tab.Screen
        name="AnnouncementNavigator"
        component={AnnouncementNavigator}
        options={{headerTitle: 'Announcement'}}
      />
      <Tab.Screen
        name="ProfileNavigator"
        component={ProfileNavigator}
        options={{headerTitle: 'Profile'}}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
