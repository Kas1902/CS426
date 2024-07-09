import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Routes} from './Routes';

import Onboarding from '../screens/Onboarding/Onboarding';
import Welcome from '../screens/Welcome/Welcome';
import SignIn from '../screens/SignIn/SignIn';
import Home from '../screens/Home/Home';
import Splash from '../screens/Splash/Splash';
import Booking from '../screens/Booking/Booking';
import TransportBooking from '../screens/Transport/TransportBooking';
import Announcement from '../screens/Announcement/Announcement';
import Profile from '../screens/Profile/Profile';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Tab.Navigator screenOptions={{header: () => null, headerShown: false}}>
        <Tab.Screen name={Routes.Home} component={Home} />
        <Tab.Screen name={Routes.Booking} component={Booking} />
        <Tab.Screen name={Routes.Announcement} component={Announcement} />
        <Tab.Screen name={Routes.Profile} component={Profile} />
      </Tab.Navigator>
    </GestureHandlerRootView>
    /*<Stack.Navigator
      screenOptions={{header: () => null, headerShown: false}}
      initialRouteName="Onboarding">
      <Stack.Screen name={Routes.Splash} component={Splash} />
      <Stack.Screen name={Routes.Onboarding} component={Onboarding} />
      <Stack.Screen name={Routes.Welcome} component={Welcome} />
      <Stack.Screen name={Routes.SignIn} component={SignIn} />
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen name={Routes.Booking} component={Booking} />
      <Stack.Screen
        name={Routes.TransportBooking}
        component={TransportBooking}
      />
    </Stack.Navigator>*/
  );
};

export default MainNavigation;
