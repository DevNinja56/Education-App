import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {commonStyles} from '../../utils/commonStyles';
import Config from '../../utils/config';
import RoundBtn from '../../Component/RoundBtn';
import Header from '../../Component/Header';
import FastImage from 'react-native-fast-image';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const NameSelection = props => {
  return (
    <SafeAreaView style={commonStyles.container}>
      <Header
        leftClick={() => props.navigation.goBack()}
        BG_Color={Config.COLORS.white}
        Status_Color={Config.COLORS.white}
      />
      <Text style={commonStyles.title}>{'Choose Your Gender'}</Text>
      <View
        style={{
          ...commonStyles.container,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={()=> props.navigation.navigate('AgeSelection')}>
          <FastImage
            source={require('../../images/male.png')}
            style={{
              width: widthPercentageToDP(60),
              height: widthPercentageToDP(60),
            }}
            resizeMode = {FastImage.resizeMode.contain}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> props.navigation.navigate('AgeSelection')}>
          <FastImage
            source={require('../../images/female.png')}
            style={{
              width: widthPercentageToDP(60),
              height: widthPercentageToDP(60),
            }}
            resizeMode = {FastImage.resizeMode.contain}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NameSelection;
