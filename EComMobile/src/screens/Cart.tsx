import React from 'react';
import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import Container from '../components/Container';
import TextVarients from '../components/TextVarients';
import {useSelector} from 'react-redux';
import {getCartSelector} from '../common/selectors/products.selector';
import {ProductItemType} from '../types';
import Button from '../components/Button';
import {BACK_BUTTON, CHECKOUT_BUTTON_LABEL} from '../common/constants';

const Cart = () => {
  const cartItems = useSelector(getCartSelector);
  const checkoutButtonStyle = {backgroundColor: 'gray'};
  const containerStyle = {backgroundColor: 'white'};

  const renderItems = ({item}: {item: ProductItemType}) => {
    return (
      <View className="border-b-2">
        <View
          // onPress={handleOnPress}
          className="flex-row justify-between items-center rounded-md m-4 p-4">
          <View className=" p-2">
            <Image source={{uri: item.mainImage}} className="h-24 w-24" />
            <TextVarients fontSize={15}>{item.name}</TextVarients>
            <TextVarients numberOfLines={1}>{item.description}</TextVarients>

            <TextVarients>
              {item.price.currency + ' ' + item.price.amount}
            </TextVarients>
            <TextVarients>{item.selectedSize}</TextVarients>
          </View>

          <View className="flex-row">
            <TouchableOpacity className="flex items-center justify-center  bg-red-300 p-1">
              <TextVarients>+</TextVarients>
            </TouchableOpacity>
            <TextVarients className="flex items-center justify-center border-2">
              1
            </TextVarients>
            <TouchableOpacity className="flex items-center justify-center  bg-red-300 p-1">
              <TextVarients>-</TextVarients>
            </TouchableOpacity>
          </View>
        </View>
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
