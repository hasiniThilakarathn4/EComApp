import React, {useMemo, useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Container from '../components/Container';
import TextVarients from '../components/TextVarients';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {CartItemType, StackParams} from '../types';
import SCREENS from '.';
import Button from '../components/Button';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {useDispatch, useSelector} from 'react-redux';
import {setCartItems} from '../common/actions/products.action';
import {getCartSelector} from '../common/selectors/products.selector';
import {
  ADD_TO_CART_BUTTON_LABEL,
  BACK_BUTTON,
  BUY_NOW_BUTTON_LABEL,
  CART_BUTTON,
  IN_STOCK,
} from '../common/constants';

type RouterProps = RouteProp<StackParams, SCREENS.ITEM_DETAIL_SCREEN>;

const SIZE_ERROR_MESSAGE = 'Please Select a Size';

const ItemDetails = () => {
  const {params} = useRoute<RouterProps>();
  const [selectedSize, setSelectedSize] = useState<string>(null);
  const [sizeError, setSizeError] = useState<boolean>(false);
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  const dispatch = useDispatch();
  const currentCart = useSelector(getCartSelector);
  const containerStyle = {backgroundColor: 'white', flex: 1};
  const buyNowButtonStyle = {backgroundColor: 'yellow'};
  const addToCartButtonStyle = {backgroundColor: 'gray'};

  const navToCart = () => {
    setSizeError(!selectedSize);
    if (selectedSize && params.item.stockStatus === IN_STOCK) {
      const cartItem: CartItemType = {
        id: params.item.id,
        name: params.item.name,
        mainImage: params.item.mainImage,
        price: params.item.price,
        colour: params.item.colour,
        selectedSize: selectedSize,
      };

      dispatch(setCartItems(cartItem));
      navigation.navigate({name: SCREENS.CART_SCREEN, params: {}});
    }
  };
  const renderPriceList = useMemo(
    () => (
      <View style={{display: 'flex', flexDirection: 'row'}}>
        {params?.item?.sizes.map((price: string, index: number) => {
          const handleOnPress = () => setSelectedSize(price);
          const borderColor = {
            borderColor: selectedSize === price ? 'red' : 'gray',
          };
          return (
            <TouchableOpacity
              key={index}
              className="flex items-center border-2 rounded-lg w-8 m-4"
              style={borderColor}
              onPress={handleOnPress}>
              <Text>{price}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    ),
    [selectedSize],
  );

  return (
    <Container
      prefix={BACK_BUTTON}
      style={containerStyle}
      postfix={CART_BUTTON}>
      <ScrollView>
        <View className="flex items-center">
          <Image
            source={{
              uri: params?.item?.mainImage,
            }}
            className="h-60 w-60"
          />
        </View>
        <TextVarients fontSize={20}>
          {params?.item?.SKU + ' : ' + params?.item?.name}
        </TextVarients>
        <TextVarients>
          {params?.item?.price?.currency + ' ' + params?.item?.price?.amount}
        </TextVarients>
        <TextVarients>{'Brand Name: ' + params?.item?.brandName}</TextVarients>

        <TextVarients>{params?.item?.description}</TextVarients>
        <TextVarients>Color: {params?.item?.colour}</TextVarients>
        <TextVarients color={'green'}>{params?.item?.stockStatus}</TextVarients>
        {renderPriceList}
        <Button
          containerStyles={addToCartButtonStyle}
          label={ADD_TO_CART_BUTTON_LABEL}
          onPress={() => {}}
        />
        <Button
          containerStyles={buyNowButtonStyle}
          label={BUY_NOW_BUTTON_LABEL}
          onPress={navToCart}
        />
        {sizeError && (
          <TextVarients color="red">{SIZE_ERROR_MESSAGE}</TextVarients>
        )}
      </ScrollView>
    </Container>
  );
};

export default ItemDetails;
