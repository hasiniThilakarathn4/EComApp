import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import axios from 'axios';
import TextVarients from '../components/TextVarients';
import Container from '../components/Container';
import {ProductItemType, StackParams} from '../types';
import {useNavigation} from '@react-navigation/native';
import SCREENS from '.';
import {useDispatch, useSelector} from 'react-redux';
import {getProductData} from '../common/actions/products.action';
import {getProductsSelector} from '../common/selectors/products.selector';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(getProductsSelector);

  const navigation = useNavigation<any>();

  useEffect(() => {
    dispatch(getProductData());
  }, []);

  const renderItems = ({item}: {item: ProductItemType}) => {
    const handleOnPress = () =>
      navigation.navigate({name: SCREENS.ITEM_DETAIL_SCREEN, params: {item}});

    return (
      <TouchableOpacity
        onPress={handleOnPress}
        className="flex-1 border-2 rounded-md m-2 p-3">
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

  const keyExtractor = (item: ProductItemType) => item.id;
  const containerStyle = {backgroundColor: 'white'};

  return (
    <Container style={containerStyle}>
      <FlatList
        data={products.data}
        numColumns={2}
        keyExtractor={keyExtractor}
        renderItem={renderItems}
        contentContainerStyle={{paddingBottom: 80}}
      />
    </Container>
  );
};

export default Home;
