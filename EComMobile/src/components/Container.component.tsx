import React from 'react';
import {SafeAreaView, StyleProp, View, ViewStyle} from 'react-native';
import Header from './Header.component';

type OwnProps = {
  children?: JSX.Element | JSX.Element[] | React.ReactNode;
  style?: StyleProp<ViewStyle>;
  prefix?: string;
  postfix?: string;
};

//Component to use as the Container throughout the app
const Container = ({children, style, prefix, postfix}: OwnProps) => {
  const renderHeader = <Header prefix={prefix} postfix={postfix} />;
  return (
    <SafeAreaView style={style}>
      <View className="p-4 bg-white">
        <View>
          {renderHeader}
          {children}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Container;
