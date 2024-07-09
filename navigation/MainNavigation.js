import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Splash from '../screens/Splash/Splash';
import Onboarding from '../screens/Onboarding/Onboarding';
import Welcome from '../screens/Welcome/Welcome';
import SignIn from '../screens/SignIn/SignIn';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{header: () => null, headerShown: false}}
      initialRouteName="Onboarding">
      <Stack.Screen name={'Splash'} component={Splash} />
      <Stack.Screen name={'Onboarding'} component={Onboarding} />
      <Stack.Screen name={'Welcome'} component={Welcome} />
      <Stack.Screen name={'SignIn'} component={SignIn} />
      <Stack.Screen name={'Main'} component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
