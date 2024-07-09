import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontFamily: getFontFamily('Poppins', 700),
  },
});

export default styles;
