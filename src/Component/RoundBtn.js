import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import Config from '../utils/config';

const Touchable = props => {
  return (
    <TouchableOpacity
      onPress={props.clickHandler}
      style={{...styles.container, ...props.styles}}>
      <Text style={{...styles.btnText, ...props.textStyle}}>
        {props.btnText}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: widthPercentageToDP(80),
    height: heightPercentageToDP(7.5),
    borderRadius: widthPercentageToDP(10),
    backgroundColor: Config.COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:"center"
  },
  btnText: {
    fontFamily: Config.FONTS.medium,
    fontSize: widthPercentageToDP(4.5),
    color: Config.COLORS.white,
  },
});

export default Touchable;
