import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(60),
  },
  itemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 0.7,
    justifyContent: 'center',
  },
  description: {
    color: '#050505',
    fontSize: scaleFontSize(18),
    fontFamily: getFontFamily('Poppins', 500),
    textAlign: 'center',
    paddingHorizontal: horizontalScale(66.5),
  },
  descriptionContainer: {
    flex: 0.3,
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: verticalScale(30),
    marginHorizontal: horizontalScale(16),
  },
  button: {
    width: '90%',
    backgroundColor: '#FEA36B',
    paddingVertical: verticalScale(14),
    borderRadius: horizontalScale(40),
    marginHorizontal: horizontalScale(16),
  },
  text: {
    textAlign: 'center',
    fontSize: scaleFontSize(18),
    color: '#fff',
    fontFamily: getFontFamily('Poppins', 700),
  },
  dotContainer: {
    flexDirection: 'row',
    height: verticalScale(64),
  },
  dot: {
    height: verticalScale(10),
    borderRadius: horizontalScale(5),
    backgroundColor: '#FEA36B',
    marginHorizontal: horizontalScale(8),
  },
});

export default style;
