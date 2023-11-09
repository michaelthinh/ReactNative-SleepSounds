import React from 'react';
import {Pressable} from 'react-native';
import PropTypes from 'prop-types';

import style from './style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons';

const CloseButton = props => {
  return (
    <Pressable style={style.closeButton} onPress={() => props.onPress()}>
      <FontAwesomeIcon icon={faXmark} color={props.color} size={props.size} />
    </Pressable>
  );
};

CloseButton.propTypes = {
  onPress: PropTypes.func,
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

export default CloseButton;
