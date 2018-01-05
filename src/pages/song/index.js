/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text } from 'react-native';

import styles from './styles';

class Song extends Component {
    static propTypes = {}

    static defaultProps = {};

    render() {
      return (
        <View style={styles.container}>
          <Text>Song</Text>
        </View>
      );
    }
}

export default Song;
