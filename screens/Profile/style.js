import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    marginTop: verticalScale(30),
  },
  image: {
    alignItems: 'center',
    marginTop: verticalScale(24),
    marginBottom: verticalScale(8),
  },
  profile: {
    marginTop: verticalScale(42),
    marginLeft: horizontalScale(16),
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(24),
  },
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: horizontalScale(16),
    marginTop: verticalScale(28),
  },
  avatar: {
    marginTop: verticalScale(24),
  },
  avatarImage: {
    width: horizontalScale(120),
    height: verticalScale(120),
  },
  camera: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#FFF',
    borderRadius: horizontalScale(7),
    padding: horizontalScale(4),
  },
  inputContainer: {
    width: '100%',
    marginTop: verticalScale(32),
  },
  input: {
    marginBottom: verticalScale(16),
  },
  saveButton: {
    width: '100%',
    paddingVertical: verticalScale(14),
    borderRadius: horizontalScale(40),
    backgroundColor: '#FEA36B',
    marginTop: verticalScale(60),
  },
  save: {
    fontFamily: getFontFamily('Poppins', 700),
    fontSize: scaleFontSize(18),
    textAlign: 'center',
    color: '#FFF',
  },
  endButton: {
    width: '100%',
    paddingVertical: verticalScale(14),
    borderRadius: horizontalScale(40),
    backgroundColor: '#FFF',
    marginTop: verticalScale(105),
  },
  end: {
    marginLeft: horizontalScale(8),
    fontFamily: getFontFamily('Poppins', 700),
    fontSize: scaleFontSize(18),
    textAlign: 'center',
    color: '#FF3636',
  },
  endIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default style;
