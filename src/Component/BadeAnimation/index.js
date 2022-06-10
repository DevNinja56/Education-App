import React from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';

export default class BasicExample extends React.Component {
  componentDidMount() {
    this.animation.play();
    // Or set a specific startFrame and endFrame with:
    //this.animation.play(30, 120);
  }

  render() {
    return (
      <View
        style={{
          width: widthPercentageToDP(80),
          height: widthPercentageToDP(80),
          alignSelf:"center"
        }}>
        <LottieView
          ref={animation => {
            this.animation = animation;
          }}
          source={require('../../images/badge-animation.json')}
          autoPlay
          loop
          style={{
            width:"100%",
            height:"100%"
          }}
          resizeMode = "cover"
        />
      </View>
    );
  }
}
