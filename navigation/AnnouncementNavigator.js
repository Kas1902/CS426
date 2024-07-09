import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Announcement from '../screens/Announcement/Announcement';

const AnnouncementNavigator = () => {
  const AnnouncementStack = createNativeStackNavigator();
  return (
    <AnnouncementStack.Navigator
      screenOptions={{header: () => null, headerShown: false}}>
      <AnnouncementStack.Screen name="Announcement" component={Announcement} />
    </AnnouncementStack.Navigator>
  );
};

export default AnnouncementNavigator;
