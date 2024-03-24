import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import TextVarients from './TextVarients';
import {ProductItemType, StackParams} from '../types';
import {useNavigation} from '@react-navigation/native';
import SCREENS from '../screens';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const ItemCard = ({item}: {item: ProductItemType}) => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  const handleOnPress = () =>
    navigation.navigate({name: SCREENS.ITEM_DETAIL_SCREEN, params: {item}});

  return (
    <TouchableOpacity
      onPress={handleOnPress}
      className="flex-1 border-0 m-4 p-4"
      style={{
        flex: 1,
        borderWidth: 1,
        borderRadius: 10,
        margin: 10,
        padding: 10,
      }}>
      <Image source={{uri: item.mainImage}} style={{height: 50, width: 50}} />
      <TextVarients numberOfLines={2}>{item.name}</TextVarients>
      <TextVarients>Color: {item.colour}</TextVarients>
    </TouchableOpacity>
  );
};
export default ItemCard;
