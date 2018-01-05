/* Core */
import React from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Image } from 'react-native';
import Controller from 'components/Controller';
import Header from 'components/Header';

import styles from './styles';

const Song = () => (
  <View style={styles.container}>
    <Header title="Now Playing" closeEnabled />
    <View style={styles.imageContainer}>
      <View style={styles.imageBox}>
        <Image
          style={styles.image}
          source={{ uri: 'https://i.ytimg.com/vi/8VDjPYcL-oU/maxresdefault.jpg' }}
        />
      </View>
    </View>
    <Controller />
  </View>
);

export default Song;
