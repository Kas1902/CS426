/* eslint-disable no-alert */
export default async function getItems(navigation) {
  return [
    {
      id: '1',
      image: require('../../assets/images/Booking/Hotel.png'),
      onPress: () => {
        alert('This function is not available yet');
      },
    },
    {
      id: '2',
      image: require('../../assets/images/Booking/Transport.png'),
      onPress: () => {
        navigation.navigate('TransportBooking');
      },
    },
    {
      id: '3',
      image: require('../../assets/images/Booking/Trips.png'),
      onPress: () => {
        alert('This function is not available yet');
      },
    },
    {
      id: '4',
      image: require('../../assets/images/Booking/Events.png'),
      onPress: () => {
        alert('This function is not available yet');
      },
    },
  ];
}
