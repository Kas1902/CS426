import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  verticalScale,
  scaleFontSize,
} from '../../assets/styles/scaling';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: horizontalScale(16),
    marginTop: verticalScale(28),
  },
  placeContainer: {
    marginTop: verticalScale(18),
  },
  datePickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(18),
  },
  switchButton: {
    width: horizontalScale(40),
    height: verticalScale(40),
    backgroundColor: '#FEA36B',
    borderRadius: horizontalScale(15),
    padding: horizontalScale(14),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '20%',
    right: horizontalScale(16),
  },
  toInput: {
    marginTop: verticalScale(8),
  },
  datePicker: {
    width: '48%',
  },
  header2: {
    marginTop: verticalScale(32),
  },
});

export default style;
