import React, {useEffect, useState} from 'react';
import {FlatList, Image, TouchableOpacity} from 'react-native';
import TextVarients from '../components/TextVarients';
import Container from '../components/Container.component';
import {ProductItemType} from '../types';
import {useNavigation} from '@react-navigation/native';
import SCREENS from '.';
import {useDispatch, useSelector} from 'react-redux';
import {getProductData} from '../common/actions/products.action';
import {getProductsSelector} from '../common/selectors/products.selector';
import ItemCard from '../components/ItemCard.component';
import colors from '../res/colors';

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
    return <ItemCard item={item} onPress={handleOnPress} />;
  };

  const keyExtractor = (item: ProductItemType) => item.id;
  const containerStyle = {backgroundColor: colors.white};

  return (
    <Container style={containerStyle}>
      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={keyExtractor}
        renderItem={renderItems}
        contentContainerStyle={{paddingBottom: 80}}
      />
    </Container>
  );
};

export default Home;
