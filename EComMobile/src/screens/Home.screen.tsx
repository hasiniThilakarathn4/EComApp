import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import Container from '../components/Container.component';
import {ProductItemType, StackParams} from '../types';
import {useNavigation} from '@react-navigation/native';
import SCREENS from '.';
import {useDispatch, useSelector} from 'react-redux';
import {getProductData} from '../common/actions/products.action';
import {getProductsSelector} from '../common/selectors/products.selector';
import ItemCard from '../components/ItemCard.component';
import colors from '../res/colors';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(getProductsSelector);

  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  const contentContainerStyle = {paddingBottom: 80};
  const containerStyle = {backgroundColor: colors.white};

  useEffect(() => {
    dispatch(getProductData());
  }, []);

  const renderItems = ({item}: {item: ProductItemType}) => {
    const handleOnPress = () =>
      navigation.navigate({name: SCREENS.ITEM_DETAIL_SCREEN, params: {item}});
    return <ItemCard item={item} onPress={handleOnPress} />;
  };

  const keyExtractor = (item: ProductItemType) => item?.id;

  return (
    <Container style={containerStyle}>
      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={keyExtractor}
        renderItem={renderItems}
        contentContainerStyle={contentContainerStyle}
      />
    </Container>
  );
};

export default Home;
