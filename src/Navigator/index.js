import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Screen/Login';
import NameSelection from '../Screen/NameSelection';
import GenderSelection from '../Screen/GenderSelection';
import AgeSelection from '../Screen/AgeSelection';
import PhoneNo from '../Screen/PhoneNo';
import OTP from '../Screen/OTP';
import Password from '../Screen/Password';
import Congratulation from '../Screen/Congratulation';
import ClassSelection from '../Screen/ClassSelection';

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NameSelection"
        component={NameSelection}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GenderSelection"
        component={GenderSelection}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AgeSelection"
        component={AgeSelection}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PhoneNo"
        component={PhoneNo}
        options={{headerShown: false}}
      />
      <Stack.Screen name="OTP" component={OTP} options={{headerShown: false}} />
      <Stack.Screen
        name="Password"
        component={Password}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Congratulation"
        component={Congratulation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ClassSelection"
        component={ClassSelection}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
