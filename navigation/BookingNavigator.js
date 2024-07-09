import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Booking from '../screens/Booking/Booking';
import TransportBooking from '../screens/Transport/TransportBooking';

const BookingNavigator = () => {
  const BookingStack = createNativeStackNavigator();
  return (
    <BookingStack.Navigator
      screenOptions={{header: () => null, headerShown: false}}>
      <BookingStack.Screen name="Booking" component={Booking} />
      <BookingStack.Screen
        name="TransportBooking"
        component={TransportBooking}
      />
    </BookingStack.Navigator>
  );
};

export default BookingNavigator;
