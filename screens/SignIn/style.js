import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  chevron: {
    marginTop: 25,
    marginLeft: 16,
  },
  welcomeContainer: {
    marginTop: 48,
  },
  welcomeBack: {
    color: '#050505',
    fontSize: scaleFontSize(24),
    fontFamily: getFontFamily('Poppins', 600),
    textAlign: 'center',
  },
  text: {
    color: '#050505',
    fontSize: scaleFontSize(16),
    fontFamily: getFontFamily('Poppins', 600),
    textAlign: 'center',
  },
  signInContainer: {
    marginTop: verticalScale(48),
    marginHorizontal: horizontalScale(16),
  },
  emailInput: {
    color: '#727272',
    backgroundColor: '#FFF',
    padding: horizontalScale(16),
    borderRadius: horizontalScale(15),
  },
  passwordInput: {
    marginTop: verticalScale(16),
    color: '#727272',
    backgroundColor: '#FFF',
    padding: horizontalScale(16),
    borderRadius: horizontalScale(15),
  },
  signInButton: {
    marginTop: verticalScale(32),
    width: '100%',
    paddingVertical: verticalScale(14),
    borderRadius: horizontalScale(25),
    backgroundColor: '#FEA36B',
  },
  signIn: {
    fontFamily: getFontFamily('Poppins', 700),
    fontSize: scaleFontSize(18),
    textAlign: 'center',
    color: '#FFF',
  },
  otherOptionsContainer: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  signUpContainer: {
    flexDirection: 'row',
  },
  new: {
    color: '#050505',
    fontSize: scaleFontSize(14),
    fontFamily: getFontFamily('Poppins', 400),
  },
  signUp: {
    color: '#01635D',
    fontSize: scaleFontSize(16),
    fontFamily: getFontFamily('Poppins', 500),
    marginLeft: horizontalScale(4),
  },
  forgot: {
    color: '#050505',
    fontSize: scaleFontSize(16),
    fontFamily: getFontFamily('Poppins', 500),
  },
  alternativeSignInContainer: {
    marginTop: verticalScale(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  lineBorder: {
    flex: 1,
    height: 1,
    borderTopWidth: 1,
    borderType: 'solid',
    borderColor: '#727272',
  },
  or: {
    paddingHorizontal: horizontalScale(8),
    textAlign: 'center',
    fontSize: scaleFontSize(16),
    fontFamily: getFontFamily('Poppins', 500),
    color: '#727272',
  },
  socialLogInContainer: {
    marginTop: verticalScale(10),
    justifyContent: 'center',
    flexDirection: 'row',
  },
  socialButton: {
    padding: horizontalScale(14),
    marginHorizontal: horizontalScale(8),
    width: horizontalScale(50),
    height: verticalScale(50),
    borderRadius: horizontalScale(20),
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: horizontalScale(30),
    height: verticalScale(30),
  },
});

export default style;
