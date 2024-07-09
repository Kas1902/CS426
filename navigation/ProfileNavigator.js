import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Profile from '../screens/Profile/Profile';
import PersonalInfo from '../screens/Profile/PersonalInfo';

const ProfileNavigator = () => {
  const ProfileStack = createNativeStackNavigator();
  return (
    <ProfileStack.Navigator
      screenOptions={{header: () => null, headerShown: false}}>
      <ProfileStack.Screen name="Profile" component={Profile} />
      <ProfileStack.Screen name="PersonalInfo" component={PersonalInfo} />
    </ProfileStack.Navigator>
  );
};

export default ProfileNavigator;
