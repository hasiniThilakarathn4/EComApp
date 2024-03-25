import React from 'react';
import {Modal, View} from 'react-native';
import TextVarients from './TextVarients';
import Button from './Button.component';
import colors from '../res/colors';

type OwnProps = {
  isVisible: boolean;
  message?: string;
  onModalClose: () => void;
};

const ModalContainer = ({isVisible, message, onModalClose}: OwnProps) => {
  const buttonStyle = {
    backgroundColor: colors.gray,
    padding: 2,
    borderRadius: 5,
  };
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={isVisible}
      onRequestClose={onModalClose}>
      <View className="flex-1 justify-center items-center mt-2">
        <View className="items-center m-2 bg-slate-400 rounded-xl p-5 el">
          <TextVarients color="green">{message}</TextVarients>
          <Button
            label="Close"
            onPress={onModalClose}
            containerStyles={buttonStyle}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ModalContainer;
