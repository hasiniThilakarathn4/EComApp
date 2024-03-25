import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import TextVarients from './TextVarients';
import {ProductItemType} from '../types';

type OwnProps = {
  item: ProductItemType;
  onPress?: () => void;
};

const ItemCard = ({item, onPress}: OwnProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-1 border-2 rounded-md m-1 p-3">
      <Image source={{uri: item.mainImage}} style={{height: 50, width: 50}} />
      <TextVarients fontSize={15} numberOfLines={1}>
        {item.name}
      </TextVarients>
      <TextVarients numberOfLines={2}>{item.description}</TextVarients>

      <TextVarients>
        {item.price.currency + ' ' + item.price.amount}
      </TextVarients>

      <TextVarients>Color: {item.colour}</TextVarients>
    </TouchableOpacity>
  );
};
export default ItemCard;
