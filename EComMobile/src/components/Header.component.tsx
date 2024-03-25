import React from 'react';
import {StatusBar, TouchableOpacity, View} from 'react-native';
import TextVarients from './TextVarients';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParams} from '../types';
import SCREENS from '../screens';

type OwnProps = {
  prefix?: any;
  postfix?: any;
};
//Header for screens
const Header = ({prefix, postfix}: OwnProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  const backNavigation = () => {
    navigation.goBack();
  };

  const navToCart = () =>
    navigation.navigate({name: SCREENS.CART_SCREEN, params: {}});
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <View className="flex-row justify-between">
        {prefix && (
          <TouchableOpacity
            onPress={backNavigation}
            className=" items-center border-0 rounded-md bg-slate-500 w-10">
            <TextVarients>{prefix}</TextVarients>
          </TouchableOpacity>
        )}
        {postfix && (
          <TouchableOpacity
            onPress={navToCart}
            className=" items-center border-0 rounded-md bg-slate-500 w-10">
            <TextVarients>{postfix}</TextVarients>
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

export default Header;
