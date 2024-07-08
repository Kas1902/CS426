import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: horizontalScale(32),
    marginTop: verticalScale(150),
    marginBottom: verticalScale(72),
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: horizontalScale(64),
    height: verticalScale(48),
  },
  appName: {
    textAlign: 'center',
    color: 'white',
    fontSize: scaleFontSize(32),
    fontFamily: getFontFamily('Poppins', 400),
  },
  logoContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(58),
  },
});

export default style;
