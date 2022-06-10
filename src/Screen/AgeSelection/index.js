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
import AgePicker from '../../Component/AgePicker';

const AgeSelection = props => {
  const [age, setAge] = React.useState();
  const callback1 = React.useCallback(age => {
    setAge(age);
  }, []);

  React.useEffect(() => {
    console.log(age);
  }, [age]);

  return (
    <SafeAreaView style={commonStyles.container}>
      <Header
        leftClick={() => props.navigation.goBack()}
        BG_Color={Config.COLORS.white}
        Status_Color={Config.COLORS.white}
      />
      <Text style={commonStyles.title}>{'How Old Are You?'}</Text>
      <FastImage
        source={require('../../images/age.png')}
        style={{
          width: widthPercentageToDP(70),
          height: widthPercentageToDP(70),
          marginTop: heightPercentageToDP(2),
          alignSelf: 'center',
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
      <View style={commonStyles.space} />
      <Text style={commonStyles.textTitle}>
        {'Age '}
        <Text style={{...commonStyles.textTitle, color: Config.COLORS.primary}}>
          {!age ? "" : age.AgeConditions.currentAge + 1} {'Years'}
        </Text>
      </Text>
      <AgePicker parentCallback={callback1} />
      <RoundBtn
        clickHandler={() => {
          props.navigation.navigate('PhoneNo');
        }}
        btnText={'Next'}
      />
    </SafeAreaView>
  );
};

export default AgeSelection;
