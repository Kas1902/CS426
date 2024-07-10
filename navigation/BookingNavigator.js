import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Booking from '../screens/Booking/Booking';
import TransportBooking from '../screens/Transport/TransportBooking';
import TransportSelectSeats from '../screens/Transport/TransportSelectSeats';
import TransportFilter from '../screens/Transport/TransportFilter';
import TransportBoadingPass from '../screens/Transport/TransportBoardingPass';
import TransportFlight from '../screens/Transport/TransportFlight';

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
        name="TransportBoardingPass"
        component={TransportBoadingPass}
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
