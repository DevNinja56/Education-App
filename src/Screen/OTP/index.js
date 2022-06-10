import React, {useRef, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {commonStyles} from '../../utils/commonStyles';
import Config from '../../utils/config';
import RoundBtn from '../../Component/RoundBtn';
import Header from '../../Component/Header';
import FastImage from 'react-native-fast-image';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import PhoneInput from 'react-native-phone-number-input';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {Input} from '@rneui/themed';
import Feather from 'react-native-vector-icons/Feather';

const OTP = props => {

  const isLogin = props.route.params.isLogin


  return (
    <SafeAreaView style={commonStyles.container}>
      <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 1}}>
        <Header
          leftClick={() => props.navigation.goBack()}
          BG_Color={Config.COLORS.white}
          Status_Color={Config.COLORS.white}
        />
        <Text style={commonStyles.title}>{'OTP Verification'}</Text>
        <Text
          style={{...commonStyles.textTitle, fontSize: widthPercentageToDP(4)}}>
          {'Enter The OTP Send To +91 999 999 99'}
        </Text>
        <FastImage
          source={require('../../images/otp.png')}
          style={{
            width: widthPercentageToDP(65),
            height: widthPercentageToDP(65),
            marginTop: heightPercentageToDP(2),
            alignSelf: 'center',
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
        <View style={commonStyles.smallSpace} />
        <Input
          placeholder={'6 Digit Code'}
          placeholderTextColor={Config.COLORS.grey}
          leftIcon={
            <Feather name="lock" color={Config.COLORS.grey} size={30} />
          }
          leftIconContainerStyle={commonStyles.leftIconStyle}
          inputContainerStyle={{
            borderBottomWidth: 0,
          }}
          inputStyle={{...commonStyles.input, width: widthPercentageToDP(90)}}
          containerStyle={commonStyles.inputContainer}
          onChangeText={text => console.log(text)}
          //value={number}
        />
        <View style={commonStyles.smallSpace} />
        <View style={commonStyles.smallSpace} />
        <Text style={commonStyles.textTitle}>
          {'Time Remaining '}
          <Text style={{...commonStyles.textTitle, color: Config.COLORS.black}}>
            {'30 Sec'}
          </Text>
        </Text>
        {/* <View style={commonStyles.space} /> */}
        <View style={commonStyles.smallSpace} />
        <RoundBtn
          clickHandler={() => {
            if(isLogin){
              props.navigation.navigate('Home');
            }else{
              props.navigation.navigate('Password');
            }
            
          }}
          btnText={'Next'}
        />
        <View style={commonStyles.smallSpace} />

        <Text style={styles.regularText2}>
          {"Don't receive the OTP? "}
          <Text
            //onPress={() => props.navigation.navigate('NameSelection')}
            style={styles.semiBoldText}>
            {'RESEND'}
          </Text>
        </Text>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mediumText: {
    fontFamily: Config.FONTS.medium,
    fontSize: widthPercentageToDP(4),
    color: Config.COLORS.darkGrey,
  },
  regularText: {
    fontFamily: Config.FONTS.regular,
    fontSize: widthPercentageToDP(4),
    color: Config.COLORS.lightGrey,
  },
  regularText2: {
    fontFamily: Config.FONTS.regular,
    fontSize: widthPercentageToDP(3.8),
    color: Config.COLORS.black,
    textAlign: 'center',
  },
  semiBoldText: {
    fontFamily: Config.FONTS.semiBold,
    fontSize: widthPercentageToDP(3.8),
    color: Config.COLORS.primary,
  },
});

export default OTP;
