import {StyleSheet} from 'react-native';
import {horizontalScale, scaleFontSize} from '../assets/styles/scaling';
import {getFontFamily} from '../assets/fonts/helper';

const style = StyleSheet.create({
  tabLabel: {
    fontSize: scaleFontSize(12),
    color: '#050505',
    fontFamily: getFontFamily('Poppins', 600),
    lineHeight: scaleFontSize(14),
    paddingHorizontal: horizontalScale(8),
  },
});

export default style;
