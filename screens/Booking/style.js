import {StyleSheet} from 'react-native';
import {verticalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: verticalScale(16),
  },
  itemContainer: {
    marginBottom: verticalScale(16),
  },
  headerContainer: {
    marginBottom: verticalScale(24),
  },
});

export default style;
