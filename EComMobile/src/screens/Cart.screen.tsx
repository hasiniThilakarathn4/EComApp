import React from 'react';
import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import Container from '../components/Container.component';
import TextVarients from '../components/TextVarients';
import {useDispatch, useSelector} from 'react-redux';
import {getCartSelector} from '../common/selectors/products.selector';
import {ProductItemType, StackParams} from '../types';
import Button from '../components/Button.component';
import {BACK_BUTTON, CHECKOUT_BUTTON_LABEL} from '../common/constants';
import {
  decrementItemCount,
  incrementItemCount,
} from '../common/actions/products.action';
import colors from '../res/colors';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import SCREENS from '.';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(getCartSelector);
  const checkoutButtonStyle = {
    backgroundColor: colors.gray,
    marginTop: 10,
  };
  const containerStyle = {backgroundColor: colors.white};
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  const renderItems = ({item}: {item: ProductItemType}) => {
    const OnIncrementItemCount = () => dispatch(incrementItemCount(item.id));
    const onDecrementCount = () => dispatch(decrementItemCount(item.id));
    const navToItemDetails = () =>
      navigation.navigate({name: SCREENS.ITEM_DETAIL_SCREEN, params: {item}});

    return (
      <View className="border-b-2 border-gray-400">
        <TouchableOpacity
          className="flex-row justify-between items-center bg-white rounded-md m-2 p-3 shadow-md"
          onPress={navToItemDetails}>
          <View className="flex-1 p-2">
            <Image
              source={{uri: item.mainImage}}
              className="h-24 w-24 rounded-md"
            />
            <TextVarients fontSize={16} numberOfLines={1} className="mt-2">
              {item.name}
            </TextVarients>
            <TextVarients className="mt-1">
              {`${item.price.currency} ${item.price.amount}`}
            </TextVarients>
            <TextVarients className="mt-1">
              Size: {item.selectedSize}
            </TextVarients>
          </View>

          <View className="flex-row items-center">
            <TouchableOpacity
              onPress={OnIncrementItemCount}
              className="flex items-center justify-center bg-blue-500 p-2 rounded-full">
              <TextVarients fontSize={18} className="text-white">
                +
              </TextVarients>
            </TouchableOpacity>
            <TextVarients className="mx-4 border-2 p-1 rounded">
              {item.ItemCount}
            </TextVarients>
            <TouchableOpacity
              onPress={onDecrementCount}
              className="flex items-center justify-center  bg-blue-500 p-2 rounded-full">
              <TextVarients className="text-white">-</TextVarients>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const onPressCheckout = () => {};

  return (
    <Container prefix={BACK_BUTTON} style={containerStyle}>
      <FlatList
        data={cartItems}
        keyExtractor={item => item.id}
        renderItem={renderItems}
        contentContainerStyle={{paddingBottom: 80}}
        ListFooterComponent={
          <Button
            label={CHECKOUT_BUTTON_LABEL}
            onPress={onPressCheckout}
            containerStyles={checkoutButtonStyle}
          />
        }
      />
    </Container>
  );
};

export default Cart;
