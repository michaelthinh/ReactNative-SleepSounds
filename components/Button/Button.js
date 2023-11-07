import React from 'react';
import {Pressable, Text} from 'react-native';

import PropTypes from 'prop-types';
import style from './style';

const Button = props => {
  return (
    <Pressable
      disabled={props.isDisabled}
      style={[
        style.button,
        props.isDisabled && style.disabled,
        {backgroundColor: props.color},
      ]}
      onPress={() => props.onPress()}>
      <Text style={style.title}>{props.title}</Text>
    </Pressable>
  );
};

Button.default = {
  isDisabled: false,
  onPress: () => {},
  color: '#FFFFFF',
};
Button.propTypes = {
  title: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  onPress: PropTypes.func,
  color: PropTypes.string,
};

export default Button;
