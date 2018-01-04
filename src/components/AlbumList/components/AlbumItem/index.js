/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, TouchableOpacity, Image, Text } from 'react-native';

/* Redux */
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import styles from './styles';

export class AlbumItem extends Component {
  static propTypes = {
    album: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      author: PropTypes.string,
      thumbnail: PropTypes.string,
    }).isRequired,
    style: View.propTypes.style,
    dispatch: PropTypes.func.isRequired,
  };

  static defaultProps = {
    style: {},
  };

  navigateToAlbum = () => {
    const { album, dispatch } = this.props;

    return dispatch(NavigationActions.navigate({
      routeName: 'Album',
      params: { album },
    }));
  };

  render() {
    const { album, style } = this.props;
    return (
      <TouchableOpacity
        style={[styles.container, style]}
        onPress={this.navigateToAlbum}
        activeOpacity={0.6}
      >
        <Image
          style={styles.image}
          source={{ uri: album.thumbnail }}
        />

        <Text style={styles.title}>{ album.title }</Text>
        <Text style={styles.description}>{ album.author }</Text>
      </TouchableOpacity>
    );
  }
}

export default connect()(AlbumItem);
