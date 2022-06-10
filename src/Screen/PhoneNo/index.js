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

const PhoneNo = props => {
  const [phoneNo, setPhoneNo] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const phoneInput = useRef();

  const _onCheck = () => {
    const checkValid = phoneInput.current?.isValidNumber(phoneNo);
    if (!checkValid) {
      console.log('phone no is not valid');
      return;
    } else if (checkValid) {
      console.log('phone no is verified');
      return;
    }
  };

  return (
    <SafeAreaView style={commonStyles.container}>
      <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 1}}>
        <Header
          leftClick={() => props.navigation.goBack()}
          BG_Color={Config.COLORS.white}
          Status_Color={Config.COLORS.white}
        />
        <Text style={commonStyles.title}>
          {'What Is Your Phone' + '\n' + 'Number?'}
        </Text>
        <FastImage
          source={require('../../images/phone.png')}
          style={{
            width: widthPercentageToDP(70),
            height: widthPercentageToDP(70),
            marginTop: heightPercentageToDP(2),
            alignSelf: 'center',
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
        <View style={commonStyles.space} />
        <PhoneInput
          ref={phoneInput}
          disableArrowIcon={false}
          countryPickerProps={{withAlphaFilter: true}}
          containerStyle={{
            backgroundColor: 'transparent',
            width: widthPercentageToDP(70),
            height: widthPercentageToDP(15),
            alignSelf: 'center',
            borderBottomWidth: widthPercentageToDP(0.1),
            borderBottomColor: Config.COLORS.black,
          }}
          textInputStyle={{
            width: widthPercentageToDP(55),
            height: widthPercentageToDP(15),
            color: Config.COLORS.black,
            fontSize: widthPercentageToDP(4),
            fontFamily: Config.FONTS.regular,
          }}
          textContainerStyle={{
            backgroundColor: 'transparent',
            color: Config.COLORS.black,
            width: widthPercentageToDP(55),
            height: widthPercentageToDP(15),
          }}
          codeTextStyle={{
            color: Config.COLORS.black,
            fontSize: widthPercentageToDP(4),
            fontFamily: Config.FONTS.regular,
          }}
          textInputProps={{
            placeholderTextColor: Config.COLORS.grey,
          }}
          defaultValue={phoneNo}
          defaultCode="PK"
          layout="first"
          onChangeText={text => {
            setPhoneNo(text);
          }}
          onChangeFormattedText={text => {
            setFormattedValue(text);
          }}
          withDarkTheme={false}
          //withShadow
          //autoFocus
          placeholder={'Enter Number'}
        />
        <View style={commonStyles.space} />
        <View style={commonStyles.space} />
        <RoundBtn
          clickHandler={() => {
            props.navigation.navigate('OTP', {
              isLogin: false,
            });
          }}
          btnText={'Next'}
        />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default PhoneNo;
