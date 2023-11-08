import React from 'react';
import {Pressable, View, Text, Image} from 'react-native';
import PropTypes from 'prop-types';

import style from './style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlay} from '@fortawesome/free-solid-svg-icons';
import Header from '../Header/Header';
import {scaleFontSize} from '../../assets/styles/scaling';

const SingleAlbumItem = props => {
  return (
    <Pressable>
      <View style={style.imageBox}>
        <View style={style.playButton}>
          <FontAwesomeIcon
            icon={faPlay}
            color="#FFFFFF"
            size={scaleFontSize(12)}
          />
        </View>
        <Image
          style={style.image}
          resizeMode="cover"
          source={{uri: props.image}}
        />
      </View>
      <View style={style.albumInfo}>
        <Header type={3} title={props.albumTitle} color="#FFFFFF" />
        <Text
          style={
            style.albumNumbers
          }>{`${props.albumNumberOfSongs} Songs • ${props.categoryTitle}`}</Text>
      </View>
    </Pressable>
  );
};

SingleAlbumItem.propTypes = {
  albumItemId: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  albumTitle: PropTypes.string.isRequired,
  albumNumberOfSongs: PropTypes.number.isRequired,
  categoryTitle: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

export default SingleAlbumItem;
