/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

const SongItem = props => (
  <TouchableOpacity
    activeOpacity={0.6}
    onPress={props.onPress}
    style={[
      styles.container,
      props.style,
    ]}
  >
    <Image
      style={styles.image}
      source={{ uri: props.song.thumbnail }}
    />

    <View style={styles.songInfo}>
      <Text style={styles.title}>{ props.song.title }</Text>
      <Text style={styles.description}>{ props.song.author }</Text>
    </View>
  </TouchableOpacity>
);

SongItem.propTypes = {
  song: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
    thumbnail: PropTypes.string,
  }).isRequired,
  style: View.propTypes.style,
  onPress: PropTypes.func.isRequired,
};

SongItem.defaultProps = {
  style: {},
};

export default SongItem;
