import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';

import Onboarding from '../screens/Onboarding/Onboarding';
import Welcome from '../screens/Welcome/Welcome';
import SignIn from '../screens/SignIn/SignIn';
import Home from '../screens/Home/Home';
import Splash from '../screens/Splash/Splash';
import Booking from '../screens/Booking/Booking';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{header: () => null, headerShown: false}}
      initialRouteName="Onboarding">
      <Stack.Screen name={Routes.Splash} component={Splash} />
      <Stack.Screen name={Routes.Onboarding} component={Onboarding} />
      <Stack.Screen name={Routes.Welcome} component={Welcome} />
      <Stack.Screen name={Routes.SignIn} component={SignIn} />
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen name={Routes.Booking} component={Booking} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
