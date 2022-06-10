import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {commonStyles} from '../../utils/commonStyles';
import Config from '../../utils/config';
import RoundBtn from '../../Component/RoundBtn';
import Header from '../../Component/Header';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const NameSelection = props => {
  return (
    <SafeAreaView style={commonStyles.container}>
      <Header
        leftClick={() => props.navigation.goBack()}
        BG_Color={Config.COLORS.lightOffWhite}
        Status_Color={Config.COLORS.lightOffWhite}
        isLogin={true}
      />
      <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={commonStyles.space} />
        <View style={commonStyles.space} />
        <Text style={commonStyles.title}>{"What's Your Name ?"}</Text>
        <View style={commonStyles.space} />
        <View style={commonStyles.space} />
        <TextInput
          style={commonStyles.input}
          placeholder="First Name"
          placeholderTextColor={Config.COLORS.grey}
          textAlign={'center'}
        />
        <View style={commonStyles.space} />
        <TextInput
          style={commonStyles.input}
          placeholder="Last Name"
          placeholderTextColor={Config.COLORS.grey}
          textAlign={'center'}
        />
        <View style={commonStyles.space} />
        <View style={commonStyles.space} />
        <View style={commonStyles.space} />
        <View style={commonStyles.space} />
        <View style={commonStyles.space} />
        <View style={commonStyles.space} />
        <RoundBtn
          clickHandler={() => {
            props.navigation.navigate('GenderSelection');
          }}
          btnText={'Next'}
        />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default NameSelection;
