import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import Config from '../../utils/config';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ClassItem = props => {
  return (
    <TouchableOpacity onPress={props.clickHandler} style={styles.contianer}>
      <View style={styles.innerView}>
        <View style={styles.row}>
          <View style={styles.rowText}>
            {/*View to wrap multiple text*/}
            <Text style={styles.bigText}>{props.className}</Text>
            {/*Superscript*/}
            <Text style={styles.smallText}>{props.subText}</Text>
          </View>
          <MaterialIcons
            name="keyboard-arrow-right"
            color={Config.COLORS.grey}
            size={25}
            style={{
              position: 'absolute',
              right: '0%',
              top: '4%',
            }}
          />
        </View>
        <View style={styles.space} />
        <View style={styles.space} />
        <Text style={styles.smallText}>{'Subjects'}</Text>
        <View style={styles.space} />
        <View style={styles.space} />
        <Text style={styles.mediumText}>{props.subjectName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  contianer: {
    width: widthPercentageToDP(44),
    height: heightPercentageToDP(23),
    borderWidth: widthPercentageToDP(0.2),
    borderColor: Config.COLORS.borderColor,
    backgroundColor: Config.COLORS.white,
    margin: widthPercentageToDP(1),
    borderRadius: widthPercentageToDP(3),
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerView: {
    width: widthPercentageToDP(37),
    height: heightPercentageToDP(19),
    //backgroundColor: 'red',
  },
  row: {
    width: widthPercentageToDP(37),
    flexDirection: 'row',
    alignItems: 'center',
    flex: 0,
  },
  rowText: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  bigText: {
    fontFamily: Config.FONTS.regular,
    fontSize: widthPercentageToDP(6.5),
    color: Config.COLORS.black,
    lineHeight: 30,
  },
  smallText: {
    fontFamily: Config.FONTS.light,
    fontSize: widthPercentageToDP(3),
    color: Config.COLORS.black,
    lineHeight: 15,
  },
  mediumText: {
    fontFamily: Config.FONTS.regular,
    fontSize: widthPercentageToDP(4),
    color: Config.COLORS.primary,
  },
  space: {
    height: heightPercentageToDP(1.5),
  },
});

export default ClassItem;
