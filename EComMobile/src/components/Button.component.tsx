import React from 'react';
import {StyleProp, TouchableOpacity, ViewStyle} from 'react-native';
import TextVarients from './TextVarients';

type OwnProps = {
  label: string;
  onPress: () => void;
  containerStyles?: StyleProp<ViewStyle>;
};

//Button Component for the app
const Button = ({label, onPress, containerStyles}: OwnProps) => {
  return (
    <TouchableOpacity
      style={containerStyles}
      className="flex-row justify-center align-middle m-2"
      onPress={onPress}>
      <TextVarients>{label}</TextVarients>
    </TouchableOpacity>
  );
};

export default Button;
