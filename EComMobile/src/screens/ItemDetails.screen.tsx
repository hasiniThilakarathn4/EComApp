import React, {useMemo, useState} from 'react';
import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import Container from '../components/Container.component';
import TextVarients from '../components/TextVarients';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {CartItemType, StackParams} from '../types';
import SCREENS from '.';
import Button from '../components/Button.component';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {useDispatch} from 'react-redux';
import {setCartItems} from '../common/actions/products.action';
import {
  ADD_TO_CART_BUTTON_LABEL,
  BACK_BUTTON,
  BUY_NOW_BUTTON_LABEL,
  CART_BUTTON,
  IN_STOCK,
} from '../common/constants';
import ModalContainer from '../components/ModalContainer.component';
import colors from '../res/colors';

type RouterProps = RouteProp<StackParams, SCREENS.ITEM_DETAIL_SCREEN>;

const SIZE_ERROR_MESSAGE = 'Please Select a Size';
const ITEM_ADDED_MESSAGE = 'Item added to cart';

const ItemDetails = () => {
  const {params} = useRoute<RouterProps>();
  const [selectedSize, setSelectedSize] = useState<string>(null);
  const [isItemAdded, setIsItemAdded] = useState<boolean>(false);
  const [sizeError, setSizeError] = useState<boolean>(false);
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  const dispatch = useDispatch();
  const containerStyle = {backgroundColor: colors.white, flex: 1};
  const buyNowButtonStyle = {backgroundColor: colors.yellow};
  const addToCartButtonStyle = {backgroundColor: colors.gray};
  const contentContainerStyle = {paddingBottom: 50};
  const itemToAdd: CartItemType = {
    id: params?.item?.id,
    name: params?.item?.name,
    mainImage: params?.item?.mainImage,
    price: params?.item?.price,
    colour: params?.item?.colour,
    sizes: params?.item?.sizes,
    SKU: params?.item?.SKU,
    stockStatus: params?.item?.stockStatus,
    brandName: params?.item?.brandName,
    selectedSize: selectedSize,
    description: params?.item?.description,
  };

  const handleItemToAdd = () => {
    setSizeError(!selectedSize);
    if (selectedSize && params?.item?.stockStatus === IN_STOCK) {
      dispatch(setCartItems(itemToAdd));
    }
  };

  const navToCart = () => {
    handleItemToAdd();
    if (selectedSize && params.item.stockStatus === IN_STOCK) {
      navigation.navigate({name: SCREENS.CART_SCREEN, params: {}});
    }
  };

  const handleAddToCart = () => {
    handleItemToAdd();
    setIsItemAdded(true);
  };

  const renderPriceList = useMemo(
    () => (
      <View className="flex-row">
        {params?.item?.sizes.map((price: string, index: number) => {
          const handleOnPress = () => setSelectedSize(price);
          const borderColor = {
            borderColor: selectedSize === price ? colors.red : colors.gray,
          };
          return (
            <TouchableOpacity
              key={index}
              className="flex items-center border-2 rounded-lg w-8 m-4"
              style={borderColor}
              onPress={handleOnPress}>
              <TextVarients>{price}</TextVarients>
            </TouchableOpacity>
          );
        })}
      </View>
    ),
    [selectedSize],
  );

  const renderProductDetails = useMemo(
    () => (
      <>
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
          {`${params?.item?.price?.currency} ${params?.item?.price?.amount}`}
        </TextVarients>
        <TextVarients>{'Brand Name: ' + params?.item?.brandName}</TextVarients>
        <TextVarients>{params?.item?.description}</TextVarients>
        <TextVarients>{'Color: ' + params?.item?.colour}</TextVarients>
        <TextVarients color={colors.green}>
          {params?.item?.stockStatus}
        </TextVarients>
      </>
    ),
    [params?.item],
  );

  const onModalClose = () => setIsItemAdded(false);
  const toggleModal = () => isItemAdded && !sizeError;
  return (
    <Container
      prefix={BACK_BUTTON}
      style={containerStyle}
      postfix={CART_BUTTON}>
      <ScrollView contentContainerStyle={contentContainerStyle}>
        <ModalContainer
          isVisible={toggleModal()}
          message={ITEM_ADDED_MESSAGE}
          onModalClose={onModalClose}
        />
        {renderProductDetails}
        {renderPriceList}

        <Button
          containerStyles={addToCartButtonStyle}
          label={ADD_TO_CART_BUTTON_LABEL}
          onPress={handleAddToCart}
        />
        <Button
          containerStyles={buyNowButtonStyle}
          label={BUY_NOW_BUTTON_LABEL}
          onPress={navToCart}
        />

        {sizeError && (
          <TextVarients color={colors.red}>{SIZE_ERROR_MESSAGE}</TextVarients>
        )}
      </ScrollView>
    </Container>
  );
};

export default ItemDetails;
