import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  useWindowDimensions,
} from 'react-native';
import {
  scaleFontSize,
  verticalScale,
  horizontalScale,
} from '../../assets/styles/scaling';
import {getFontFamily} from '../../assets/fonts/helper';

const NextButton = ({scrollTo}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={scrollTo} style={styles.button}>
        <Text style={styles.text}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#FEA36B',
    paddingVertical: verticalScale(14),
    borderRadius: horizontalScale(40),
    width: horizontalScale(330),
  },
  text: {
    textAlign: 'center',
    fontSize: scaleFontSize(18),
    color: '#fff',
    fontFamily: getFontFamily('Poppins', 700),
  },
});

export default NextButton;
