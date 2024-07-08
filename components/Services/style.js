import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
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
    padding: horizontalScale(6),
  },
});

export default style;
