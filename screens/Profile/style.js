import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    marginTop: verticalScale(30),
  },
  image: {
    alignItems: 'center',
    marginTop: verticalScale(24),
    marginBottom: verticalScale(8),
  },
  profile: {
    marginTop: verticalScale(42),
    marginLeft: horizontalScale(16),
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(24),
  },
  container: {
    alignItems: 'center',
    marginHorizontal: horizontalScale(16),
    marginTop: verticalScale(24),
  },
});

export default style;
