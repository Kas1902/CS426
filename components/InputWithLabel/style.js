import {StyleSheet} from 'react-native';
import {horizontalScale, scaleFontSize} from '../../assets/styles/scaling';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  searchInput: {
    width: '100%',
    fontFamily: getFontFamily('Inter', 400),
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(22),
    color: '#727272',
  },
  searchInputContainer: {
    flexDirection: 'column',
    alignItems: 'left',
    justifyContent: 'flex-start',
    paddingHorizontal: horizontalScale(16),
    paddingTop: horizontalScale(10),
    backgroundColor: '#FFF',
    borderRadius: horizontalScale(15),
  },
  text: {
    position: 'absolute',
    top: 6,
    left: 22,
    fontFamily: getFontFamily('Inter', 400),
    fontSize: scaleFontSize(12),
    lineHeight: scaleFontSize(16),
  },
});

export default style;
