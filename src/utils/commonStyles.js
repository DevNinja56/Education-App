import {StyleSheet, Dimensions, Platform} from 'react-native';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import Config from './config';

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Config.COLORS.lightOffWhite,
  },
  space: {
    height: heightPercentageToDP(5),
  },
  smallSpace: {
    height: heightPercentageToDP(2),
  },
  title: {
    textAlign: 'center',
    fontFamily: Config.FONTS.regular,
    color: Config.COLORS.black,
    fontSize: widthPercentageToDP(6),
  },
  input: {
    width: widthPercentageToDP(60),
    height: heightPercentageToDP(7),
    borderBottomWidth: widthPercentageToDP(0.2),
    borderBottomColor: Config.COLORS.grey,
    fontFamily: Config.FONTS.regular,
    color: Config.COLORS.black,
    fontSize: widthPercentageToDP(4.5),
    alignSelf: 'center',
  },
  textTitle: {
    textAlign: 'center',
    fontFamily: Config.FONTS.regular,
    color: Config.COLORS.grey,
    fontSize: widthPercentageToDP(4),
  },
  inputContainer: {
    // borderBottomWidth: widthPercentageToDP(0.2),
    // borderBottomColor: Config.COLORS.black,
    borderRadius: widthPercentageToDP(3),
    width: widthPercentageToDP(90),
    height: heightPercentageToDP(7),
    marginTop: heightPercentageToDP(2),
    alignSelf: 'center',
  },
  leftIconStyle: {
    width: widthPercentageToDP(12),
    height: heightPercentageToDP(7),
    borderBottomWidth: widthPercentageToDP(0.2),
    borderBottomColor: Config.COLORS.grey,
  },
  temView: {
    width: widthPercentageToDP(100),
    height: heightPercentageToDP(0.2),
    justifyContent: 'center',
    //alignItems:"center"
  },
  percentView: {
    height: '100%',
    backgroundColor: Config.COLORS.primary,
  },
  loginTopView: {
    width: widthPercentageToDP(100),
    height: heightPercentageToDP(18),
    borderBottomLeftRadius: widthPercentageToDP(10),
    borderBottomRightRadius: widthPercentageToDP(10),
    backgroundColor: Config.COLORS.primary,
  },
  logoText: {
    fontFamily: Config.FONTS.bold,
    fontSize: widthPercentageToDP(10),
    color: Config.COLORS.white,
    position: 'absolute',
    bottom: '30%',
    left: '8%',
  },
  innerView:{
    width: widthPercentageToDP(85),
    flex:1,
    alignSelf:"center",
  },
  bigBoldText:{
    fontFamily: Config.FONTS.semiBold,
    fontSize: widthPercentageToDP(7),
    color: Config.COLORS.black,
  }
});
