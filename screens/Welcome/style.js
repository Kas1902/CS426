import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  container: {
    marginHorizontal: horizontalScale(16),
  },
  welcomeContainer: {
    marginTop: verticalScale(166),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(32),
  },
  image: {
    width: horizontalScale(64),
    height: verticalScale(48),
  },
  appName: {
    textAlign: 'center',
    color: '#01635D',
    fontSize: scaleFontSize(32),
    fontFamily: getFontFamily('Poppins', 500),
  },
  welcome: {
    textAlign: 'center',
    color: '#01635D',
    fontSize: scaleFontSize(18),
    fontFamily: getFontFamily('Poppins', 600),
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: verticalScale(120),
  },
  signUp: {
    fontFamily: getFontFamily('Poppins', 700),
    fontSize: scaleFontSize(18),
    textAlign: 'center',
    color: '#FFF',
  },
  login: {
    fontFamily: getFontFamily('Poppins', 700),
    fontSize: scaleFontSize(18),
    textAlign: 'center',
    color: '#FEA36B',
  },
  signUpButton: {
    width: '100%',
    paddingVertical: verticalScale(14),
    borderRadius: horizontalScale(40),
    backgroundColor: '#FEA36B',
  },
  loginButton: {
    width: '100%',
    marginTop: verticalScale(16),
    paddingVertical: verticalScale(14),
    borderRadius: horizontalScale(40),
    backgroundColor: '#FFF',
  },
});

export default style;
