import React from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';
type OwnProps = {
  fontSize?: number;
  fontFamily?: string;
  numberOfLines?: number;
  children?: string | string[];
  color?: string;
  style?: StyleProp<TextStyle>;
};

//Component for vary texts to use in the app
const TextVarients = ({
  fontSize = 12,
  fontFamily = '',
  numberOfLines,
  children = '',
  color,
  style,
  ...rest
}: OwnProps) => {
  const textStyle: TextStyle | TextStyle[] = [
    {
      fontSize: fontSize,
      fontFamily: fontFamily,
      color: color,
      paddingVertical: 5,
    },
    style,
  ];
  return (
    <Text style={textStyle} {...rest} numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
};

export default TextVarients;
