import React from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';
import Tooltip from 'rn-tooltip';

const Tooltiped = ({children, text, backgroundColor, withOverlay, styles}) => (
  <Tooltip
    popover={<Text>{text}</Text>}
    containerStyle={{...styles}}
    backgroundColor={backgroundColor}
    withOverlay={withOverlay}>
    {children}
  </Tooltip>
);

Tooltiped.defaultProps = {
  styles: {},
  backgroundColor: `#ededed`,
  withOverlay: false,
};

Tooltiped.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  withOverlay: PropTypes.bool,
  styles: PropTypes.shape({}),
};

export default Tooltiped;
