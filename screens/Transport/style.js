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
  detailInputContainer: {
    flexDirection: 'row',
    marginTop: verticalScale(8),
  },
  input: {
    textAlign: 'center',
    fontSize: scaleFontSize(16),
    fontFamily: getFontFamily('Poppins', 500),
    color: '#01635D',
    marginLeft: horizontalScale(4),
  },
  inputContainer: {
    alignItems: 'center',
    marginRight: horizontalScale(24),
    borderBottomWidth: horizontalScale(1),
    borderBottomColor: '#01635D',
    flexDirection: 'row',
  },
  classContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(8),
  },
  selectedButton: {
    backgroundColor: '#089083',
  },
  unSelectedButton: {
    backgroundColor: '#FFF',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: verticalScale(8),
    paddingHorizontal: horizontalScale(16),
    borderRadius: horizontalScale(12),
    marginRight: horizontalScale(8),
  },
  selectedButtonText: {
    color: '#FFF',
    fontSize: scaleFontSize(14),
    fontFamily: getFontFamily('Poppins', 500),
  },
  unSelectedButtonText: {
    color: '#089083',
    fontSize: scaleFontSize(14),
    fontFamily: getFontFamily('Poppins', 500),
  },
  transportButton: {
    padding: horizontalScale(9),
    marginRight: horizontalScale(16),
    borderRadius: horizontalScale(15),
  },
  searchButton: {
    backgroundColor: '#FEA36B',
    marginTop: verticalScale(25),
    paddingHorizontal: horizontalScale(40),
    paddingVertical: verticalScale(15),
    borderRadius: horizontalScale(25),
  },
  searchButtonText: {
    color: '#FFF',
    fontSize: scaleFontSize(18),
    fontFamily: getFontFamily('Poppins', 700),
    textAlign: 'center',
  },
  item: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  pickerItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(16),
  },
  ticketImage: {
    width: '100%',
    marginBottom: verticalScale(16),
  },
  ticketContainer: {
    marginTop: verticalScale(16),
  },
});

export default style;
