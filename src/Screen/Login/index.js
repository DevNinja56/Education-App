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

const Login = props => {
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
          BG_Color={Config.COLORS.primary}
          Status_Color={Config.COLORS.primary}
          isLogin={true}
        />
        <View style={commonStyles.loginTopView}>
          <Text style={commonStyles.logoText}>{'LOGO'}</Text>
        </View>
        <View style={commonStyles.smallSpace} />
        <View style={commonStyles.innerView}>
          <View style={commonStyles.smallSpace} />
          <Text
            style={{
              ...commonStyles.bigBoldText,
              //paddingLeft: widthPercentageToDP(3),
            }}>
            {'Sign In'}
          </Text>
          <Text style={styles.mediumText}>{'Add your info to login'}</Text>
          <View style={commonStyles.smallSpace} />
          <View style={commonStyles.smallSpace} />
          <PhoneInput
            ref={phoneInput}
            disableArrowIcon={false}
            countryPickerProps={{withAlphaFilter: true}}
            containerStyle={{
              backgroundColor: 'transparent',
              width: '100%',
              height: widthPercentageToDP(15),
              backgroundColor: Config.COLORS.white,
              borderRadius: widthPercentageToDP(4),
              borderWidth: widthPercentageToDP(0.2),
              borderColor: Config.COLORS.borderColor,
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
          <View style={commonStyles.smallSpace} />
          <Text style={styles.regularText}>{'Forgot Password ?'}</Text>
          <View style={commonStyles.space} />
          <RoundBtn
            clickHandler={() => {
              props.navigation.navigate('OTP',{
                isLogin: true
              });
            }}
            btnText={'Next'}
            styles={{
              width: widthPercentageToDP(70),
            }}
          />
          <View style={commonStyles.space} />

          <Text
            style={{
              ...styles.mediumText,
              color: Config.COLORS.black,
              textAlign: 'center',
            }}>
            {'By continuing, you agree to accept our' + '\n'}
            <Text
              style={{
                ...styles.mediumText,
                fontFamily: Config.FONTS.semiBold,
                color: Config.COLORS.black,
              }}>
              {'Privacy Policy '}
              <Text style={{...styles.mediumText, color: Config.COLORS.black}}>
                {' & '}
              </Text>
              <Text
                style={{
                  ...styles.mediumText,
                  fontFamily: Config.FONTS.semiBold,
                  color: Config.COLORS.black,
                }}>
                {'Terms of Service'}
              </Text>
            </Text>
          </Text>

          <View style={commonStyles.space} />

          <Text style={styles.regularText2}>
            {"Don't have an account ? "}
            <Text
              onPress={() => props.navigation.navigate('NameSelection')}
              style={styles.semiBoldText}>
              {'SIGN UP'}
            </Text>
          </Text>
        </View>
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

export default Login;
