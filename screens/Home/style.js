import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  header: {
    color: '#050505',
    fontSize: scaleFontSize(18),
    fontFamily: getFontFamily('Poppins', 500),
    marginTop: verticalScale(24),
    marginLeft: horizontalScale(16),
  },
  searchBar: {
    marginVertical: horizontalScale(16),
    marginTop: verticalScale(16),
  },
  bookingContainer: {
    marginTop: verticalScale(16),
    marginHorizontal: horizontalScale(16),
  },
  servicesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(16),
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#050505',
    fontSize: scaleFontSize(12),
    fontFamily: getFontFamily('Poppins', 400),
    marginTop: verticalScale(4),
  },
  image: {
    backgroundColor: '#01635D',
    borderRadius: horizontalScale(15),
    padding: horizontalScale(10),
  },
});

export default style;
