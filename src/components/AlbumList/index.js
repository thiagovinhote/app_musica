/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, ActivityIndicator, ScrollView, Text } from 'react-native';
import AlbumItemComponent, { AlbumItem } from './components/AlbumItem';

import styles from './styles';

class AlbumList extends Component {
    static propTypes = {
      title: PropTypes.string,
      loading: PropTypes.bool,
      albums: PropTypes.arrayOf(AlbumItem.propTypes.album).isRequired,
    }

    static defaultProps = {
      title: 'Álbuns',
      loading: false,
    };

    renderContent = () => (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        { this.props.albums.map((album, index) => (
          <AlbumItemComponent
            key={album.id}
            style={[
              styles.listItem,
              (index === 0) ? styles['listItem-first'] : {},
              (index === (this.props.albums.length - 1)) ? styles['listItem-last'] : {},
            ]}
            album={album}
          />
        )) }
      </ScrollView>
    );

    render() {
      return (
        <View style={[styles.section, styles.listSection]}>
          <Text
            style={[
              styles.sectionTitle,
              styles.listSectionTitle,
            ]}
          >
            {this.props.title}
          </Text>

          { this.props.loading
            ? <ActivityIndicator size="small" color="#FA6733" />
            : this.renderContent() }
        </View>
      );
    }
}

export default AlbumList;
