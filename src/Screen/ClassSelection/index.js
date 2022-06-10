import React, {useRef, useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, ScrollView} from 'react-native';
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
import Items from '../../Component/ClassItem';

const Congratulation = props => {
  return (
    <SafeAreaView style={commonStyles.container}>
      <Header
        leftClick={() => props.navigation.goBack()}
        BG_Color={Config.COLORS.white}
        Status_Color={Config.COLORS.white}
        title={'Complete Your Profile'}
      />
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={commonStyles.temView}>
          <View style={{...commonStyles.percentView, width: '50%'}} />
        </View>
        <View style={commonStyles.smallSpace} />
        <FastImage
          source={require('../../images/otp.png')}
          style={{
            width: widthPercentageToDP(65),
            height: widthPercentageToDP(65),
            marginTop: heightPercentageToDP(2),
            alignSelf: 'center',
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
        <View style={commonStyles.smallSpace} />
        <Text style={{...commonStyles.title, fontFamily: Config.FONTS.light}}>
          {'Please Select Your'}
        </Text>
        <Text
          style={{
            ...commonStyles.title,
            marginTop: heightPercentageToDP(-1),
            fontFamily: Config.FONTS.medium,
          }}>
          {'Class'}
        </Text>

        <FlatList
          data={[0, 1, 2, 3]}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          style={{alignSelf: 'center'}}
          keyExtractor={(item, index) => 'unique' + index}
          renderItem={({item, index}) => {
            return (
              <Items
                className={'9'}
                subText={'th'}
                subjectName={'Physics, chemistry and math'}
                clickHandler={() => {}}
              />
            );
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Congratulation;
