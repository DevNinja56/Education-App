import React, {useRef, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
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

const Password = props => {
  return (
    <SafeAreaView style={commonStyles.container}>
      <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 1}}>
        <Header
          leftClick={() => props.navigation.goBack()}
          BG_Color={Config.COLORS.white}
          Status_Color={Config.COLORS.white}
        />
        <Text style={commonStyles.title}>{'Set New Password'}</Text>
        <View style={commonStyles.smallSpace} />
        <FastImage
          source={require('../../images/password.png')}
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
          placeholder={'Password'}
          placeholderTextColor={Config.COLORS.grey}
          leftIcon={
            <Feather name="lock" color={Config.COLORS.grey} size={30} />
          }
          leftIconContainerStyle={commonStyles.leftIconStyle}
          inputContainerStyle={{
            borderBottomWidth: 0,
            //width: widthPercentageToDP(70),
            //backgroundColor:"red"
          }}
          inputStyle={{...commonStyles.input, width: widthPercentageToDP(80)}}
          containerStyle={{
            ...commonStyles.inputContainer,
            width: widthPercentageToDP(80),
          }}
          onChangeText={text => console.log(text)}
          //value={number}
        />
        <Input
          placeholder={'Confirm Password'}
          placeholderTextColor={Config.COLORS.grey}
          leftIcon={
            <Feather name="lock" color={Config.COLORS.grey} size={30} />
          }
          leftIconContainerStyle={commonStyles.leftIconStyle}
          inputContainerStyle={{
            borderBottomWidth: 0,
          }}
          inputStyle={{...commonStyles.input, width: widthPercentageToDP(80)}}
          containerStyle={{
            ...commonStyles.inputContainer,
            width: widthPercentageToDP(80),
          }}
          onChangeText={text => console.log(text)}
          //value={number}
        />

        <View style={commonStyles.space} />
        <View style={commonStyles.smallSpace} />
        <RoundBtn
          clickHandler={() => {
            props.navigation.navigate('Congratulation');
          }}
          btnText={'Next'}
        />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Password;
