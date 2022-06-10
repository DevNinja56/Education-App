import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Header} from '@rneui/themed';
import Config from '../../utils/config';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const Headers = props => {
  return (
    <SafeAreaProvider style={{flex: 0}}>
      <Header
        placement="center"
        leftComponent={
          !props.isLogin && (
            <TouchableOpacity onPress={props.leftClick}>
              <MaterialIcons
                name={'arrow-back-ios'}
                color={Config.COLORS.black}
                size={20}
              />
            </TouchableOpacity>
          )
        }
        centerComponent={<Text style={styles.title}>{props.title}</Text>}
        containerStyle={{
          backgroundColor: props.BG_Color,
          borderBottomWidth: 0,
          height: heightPercentageToDP(8),
        }}
        statusBarProps={{
          backgroundColor: props.Status_Color,
        }}
        barStyle="dark-content"
      />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: widthPercentageToDP(4.5),
    fontFamily: Config.FONTS.regular,
    color: Config.COLORS.black,
  },
});

export default Headers;
