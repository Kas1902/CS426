import {StyleSheet} from 'react-native';
import {horizontalScale, scaleFontSize} from '../../assets/styles/scaling';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  title1: {
    fontFamily: getFontFamily('Poppins', 500),
    fontSize: scaleFontSize(18),
    lineHeight: scaleFontSize(29),
    color: '#050505',
  },
  title2: {
    fontFamily: getFontFamily('Poppins', 400),
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(22),
    color: '#050505',
  },
  title3: {
    fontFamily: getFontFamily('Poppins', 600),
    fontSize: scaleFontSize(24),
    lineHeight: scaleFontSize(29),
    color: '#050505',
  },
  title4: {
    fontFamily: getFontFamily('Poppins', 600),
    fontSize: scaleFontSize(14),
    lineHeight: scaleFontSize(20),
    color: '#727272',
  },
  title5: {
    marginLeft: horizontalScale(8),
    fontFamily: getFontFamily('Poppins', 500),
    fontSize: scaleFontSize(14),
    lineHeight: scaleFontSize(20),
    color: '#050505',
  },
});

export default style;
