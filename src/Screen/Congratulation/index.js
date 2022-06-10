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
import Animation from '../../Component/BadeAnimation';

const Congratulation = props => {
  return (
    <SafeAreaView style={commonStyles.container}>
      <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 1}}>
        <Header
          leftClick={() => props.navigation.goBack()}
          BG_Color={Config.COLORS.white}
          Status_Color={Config.COLORS.white}
        />
        <Text style={commonStyles.title}>{'Congratulation'}</Text>
        <Text style={commonStyles.textTitle}>
          {'Your Account Is Created' + '\n' + 'Successfully'}
        </Text>
        <View style={commonStyles.smallSpace} />
        <Animation />
        {/* <View style={commonStyles.space} /> */}
        <Text style={commonStyles.textTitle}>
          {'Your Account Is Created' + '\n' + 'Continue'}
        </Text>
        <View style={commonStyles.space} />
        <View style={commonStyles.smallSpace} />
        <RoundBtn
          clickHandler={() => {
            props.navigation.navigate('ClassSelection');
          }}
          btnText={'Next'}
        />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Congratulation;
