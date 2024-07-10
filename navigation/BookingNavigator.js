import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Booking from '../screens/Booking/Booking';
import TransportBooking from '../screens/Transport/TransportBooking';
import TransportSelectSeats from '../screens/Transport/TransportSelectSeats';
import TransportFilter from '../screens/Transport/TransportFilter';
import TransportFlight from '../screens/Transport/TransportFlight';
import TransportBoardingPass from '../screens/Transport/TransportBoardingPass';

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
      <BookingStack.Screen name="TransportFlight" component={TransportFlight} />
      <BookingStack.Screen
        name="BoardingPass"
        component={TransportBoardingPass}
      />
      <BookingStack.Screen name="TransportFilter" component={TransportFilter} />
      <BookingStack.Screen
        name="TransportSelectSeats"
        component={TransportSelectSeats}
      />
    </BookingStack.Navigator>
  );
};

export default BookingNavigator;
