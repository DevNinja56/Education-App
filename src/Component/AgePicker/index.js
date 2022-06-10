import React, {useRef, useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import SmoothPicker from 'react-native-smooth-picker';
import {age} from './age';
import Config from '../../utils/config';

const opacities = {
  0: 1,
  1: 1,
  2: 0.6,
  3: 0.3,
  4: 0.1,
};
const sizeText = {
  0: widthPercentageToDP(7),
  1: widthPercentageToDP(5),
  2: widthPercentageToDP(4),
};

const Item = React.memo(({opacity, selected, vertical, fontSize, name}) => {
  return (
    <View
      style={[
        styles.OptionWrapper,
        {
          opacity,
          borderColor: selected ? Config.COLORS.primary : 'transparent',
          //width: vertical ? 180 : 'auto',
        },
      ]}>
      <Text style={{fontSize}}>{name}</Text>
    </View>
  );
});

const ItemToRender = ({item, index}, indexSelected, vertical) => {
  const selected = index === indexSelected;
  const gap = Math.abs(index - indexSelected);

  let opacity = opacities[gap];
  if (gap > 3) {
    opacity = opacities[4];
  }
  let fontSize = sizeText[gap];
  if (gap > 1) {
    fontSize = sizeText[2];
  }

  return (
    <Item
      opacity={opacity}
      selected={selected}
      vertical={vertical}
      fontSize={fontSize}
      name={item}
    />
  );
};

const AgePicker = ({parentCallback, AgeConditions}) => {
  const AgeConditiond = AgeConditions;
  const [selected, setSelected] = useState(7);
  const refPicker = useRef(null);

  const handleChange = index => {
    setSelected(index);
    refPicker.current.scrollToIndex({
      animated: false,
      index: index,
      viewOffset: -30,
    });
  };

  useEffect(() => {
    if (AgeConditiond) {
      setSelected(AgeConditiond.AgeConditions.currentAge);
    }
  }, [AgeConditiond]);

  useEffect(() => {
    parentCallback({
      AgeConditions: {
        currentAge: selected,
      },
    });
  }, [selected]);

  return (
    <View style={styles.container}>
      <View style={styles.wrapperHorizontal}>
        <SmoothPicker
          initialScrollToIndex={selected}
          refFlatList={refPicker}
          keyExtractor={(_, index) => index.toString()}
          horizontal={true}
          scrollAnimation
          showsHorizontalScrollIndicator={false}
          data={age}
          onSelected={({item, index}) => handleChange(index)}
          renderItem={option => ItemToRender(option, selected, false)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: widthPercentageToDP(95),
    //paddingTop: 10,
    //paddingBottom: 30,
    marginTop: heightPercentageToDP(3),
    //borderRadius: widthPercentageToDP(10),
    //borderWidth: widthPercentageToDP(0.1),
    //borderColor: Config.COLORS.grey,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: Config.COLORS.lightOffWhite,
    alignSelf: 'center',
  },
  wrapperHorizontal: {
    width: widthPercentageToDP(95),
    height: heightPercentageToDP(14),
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    color: 'black',
    //backgroundColor: 'red',
  },
  wrapperVertical: {
    width: 250,
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
    //margin: 'auto',
    color: 'black',
  },
  OptionWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: heightPercentageToDP(1),
    // marginBottom: 10,
    // paddingTop: 10,
    // paddingBottom: 10,
    // paddingLeft: 30,
    // paddingRight: 30,
    height: widthPercentageToDP(16),
    width: widthPercentageToDP(16),
    borderWidth: widthPercentageToDP(0.4),
    borderRadius: widthPercentageToDP(16) / 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
  },
});

export default AgePicker;
