import {StyleSheet} from 'react-native';
import {horizontalScale, scaleFontSize} from '../../assets/styles/scaling';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  searchInput: {
    flex: 1,
    marginLeft: horizontalScale(6),
    height: '100%',
    fontFamily: getFontFamily('Inter', 400),
    fontSize: scaleFontSize(14),
    lineHeight: scaleFontSize(14),
    color: '#727272',
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(16),
    backgroundColor: '#FFF',
    marginHorizontal: horizontalScale(16),
    borderRadius: horizontalScale(15),
  },
  searchIconContainer: {
    backgroundColor: '#FEA36B',
    padding: horizontalScale(6),
    borderRadius: horizontalScale(10),
  },
});

export default style;
