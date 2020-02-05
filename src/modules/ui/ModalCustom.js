import React from 'react';
import PropTypes from 'prop-types';
import {Modal, View} from 'react-native';

const ModalCustom = ({visible, animationType, transparent, styles, onRequestClose, children}) => {
  return (
    <Modal
      visible={visible}
      animationType={animationType}
      transparent={transparent}
      onRequestClose={onRequestClose}>
      <View style={{...styles}}>{children}</View>
    </Modal>
  );
};

ModalCustom.defaultProps = {
  visible: false,
  animationType: `slide`,
  transparent: false,
  onRequestClose: () => true,
  styles: {},
};

ModalCustom.propTypes = {
  visible: PropTypes.bool,
  animationType: PropTypes.string,
  transparent: PropTypes.bool,
  styles: PropTypes.shape({}),
  onRequestClose: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default ModalCustom;
